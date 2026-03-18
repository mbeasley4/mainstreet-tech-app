import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const HR_EMAIL = 'hr@mainstreetdbas.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, jobTitle, coverLetter } = body;

    if (!firstName || !lastName || !email || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Careers <careers@mainstreettech.com>',
      to: HR_EMAIL,
      replyTo: email,
      subject: `Application: ${jobTitle}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: #1e3a5f; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Job Application</h1>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 14px;">${jobTitle}</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #64748b; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 8px 0; font-size: 15px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #64748b; font-size: 13px;">Phone</td>
                <td style="padding: 8px 0; font-size: 15px;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #64748b; font-size: 13px;">Position</td>
                <td style="padding: 8px 0; font-size: 15px;">${jobTitle}</td>
              </tr>
            </table>

            ${coverLetter ? `
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
              <p style="font-weight: 600; color: #64748b; font-size: 13px; margin: 0 0 8px;">Cover Letter / Message</p>
              <p style="font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${coverLetter}</p>
            </div>` : ''}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Apply API error:', error);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    );
  }
}
