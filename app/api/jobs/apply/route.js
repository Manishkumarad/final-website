import { Resend } from 'resend'

export const runtime = 'nodejs'

export async function POST(req) {
  try {
    const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

    const body = await req.json()
    const { name, email, jobId, message, resumeBase64, phone } = body

    // Validate required fields
    if (!name || !email || !jobId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }

    // Generate an application id for logs and email traceability.
    const record = { id: `${Date.now()}`, name, email, jobId, phone, message, receivedAt: new Date().toISOString() }
    let resumeAttachment = null

    if (resumeBase64) {
      const matches = resumeBase64.match(/^data:(.+);base64,(.+)$/)
      if (matches) {
        const mime = matches[1]
        const content = matches[2]
        const ext = mime.split('/').pop() || 'bin'
        resumeAttachment = {
          filename: `resume-${record.id}.${ext}`,
          content
        }
      }
    }

    // Send email notification to admin using Resend
    if (resend && process.env.ADMIN_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'noreply@resend.dev',
          to: process.env.ADMIN_EMAIL,
          reply_to: email,
          subject: `New Job Application: ${name} - ${jobId}`,
          attachments: resumeAttachment ? [resumeAttachment] : undefined,
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
    if (resend) {
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

