import fs from 'fs'
import path from 'path'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, jobId, message, resumeBase64, phone } = body

    // Validate required fields
    if (!name || !email || !jobId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }

    // Persist application locally (simple JSON append)
    const dataDir = path.resolve('./data')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
    const file = path.join(dataDir, 'applications.json')
    let apps = []
    if (fs.existsSync(file)) {
      try { apps = JSON.parse(fs.readFileSync(file)) } catch(e) { apps = [] }
    }
    const record = { id: `${Date.now()}`, name, email, jobId, phone, message, receivedAt: new Date().toISOString() }
    apps.push(record)
    fs.writeFileSync(file, JSON.stringify(apps, null, 2))

    // Save resume if present (base64)
    if (resumeBase64) {
      const matches = resumeBase64.match(/^data:(.+);base64,(.+)$/)
      let ext = 'bin'
      let b64 = resumeBase64
      if (matches) { ext = matches[1].split('/').pop(); b64 = matches[2] }
      const buf = Buffer.from(b64, 'base64')
      const resumePath = path.join(dataDir, `resume-${record.id}.${ext}`)
      fs.writeFileSync(resumePath, buf)
    }

    // Send email notification to admin using Resend
    if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'noreply@resend.dev',
          to: process.env.ADMIN_EMAIL,
          subject: `New Job Application: ${name} - ${jobId}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Job Application</h2>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Position Applied:</strong> ${jobId}</p>
              
              ${message ? `
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <h3>Cover Letter/Message:</h3>
                <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">
                  ${message}
                </p>
              ` : ''}
              
              ${resumeBase64 ? `
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #666;"><strong>Resume:</strong> Attached to application</p>
              ` : ''}
              
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">
                Application ID: ${record.id}<br>
                Received on: ${new Date().toLocaleString()}
              </p>
            </div>
          `
        })
      } catch (err) {
        console.error('Failed to send application email:', err)
      }
    }

    // Send confirmation email to candidate
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'noreply@resend.dev',
          to: email,
          subject: 'Application Received - Deodha',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Application Received!</h2>
              <p>Hi ${name},</p>
              <p>Thank you for applying to the <strong>${jobId}</strong> position at Deodha. We have received your application and will review it shortly.</p>
              
              <p>We appreciate your interest in joining our team!</p>
              
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">
                Best regards,<br>
                <strong>Deodha Recruitment Team</strong>
              </p>
            </div>
          `
        })
      } catch (err) {
        console.error('Failed to send confirmation email:', err)
      }
    }

    return new Response(JSON.stringify({ ok: true, id: record.id }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}

