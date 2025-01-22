import {NextResponse, NextRequest } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER!,
    pass: process.env.GMAIL_PASS!,
  },
})

const sendEmail = async (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    html,
  }

  await transporter.sendMail(mailOptions)
}

export async function POST(req: NextRequest){
  {
    if (req.method === "POST") {
      const { name, email, message } = await req.json()
  
      try {
        // Email to your email address
        await sendEmail(
          process.env.GMAIL_USER!,
          "New Contact Form Submission",
          `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 20px 0; text-align: center; background-color: #0076BE;">
                  <h1 style="color: #ffffff; margin: 0;">Code X Sol</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; background-color: #ffffff;">
                  <h2 style="color: #0076BE; margin-top: 0;">New Contact Form Submission</h2>
                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><strong>Name:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><strong>Email:</strong></td>
                      <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px;"><strong>Message:</strong></td>
                      <td style="padding: 10px;">${message}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; text-align: center; background-color: #eeeeee; color: #666666;">
                  <p style="margin: 0;">&copy; ${new Date().getFullYear()} Code X Sol. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </body>
          </html>
          `,
        )
  
        // Email to the user
        await sendEmail(
          email,
          "Thank you for contacting Code X Sol",
          `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for contacting Code X Sol</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
            <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse;">
              <tr>
                <td style="padding: 20px 0; text-align: center; background-color: #0076BE;">
                  <h1 style="color: #ffffff; margin: 0;">Code X Sol</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; background-color: #ffffff;">
                  <h2 style="color: #0076BE; margin-top: 0;">Thank You for Reaching Out</h2>
                  <p>Dear ${name},</p>
                  <p>Thank you for contacting Code X Sol. We have received your message and appreciate your interest in our services.</p>
                  <p>Our team will review your inquiry and get back to you as soon as possible. We strive to respond to all messages within 24-48 hours.</p>
                  <p>In the meantime, feel free to explore our website for more information about our services and recent projects.</p>
                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 20px 0;">
                        <a href="https://www.codexsol.vercel.app" style="background-color: #0076BE; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Visit Our Website</a>
                      </td>
                    </tr>
                  </table>
                  <p>Best regards,</p>
                  <p><strong>The Code X Sol Team</strong></p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; text-align: center; background-color: #eeeeee; color: #666666;">
                  <p style="margin: 0;">&copy; ${new Date().getFullYear()} Code X Sol. All rights reserved.</p>
                  <p style="margin: 10px 0 0;"></p>
                </td>
              </tr>
            </table>
          </body>
          </html>
          `,
        )
  
        return NextResponse.json(
          {
            success: true,
            message:
              "Thank you for contacting us. We'll get back to you as soon as possible.",
          },
          { status: 200 }
        );
      } catch (error) {
        console.error(error)
        return NextResponse.json(
          {
            success: false,
            error: "Failed to send message. Please try again later.",
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json("Method Not Allowed", { status: 405 })

    }
  }
}

