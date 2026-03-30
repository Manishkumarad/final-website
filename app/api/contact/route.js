import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
  try {
    const { first_name, last_name, user_email, user_phone, company_name, project_type, budget, message } = await request.json()

    // Validate required fields
    if (!first_name || !last_name || !user_email || !project_type || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(user_email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@resend.dev',
      to: process.env.ADMIN_EMAIL || 'admin@deodha.com',
      subject: `New Project Enquiry from ${first_name} ${last_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Project Enquiry</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p><strong>Name:</strong> ${first_name} ${last_name}</p>
          <p><strong>Email:</strong> <a href="mailto:${user_email}">${user_email}</a></p>
          <p><strong>Phone:</strong> ${user_phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company_name || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${project_type}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Received on: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    })

    if (adminEmailResult.error) {
      console.error('Failed to send admin email:', adminEmailResult.error)
      return NextResponse.json(
        { error: 'Failed to send enquiry' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@resend.dev',
      to: user_email,
      subject: 'We received your enquiry - Deodha',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You!</h2>
          <p>Hi ${first_name},</p>
          <p>Thank you for reaching out to us. We have received your enquiry and will get back to you as soon as possible.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <h3>Your Enquiry Details:</h3>
          <p><strong>Project Type:</strong> ${project_type}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p>Best regards,<br><strong>Deodha Team</strong></p>
        </div>
      `
    })

    console.log('Enquiry processed successfully:', {
      name: `${first_name} ${last_name}`,
      email: user_email,
      projectType: project_type,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { message: 'Enquiry sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
