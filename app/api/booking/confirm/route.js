import nodemailer from "nodemailer";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = searchParams.get("data");

    if (!raw) {
      return new Response(errorPage("Missing booking data."), {
        status: 400,
        headers: { "Content-Type": "text/html" },
      });
    }

    const booking = JSON.parse(decodeURIComponent(raw));
    const { service, duration, date, time, name, phone, email, addons, notes } = booking;

    if (!email) {
      return new Response(
        noEmailPage(name, phone),
        { status: 200, headers: { "Content-Type": "text/html" } }
      );
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
      subject: `✅ Booking Confirmed — ${service} on ${date} at ${time}`,
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
            .header h1 { color: #c9a96e; font-size: 24px; font-weight: 900; margin: 0 0 6px; text-transform: uppercase; }
            .header p { color: #666; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em; }
            .confirmed-bar { background: #e8f5e9; border-left: 4px solid #1a7a1a; padding: 14px 20px; }
            .confirmed-bar p { margin: 0; font-size: 13px; color: #1a5c1a; font-weight: bold; }
            .body { padding: 32px 40px; }
            .greeting { font-size: 15px; color: #333; line-height: 1.7; margin-bottom: 24px; }
            .summary { background: #f8f7f5; border-left: 3px solid #c9a96e; padding: 24px; margin: 0 0 24px; }
            .label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #aaa; margin-bottom: 3px; }
            .value { font-size: 15px; font-weight: bold; color: #0a0808; margin-bottom: 16px; }
            .value:last-child { margin-bottom: 0; }
            .address-box { background: #fffbf5; border: 1px solid #e8dfc8; padding: 20px; margin: 20px 0; }
            .address-box p { margin: 0; font-size: 13px; color: #555; line-height: 1.8; }
            .address-box strong { color: #0a0808; }
            .note { font-size: 12px; color: #999; line-height: 1.7; margin-top: 20px; }
            .footer { background: #0a0808; padding: 20px 40px; }
            .footer p { color: #444; font-size: 11px; margin: 0; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>Booking Confirmed ✓</h1>
              <p>Private Studio · Dahisar East, Mumbai</p>
            </div>
            <div class="confirmed-bar">
              <p>✅ Your appointment has been confirmed by our team.</p>
            </div>
            <div class="body">
              <p class="greeting">
                Hi <strong>${name}</strong>,<br /><br />
                Great news — your booking has been <strong>confirmed!</strong> We're looking forward to seeing you. Here's a summary of your appointment:
              </p>

              <div class="summary">
                <div class="label">Service</div>
                <div class="value">${service}</div>
                <div class="label">Date</div>
                <div class="value">${date}</div>
                <div class="label">Time</div>
                <div class="value">${time}</div>
                <div class="label">Duration</div>
                <div class="value">${duration}</div>
                ${addons && addons.length > 0 ? `
                <div class="label">Add-ons</div>
                <div class="value">${addons.join(", ")}</div>` : ""}
              </div>

              <div class="address-box">
                <p>
                  📍 <strong>Barkat Villa, Shop No 2/3, Zen 11,</strong><br />
                  Maratha Colony, Dahisar East,<br />
                  Mumbai, Maharashtra 400068
                </p>
              </div>

              <p class="note">
                Please arrive on time. If you need to reschedule or cancel, reply to this email or call us as early as possible.<br /><br />
                We're appointment-only so this slot has been reserved just for you.
              </p>
            </div>
            <div class="footer">
              <p>You're receiving this because you made a booking request on our website. Private, single-seat studio — one client at a time.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    /* ── Success page shown to staff ── */
    return new Response(successPage(name, email, service, date, time), {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("Confirm error:", error);
    return new Response(errorPage(error.message), {
      status: 500,
      headers: { "Content-Type": "text/html" },
    });
  }
}

/* ── HTML pages returned to staff browser ── */

function successPage(name, email, service, date, time) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Booking Confirmed</title>
<style>
  body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;}
  .card{background:#fff;max-width:500px;width:100%;padding:48px;text-align:center;}
  .icon{font-size:56px;margin-bottom:20px;}
  h1{font-size:28px;font-weight:900;text-transform:uppercase;color:#0a0808;letter-spacing:-0.02em;margin:0 0 12px;}
  p{font-size:14px;color:#666;line-height:1.7;margin:0 0 8px;}
  .detail{font-weight:bold;color:#0a0808;}
  .badge{display:inline-block;background:#1a7a1a;color:#fff;font-size:11px;font-weight:900;padding:6px 16px;text-transform:uppercase;letter-spacing:0.15em;margin-top:24px;}
</style>
</head>
<body>
  <div class="card">
    <div class="icon">✅</div>
    <h1>Confirmed!</h1>
    <p>A confirmation email has been sent to:</p>
    <p class="detail">${name} &lt;${email}&gt;</p>
    <p style="margin-top:16px;">
      <span class="detail">${service}</span> on <span class="detail">${date}</span> at <span class="detail">${time}</span>
    </p>
    <div class="badge">Email Sent Successfully</div>
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
  .icon{font-size:56px;margin-bottom:20px;}
  h1{font-size:24px;font-weight:900;text-transform:uppercase;color:#0a0808;margin:0 0 12px;}
  p{font-size:14px;color:#666;line-height:1.7;}
  .phone{font-size:22px;font-weight:900;color:#0a0808;margin:20px 0;}
  .badge{display:inline-block;background:#c9a96e;color:#000;font-size:11px;font-weight:900;padding:6px 16px;text-transform:uppercase;letter-spacing:0.15em;margin-top:16px;}
</style>
</head>
<body>
  <div class="card">
    <div class="icon">📞</div>
    <h1>No Email Address</h1>
    <p>${name} did not provide an email address.</p>
    <p>Please confirm via phone or WhatsApp:</p>
    <div class="phone">${phone}</div>
    <div class="badge">Contact Directly</div>
  </div>
</body>
</html>`;
}

function errorPage(msg) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Error</title>
<style>
  body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;}
  .card{background:#fff;max-width:500px;width:100%;padding:48px;text-align:center;}
  h1{font-size:24px;color:#c0392b;}
  p{color:#666;font-size:13px;}
</style>
</head>
<body>
  <div class="card">
    <h1>Something went wrong</h1>
    <p>${msg}</p>
  </div>
</body>
</html>`;
}