import nodemailer from "nodemailer";

/* ── GET: Show the reply form to staff ── */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("data");

  if (!raw) {
    return new Response("<p>Missing data.</p>", {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  const booking = JSON.parse(decodeURIComponent(raw));
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return new Response(replyFormPage(booking, raw, base), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

/* ── POST: Staff submits the reply form → email sent to client ── */
export async function POST(request) {
  try {
    const formData = await request.formData();
    const raw      = formData.get("data");
    const message  = formData.get("message");

    if (!raw || !message) {
      return new Response("<p>Missing data or message.</p>", {
        status: 400,
        headers: { "Content-Type": "text/html" },
      });
    }

    const booking = JSON.parse(decodeURIComponent(raw));
    const { service, date, time, name, phone, email } = booking;

    if (!email) {
      return new Response(noEmailPage(name, phone), {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Your Studio" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `📩 Message from Your Studio — Re: ${service} on ${date}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            * { box-sizing: border-box; }
            body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
            .wrapper { max-width: 600px; margin: 0 auto; background: #fff; overflow: hidden; }
            .header { background: #0a0808; padding: 32px 40px; }
            .header h1 { color: #c9a96e; font-size: 22px; font-weight: 900; margin: 0 0 6px; text-transform: uppercase; }
            .header p { color: #666; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em; }
            .body { padding: 32px 40px; }
            .greeting { font-size: 15px; color: #333; line-height: 1.7; margin-bottom: 24px; }
            .booking-ref { background: #f8f7f5; padding: 14px 18px; border-left: 3px solid #c9a96e; margin-bottom: 24px; font-size: 13px; color: #777; }
            .booking-ref strong { color: #0a0808; }
            .message-box { background: #fff; border: 1px solid #e8e0d8; padding: 24px; font-size: 14px; color: #333; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word; }
            .reply-note { font-size: 12px; color: #aaa; margin-top: 20px; line-height: 1.7; }
            .footer { background: #0a0808; padding: 20px 40px; }
            .footer p { color: #444; font-size: 11px; margin: 0; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>Message from Your Studio</h1>
              <p>Private Studio · Dahisar East, Mumbai</p>
            </div>
            <div class="body">
              <p class="greeting">Hi <strong>${name}</strong>,</p>

              <div class="booking-ref">
                Regarding your booking request: <strong>${service}</strong> on <strong>${date}</strong> at <strong>${time}</strong>
              </div>

              <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

              <p class="reply-note">
                To respond, simply reply to this email — our team will get back to you promptly.<br />
                You can also call or WhatsApp us directly.
              </p>
            </div>
            <div class="footer">
              <p>Private, single-seat studio — appointment-only. Barkat Villa, Shop No 2/3, Zen 11, Maratha Colony, Dahisar East, Mumbai 400068.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(sentPage(name, email, service, date, time), {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("Reply error:", error);
    return new Response(`<p style="color:red">Error: ${error.message}</p>`, {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }
}

/* ══════════════════════════════════════════
   HTML PAGES
══════════════════════════════════════════ */

function replyFormPage(booking, raw, base) {
  const { service, date, time, name, phone, email } = booking;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Send Reply — ${name}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 24px; min-height: 100vh; }
    .wrapper { max-width: 600px; margin: 0 auto; }
    .header { background: #0a0808; padding: 28px 36px; margin-bottom: 0; }
    .header h1 { color: #c9a96e; font-size: 20px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: -0.01em; }
    .header p { color: #555; font-size: 11px; margin: 5px 0 0; text-transform: uppercase; letter-spacing: 0.2em; }
    .card { background: #fff; padding: 36px; }
    .booking-summary { background: #f8f7f5; border-left: 3px solid #c9a96e; padding: 16px 20px; margin-bottom: 28px; }
    .bs-row { display: flex; gap: 32px; flex-wrap: wrap; }
    .bs-item { }
    .bs-label { font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #aaa; margin-bottom: 2px; }
    .bs-value { font-size: 14px; font-weight: bold; color: #0a0808; }
    label { display: block; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.18em; color: #777; margin-bottom: 8px; margin-top: 20px; }
    textarea { width: 100%; padding: 16px; font-family: Arial, sans-serif; font-size: 14px; color: #0a0808; border: 2px solid rgba(0,0,0,0.12); resize: vertical; min-height: 180px; line-height: 1.6; outline: none; }
    textarea:focus { border-color: #0a0808; }
    .hint { font-size: 12px; color: #aaa; margin: 8px 0 0; line-height: 1.5; }
    .btn-row { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
    .btn-send { background: #0a0808; color: #c9a96e; font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; padding: 14px 32px; border: none; cursor: pointer; }
    .btn-send:hover { background: #1a1a1a; }
    .to-label { font-size: 12px; color: #777; margin-bottom: 24px; }
    .to-label strong { color: #0a0808; }
    .footer { background: #f0ece8; padding: 14px 36px; }
    .footer p { font-size: 11px; color: #aaa; margin: 0; }
    .no-email-warning { background: #fff3cd; border-left: 3px solid #f0a500; padding: 14px 20px; margin-bottom: 20px; font-size: 13px; color: #7a5c00; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Send a Reply to Client</h1>
      <p>Studio Booking System</p>
    </div>
    <div class="card">
      <div class="booking-summary">
        <div class="bs-row">
          <div class="bs-item">
            <div class="bs-label">Client</div>
            <div class="bs-value">${name}</div>
          </div>
          <div class="bs-item">
            <div class="bs-label">Service</div>
            <div class="bs-value">${service}</div>
          </div>
          <div class="bs-item">
            <div class="bs-label">Date</div>
            <div class="bs-value">${date}</div>
          </div>
          <div class="bs-item">
            <div class="bs-label">Time</div>
            <div class="bs-value">${time}</div>
          </div>
        </div>
      </div>

      ${email
        ? `<p class="to-label">Sending to: <strong>${name} &lt;${email}&gt;</strong></p>`
        : `<div class="no-email-warning">⚠️ This client has no email address. Contact by phone: <strong>${phone}</strong></div>`
      }

      ${email ? `
      <form method="POST" action="${base}/api/booking/reply">
        <input type="hidden" name="data" value="${raw.replace(/"/g, "&quot;")}" />
        <label for="msg">Your Message</label>
        <textarea
          id="msg"
          name="message"
          required
          placeholder="e.g. Hi ${name}, thanks for your booking request! Unfortunately your requested slot at ${time} on ${date} is unavailable. Could you do [alternative time] instead? Let us know and we'll get it booked in for you."
        ></textarea>
        <p class="hint">Write naturally — this will appear exactly as typed in the client's email.</p>
        <div class="btn-row">
          <button type="submit" class="btn-send">✉ &nbsp;Send Reply Email</button>
        </div>
      </form>
      ` : `<p style="color:#777;font-size:13px;">No email available. Please call the client directly on <strong style="color:#0a0808">${phone}</strong>.</p>`}
    </div>
    <div class="footer">
      <p>Studio Booking System · Barkat Villa, Dahisar East, Mumbai</p>
    </div>
  </div>
</body>
</html>`;
}

function sentPage(name, email, service, date, time) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Reply Sent</title>
<style>
  body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;}
  .card{background:#fff;max-width:500px;width:100%;padding:48px;text-align:center;}
  .icon{font-size:56px;margin-bottom:20px;}
  h1{font-size:26px;font-weight:900;text-transform:uppercase;color:#0a0808;letter-spacing:-0.02em;margin:0 0 12px;}
  p{font-size:14px;color:#666;line-height:1.7;margin:0 0 8px;}
  .detail{font-weight:bold;color:#0a0808;}
  .badge{display:inline-block;background:#0a0808;color:#c9a96e;font-size:11px;font-weight:900;padding:8px 20px;text-transform:uppercase;letter-spacing:0.15em;margin-top:24px;}
</style>
</head>
<body>
  <div class="card">
    <div class="icon">✉️</div>
    <h1>Reply Sent!</h1>
    <p>Your message has been delivered to:</p>
    <p class="detail">${name} &lt;${email}&gt;</p>
    <p style="margin-top:16px;">Re: <span class="detail">${service}</span> on <span class="detail">${date}</span> at <span class="detail">${time}</span></p>
    <div class="badge">Email Delivered</div>
  </div>
</body>
</html>`;
}

function noEmailPage(name, phone) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>No Email</title>
<style>
  body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;}
  .card{background:#fff;max-width:500px;width:100%;padding:48px;text-align:center;}
  h1{font-size:24px;color:#c0392b;}p{font-size:14px;color:#666;line-height:1.7;}
  .phone{font-size:22px;font-weight:900;color:#0a0808;margin:20px 0;}
</style>
</head>
<body>
  <div class="card">
    <h1>No Email Address</h1>
    <p>${name} did not provide an email. Contact by phone:</p>
    <div class="phone">${phone}</div>
  </div>
</body>
</html>`;
}