import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { subject, text, replyTo } = await req.json()

    // In sandbox mode, we can only send to verified emails
    const verifiedEmail = 'mark.austin@synapticshift.net'

    console.log('Creating SMTP transport with credentials:', {
      host: 'email-smtp.eu-north-1.amazonaws.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.AWS_SMTP_USERNAME,
        // Password omitted for security
      }
    })

    const transporter = nodemailer.createTransport({
      host: 'email-smtp.eu-north-1.amazonaws.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.AWS_SMTP_USERNAME,
        pass: process.env.AWS_SMTP_PASSWORD,
      },
      debug: true,
      logger: true
    })

    // Verify connection configuration
    console.log('Verifying SMTP connection...')
    await transporter.verify()
    console.log('SMTP connection verified successfully')

    const mailOptions = {
      from: {
        name: 'Synaptic Shift Assessment',
        address: verifiedEmail
      },
      to: verifiedEmail,  // Send to verified email
      subject: subject || 'New Business Assessment Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">Business Assessment Results</h2>
          
          ${text.split('\n').map(line => {
            if (line.startsWith('Answer:')) {
              return `<p style="margin: 5px 0 15px 20px; color: #666;">${line.replace('Answer:', '<strong>Answer:</strong>')}</p>`;
            } else if (line.includes('?')) {
              return `<p style="margin: 15px 0 5px 0; color: #333; font-weight: bold;">${line}</p>`;
            } else if (line === 'Contact Details:') {
              return `<h3 style="margin-top: 30px; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">${line}</h3>`;
            } else if (line.includes(':')) {
              const [label, value] = line.split(':');
              return `<p style="margin: 5px 0; color: #666;"><strong>${label}:</strong> ${value}</p>`;
            }
            return `<p style="margin: 5px 0; color: #666;">${line}</p>`;
          }).join('')}
        </div>
      `,
      replyTo: replyTo || verifiedEmail
    }

    console.log('Sending email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      replyTo: mailOptions.replyTo
    })

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.response)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      response: error.response,
      command: error.command
    })
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
} 