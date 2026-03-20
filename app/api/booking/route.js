// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const {
//       service,
//       duration,
//       date,
//       time,
//       name,
//       phone,
//       email,
//       addons,
//       notes,
//     } = body;

//     /* ── Gmail SMTP transporter ── */
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,       // your Gmail address
//         pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your login password)
//       },
//     });

//     /* ── Email to the salon owner ── */
//     const ownerMail = {
//       from: `"Studio Booking System" <${process.env.GMAIL_USER}>`,
//       to: process.env.OWNER_EMAIL || process.env.GMAIL_USER,
//       subject: `📅 New Booking — ${service} | ${date} at ${time}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8" />
//           <style>
//             body { font-family: Arial, sans-serif; background: #f8f7f5; margin: 0; padding: 0; }
//             .wrapper { max-width: 600px; margin: 0 auto; background: #fff; }
//             .header { background: #0a0808; padding: 32px 40px; }
//             .header h1 { color: #c9a96e; font-size: 28px; font-weight: 900; margin: 0; letter-spacing: -0.03em; text-transform: uppercase; }
//             .header p { color: #666; font-size: 12px; margin: 6px 0 0; text-transform: uppercase; letter-spacing: 0.2em; }
//             .body { padding: 40px; }
//             .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #999; margin-bottom: 4px; font-weight: bold; }
//             .value { font-size: 16px; color: #0a0808; font-weight: bold; margin-bottom: 20px; }
//             .badge { display: inline-block; background: #c9a96e; color: #000; font-size: 10px; font-weight: 900; padding: 4px 10px; text-transform: uppercase; letter-spacing: 0.15em; }
//             .divider { border: none; border-top: 1px solid #f0ece8; margin: 24px 0; }
//             .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; }
//             .footer { background: #0a0808; padding: 24px 40px; }
//             .footer p { color: #555; font-size: 11px; margin: 0; }
//             .highlight { background: #fffbf5; border-left: 3px solid #c9a96e; padding: 16px 20px; margin: 24px 0; }
//           </style>
//         </head>
//         <body>
//           <div class="wrapper">
//             <div class="header">
//               <h1>New Booking Request</h1>
//               <p>Private Studio · Dahisar East, Mumbai</p>
//             </div>
//             <div class="body">
//               <div class="highlight">
//                 <div class="label">Service Booked</div>
//                 <div class="value">${service} &nbsp;<span class="badge">${duration}</span></div>
//               </div>

//               <div class="grid">
//                 <div>
//                   <div class="label">Date</div>
//                   <div class="value">${date}</div>
//                 </div>
//                 <div>
//                   <div class="label">Time</div>
//                   <div class="value">${time}</div>
//                 </div>
//               </div>

//               <hr class="divider" />

//               <div class="grid">
//                 <div>
//                   <div class="label">Client Name</div>
//                   <div class="value">${name}</div>
//                 </div>
//                 <div>
//                   <div class="label">Phone</div>
//                   <div class="value">${phone}</div>
//                 </div>
//               </div>

//               ${email ? `<div><div class="label">Email</div><div class="value">${email}</div></div>` : ""}

//               ${addons && addons.length > 0 ? `
//               <hr class="divider" />
//               <div class="label">Add-ons Requested</div>
//               <div class="value">${addons.join(", ")}</div>
//               ` : ""}

//               ${notes ? `
//               <hr class="divider" />
//               <div class="label">Client Notes</div>
//               <div class="value" style="font-weight: normal; font-size: 14px; color: #555;">${notes}</div>
//               ` : ""}
//             </div>
//             <div class="footer">
//               <p>This booking was submitted via your studio website. Please confirm with the client directly.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     /* ── Confirmation email to the client (if they gave email) ── */
//     const clientMail = email
//       ? {
//           from: `"Your Studio" <${process.env.GMAIL_USER}>`,
//           to: email,
//           subject: `✅ Booking Request Received — ${service} on ${date}`,
//           html: `
//             <!DOCTYPE html>
//             <html>
//             <head>
//               <meta charset="utf-8" />
//               <style>
//                 body { font-family: Arial, sans-serif; background: #f8f7f5; margin: 0; padding: 0; }
//                 .wrapper { max-width: 600px; margin: 0 auto; background: #fff; }
//                 .header { background: #0a0808; padding: 32px 40px; }
//                 .header h1 { color: #c9a96e; font-size: 24px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: -0.02em; }
//                 .header p { color: #666; font-size: 12px; margin: 6px 0 0; text-transform: uppercase; letter-spacing: 0.2em; }
//                 .body { padding: 40px; }
//                 .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #999; margin-bottom: 4px; font-weight: bold; }
//                 .value { font-size: 15px; color: #0a0808; font-weight: bold; margin-bottom: 18px; }
//                 .note { font-size: 13px; color: #666; line-height: 1.7; }
//                 .cta { display: inline-block; background: #c9a96e; color: #000; font-weight: 900; text-decoration: none; padding: 14px 32px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.15em; margin-top: 24px; }
//                 .divider { border: none; border-top: 1px solid #f0ece8; margin: 24px 0; }
//                 .footer { background: #0a0808; padding: 24px 40px; }
//                 .footer p { color: #555; font-size: 11px; margin: 0; }
//                 .summary { background: #f8f7f5; padding: 24px; margin: 24px 0; border-left: 3px solid #c9a96e; }
//               </style>
//             </head>
//             <body>
//               <div class="wrapper">
//                 <div class="header">
//                   <h1>Booking Request Received</h1>
//                   <p>Private Studio · Dahisar East, Mumbai</p>
//                 </div>
//                 <div class="body">
//                   <p class="note">Hi <strong>${name}</strong>,<br /><br />
//                   Thanks for booking with us! We've received your request and will confirm your appointment shortly via SMS or email.</p>

//                   <div class="summary">
//                     <div class="label">Service</div>
//                     <div class="value">${service}</div>
//                     <div class="label">Date</div>
//                     <div class="value">${date}</div>
//                     <div class="label">Time</div>
//                     <div class="value">${time}</div>
//                     ${addons && addons.length > 0 ? `<div class="label">Add-ons</div><div class="value">${addons.join(", ")}</div>` : ""}
//                   </div>

//                   <hr class="divider" />

//                   <p class="note">
//                     📍 <strong>Barkat Villa, Shop No 2/3, Zen 11,</strong><br />
//                     Maratha Colony, Dahisar East,<br />
//                     Mumbai, Maharashtra 400068
//                   </p>
//                   <p class="note" style="margin-top: 12px;">
//                     If you need to reschedule or have any questions, just reply to this email or call us directly.
//                   </p>
//                 </div>
//                 <div class="footer">
//                   <p>You're receiving this because you made a booking request on our website. Private, appointment-only studio.</p>
//                 </div>
//               </div>
//             </body>
//             </html>
//           `,
//         }
//       : null;

//     /* ── Send emails ── */
//     await transporter.sendMail(ownerMail);
//     if (clientMail) {
//       await transporter.sendMail(clientMail);
//     }

//     return Response.json({ success: true });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return Response.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }


import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { service, duration, date, time, name, phone, email, addons, notes } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    /* ── Build confirm & reply URLs ── */
    const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const bookingData = encodeURIComponent(
      JSON.stringify({ service, duration, date, time, name, phone, email, addons, notes })
    );

    const confirmUrl = `${base}/api/booking/confirm?data=${bookingData}`;
    const replyUrl   = `${base}/api/booking/reply?data=${bookingData}`;

    /* ── Salon reception email ── */
    await transporter.sendMail({
      from: `"Studio Booking System" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL || process.env.GMAIL_USER,
      subject: `📅 New Booking Request — ${service} | ${date} at ${time}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            * { box-sizing: border-box; }
            body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
            .wrapper { max-width: 620px; margin: 0 auto; background: #fff; border-radius: 2px; overflow: hidden; }
            .header { background: #0a0808; padding: 32px 40px; }
            .header h1 { color: #c9a96e; font-size: 22px; font-weight: 900; margin: 0 0 6px; text-transform: uppercase; letter-spacing: -0.02em; }
            .header p { color: #666; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em; }
            .alert-bar { background: #fffbf0; border-left: 4px solid #c9a96e; padding: 14px 20px; margin: 0; }
            .alert-bar p { margin: 0; font-size: 13px; color: #7a5c00; font-weight: bold; }
            .body { padding: 32px 40px; }
            .section-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.22em; color: #aaa; margin-bottom: 4px; }
            .section-value { font-size: 16px; font-weight: bold; color: #0a0808; margin-bottom: 20px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px; }
            .divider { border: none; border-top: 1px solid #f0ece8; margin: 20px 0; }
            .service-badge { display: inline-block; background: #c9a96e; color: #000; font-size: 10px; font-weight: 900; padding: 3px 10px; text-transform: uppercase; letter-spacing: 0.15em; margin-left: 8px; vertical-align: middle; }
            .action-box { background: #f8f7f5; border: 1px solid #e8e0d8; padding: 28px 32px; margin: 28px 0 0; border-radius: 2px; }
            .action-box p { font-size: 13px; color: #555; margin: 0 0 20px; line-height: 1.6; }
            .btn-row { display: flex; gap: 12px; flex-wrap: wrap; }
            .btn-confirm { display: inline-block; background: #1a7a1a; color: #fff; font-weight: 900; text-decoration: none; padding: 14px 28px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.15em; border-radius: 1px; }
            .btn-reply { display: inline-block; background: #0a0808; color: #c9a96e; font-weight: 900; text-decoration: none; padding: 14px 28px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.15em; border-radius: 1px; }
            .footer { background: #0a0808; padding: 20px 40px; }
            .footer p { color: #444; font-size: 11px; margin: 0; line-height: 1.6; }
            .notes-box { background: #fffbf5; border-left: 3px solid #c9a96e; padding: 12px 16px; margin-top: 4px; font-size: 13px; color: #555; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Booking Request</h1>
              <p>Action Required · Private Studio · Dahisar East, Mumbai</p>
            </div>

            <div class="alert-bar">
              <p>⚠️ A client has requested a booking slot. Please confirm or send an alternative reply below.</p>
            </div>

            <div class="body">
              <div>
                <div class="section-label">Service Requested</div>
                <div class="section-value">
                  ${service}
                  <span class="service-badge">${duration}</span>
                </div>
              </div>

              <div class="grid">
                <div>
                  <div class="section-label">Preferred Date</div>
                  <div class="section-value">${date}</div>
                </div>
                <div>
                  <div class="section-label">Preferred Time</div>
                  <div class="section-value">${time}</div>
                </div>
              </div>

              <hr class="divider" />

              <div class="grid">
                <div>
                  <div class="section-label">Client Name</div>
                  <div class="section-value">${name}</div>
                </div>
                <div>
                  <div class="section-label">Phone Number</div>
                  <div class="section-value">${phone}</div>
                </div>
              </div>

              ${email ? `
              <div>
                <div class="section-label">Email Address</div>
                <div class="section-value">${email}</div>
              </div>` : `
              <div>
                <div class="section-label">Email Address</div>
                <div class="section-value" style="color:#aaa; font-weight:normal; font-size:13px;">Not provided — reply via phone/WhatsApp</div>
              </div>`}

              ${addons && addons.length > 0 ? `
              <hr class="divider" />
              <div>
                <div class="section-label">Add-ons Requested</div>
                <div class="section-value">${addons.join(", ")}</div>
              </div>` : ""}

              ${notes ? `
              <hr class="divider" />
              <div>
                <div class="section-label">Client Notes</div>
                <div class="notes-box">${notes}</div>
              </div>` : ""}

              <div class="action-box">
                <p>
                  <strong>Choose an action:</strong><br />
                  Click <strong>Confirm Booking</strong> to automatically send a confirmation email to the client.<br />
                  Click <strong>Send a Reply</strong> to open a form where you can write a custom message — e.g. suggest a different time.
                </p>
                <div class="btn-row">
                  <a href="${confirmUrl}" class="btn-confirm">✓ &nbsp;Confirm Booking</a>
                  ${email ? `<a href="${replyUrl}" class="btn-reply">✉ &nbsp;Send a Reply</a>` : ""}
                </div>
                ${!email ? `<p style="margin: 16px 0 0; font-size: 12px; color: #999;">No client email provided — contact by phone: <strong style="color:#0a0808">${phone}</strong></p>` : ""}
              </div>
            </div>

            <div class="footer">
              <p>This is an automated notification from your studio booking system. Do not reply to this email directly — use the action buttons above.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}