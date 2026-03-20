import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    /* ── Email to salon owner ── */
    await transporter.sendMail({
      from: `"Ann's Salon Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 Contact: ${subject || "General Enquiry"} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
            .wrapper { max-width: 600px; margin: 0 auto; background: #fff; overflow: hidden; }
            .header { background: #0a0808; padding: 28px 36px; }
            .header h1 { color: #c9a96e; font-size: 20px; font-weight: 900; margin: 0 0 5px; text-transform: uppercase; }
            .header p { color: #555; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em; }
            .body { padding: 32px 36px; }
            .label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #aaa; margin-bottom: 3px; }
            .value { font-size: 15px; font-weight: bold; color: #0a0808; margin-bottom: 18px; }
            .message-box { background: #f8f7f5; border-left: 3px solid #c9a96e; padding: 20px; font-size: 14px; color: #333; line-height: 1.75; white-space: pre-wrap; word-wrap: break-word; }
            .divider { border: none; border-top: 1px solid #f0ece8; margin: 20px 0; }
            .reply-note { background: #fffbf0; border-left: 3px solid #c9a96e; padding: 12px 16px; margin-top: 20px; font-size: 12px; color: #7a5c00; line-height: 1.6; }
            .footer { background: #0a0808; padding: 18px 36px; }
            .footer p { color: #444; font-size: 11px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Contact Message</h1>
              <p>Ann's Haircut & Beauty Salon — Website Contact Form</p>
            </div>
            <div class="body">
              <div class="label">From</div>
              <div class="value">${name}</div>

              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${email}" style="color:#c9a96e;text-decoration:none;">${email}</a>
              </div>

              ${phone ? `<div class="label">Phone</div><div class="value">${phone}</div>` : ""}
              ${subject ? `<div class="label">Subject</div><div class="value">${subject}</div>` : ""}

              <hr class="divider" />

              <div class="label">Message</div>
              <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

              <div class="reply-note">
                💡 Hit <strong>Reply</strong> in your email client to respond directly to ${name} at ${email}.
              </div>
            </div>
            <div class="footer">
              <p>Submitted via the contact form on Ann's Haircut and Beauty Salon website.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    /* ── Auto-reply to the sender ── */
    await transporter.sendMail({
      from: `"Ann's Haircut & Beauty Salon" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `✅ We got your message — Ann's Salon`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
            .wrapper { max-width: 600px; margin: 0 auto; background: #fff; overflow: hidden; }
            .header { background: #0a0808; padding: 28px 36px; }
            .header h1 { color: #c9a96e; font-size: 20px; font-weight: 900; margin: 0 0 5px; text-transform: uppercase; }
            .header p { color: #555; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em; }
            .body { padding: 32px 36px; }
            .greeting { font-size: 15px; color: #333; line-height: 1.75; }
            .info-box { background: #f8f7f5; border-left: 3px solid #c9a96e; padding: 16px 20px; margin: 24px 0; font-size: 13px; color: #555; line-height: 1.8; }
            .cta { display: inline-block; background: #c9a96e; color: #000; font-weight: 900; text-decoration: none; padding: 14px 28px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.15em; margin-top: 20px; }
            .footer { background: #0a0808; padding: 18px 36px; }
            .footer p { color: #444; font-size: 11px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>Message Received</h1>
              <p>Ann's Haircut & Beauty Salon</p>
            </div>
            <div class="body">
              <p class="greeting">
                Hi <strong>${name}</strong>,<br /><br />
                Thanks for reaching out! We've received your message and will get back to you within 24 hours.
              </p>
              <div class="info-box">
                📍 <strong>Ann's Haircut and Beauty Salon</strong><br />
                2025 Dandenong Rd, Clayton VIC 3168, Australia<br /><br />
                📞 <strong>+61 3 XXXX XXXX</strong><br />
                🕐 Mon–Sat: 9AM–6PM &nbsp;|&nbsp; Sun: 10AM–4PM
              </div>
              <p style="font-size:13px;color:#666;line-height:1.7;">
                Need to book an appointment? You can do it online right now.
              </p>
              <a href="${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/booking" class="cta">Book a Slot →</a>
            </div>
            <div class="footer">
              <p>You're receiving this because you submitted a contact form on our website. Appointment-only private studio.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}