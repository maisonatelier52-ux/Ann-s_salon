"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const sections = [
  {
    title: "1. Agreement to Terms",
    content: `By accessing our website, making a booking or using any service provided by Ann's Haircuts & Beauty Salon ("we", "us", "our"), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.

Ann's Haircuts & Beauty Salon is located at 2025 Dandenong Rd, Clayton VIC 3168, Australia.`,
  },
  {
    title: "2. Appointment Bookings",
    content: `All services are by appointment only. Walk-in clients cannot be accommodated as the studio operates a single-seat, private model.

When you submit a booking request through our website, it is a request only — not a confirmed booking. Your appointment is confirmed only once you receive a confirmation from our team by SMS or email.

We reserve the right to decline or reschedule a booking at our discretion, in which case we will notify you as soon as possible.`,
  },
  {
    title: "3. Cancellations & Rescheduling",
    content: `We understand that plans change. We ask that you:

• Give at least 24 hours' notice if you need to cancel or reschedule
• Contact us as early as possible if you are unwell or unable to attend

Repeated last-minute cancellations or no-shows may result in us requiring a deposit for future bookings or declining future appointments.

We reserve the right to cancel or reschedule your appointment at any time due to unforeseen circumstances. In such cases, we will contact you promptly to find an alternative.`,
  },
  {
    title: "4. Arrival & Conduct",
    content: `Please arrive on time for your appointment. If you arrive late, we may need to shorten your service to avoid impacting other clients, and the full fee may still apply.

We operate a single-seat, private studio. Only the client receiving the service should be present during the appointment unless prior arrangement has been made (e.g. a parent or guardian for a minor).

We reserve the right to refuse service to any client who is rude, disrespectful or behaves in a manner that makes our staff uncomfortable.`,
  },
  {
    title: "5. Service Results",
    content: `We strive to deliver excellent results for every client. However, outcomes may vary based on individual factors including hair type, skin condition, health, and how instructions are followed.

We do not guarantee specific results and are not liable for outcomes that differ from reference images or expectations, provided services have been delivered with reasonable care and skill.

If you are unhappy with a service, please inform us at the time of the appointment or within 48 hours so we can work to resolve the issue.`,
  },
  {
    title: "6. Health & Skin Conditions",
    content: `It is your responsibility to inform us of any relevant health conditions, skin sensitivities, allergies, medications or recent treatments before your appointment begins.

We cannot be held responsible for adverse reactions that result from information you did not disclose prior to your service.

We reserve the right to decline or pause a service if we believe proceeding could cause harm to the client.`,
  },
  {
    title: "7. Pricing & Payment",
    content: `Service prices are communicated at the time of booking or upon enquiry. Prices are subject to change without prior notice, though we aim to provide advance notice of any changes.

Payment is due at the time of service. We accept the payment methods displayed at the studio. We do not offer refunds for completed services unless there has been a demonstrable error on our part.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content on this website — including text, design, images and branding — is the property of Ann's Haircuts & Beauty Salon and may not be reproduced, copied or distributed without our written permission.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the fullest extent permitted by Australian law, Ann's Haircuts & Beauty Salon shall not be liable for any indirect, incidental or consequential loss or damage arising from your use of our website or services.

Our total liability to you in connection with any service shall not exceed the amount you paid for that specific service.`,
  },
  {
    title: "10. Privacy",
    content: `Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect and use your personal information.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms & Conditions are governed by the laws of Victoria, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Victoria.`,
  },
  {
    title: "12. Changes to These Terms",
    content: `We may update these Terms & Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the updated terms.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions about these Terms & Conditions, please contact us:

Ann's Haircuts & Beauty Salon
2025 Dandenong Rd, Clayton VIC 3168, Australia
Email: anns.salon@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0a0808", minHeight: "260px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(3rem, 12vw, 12rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,169,110,0.05)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          TERMS
        </div>
        <div className="relative z-10 px-8 lg:px-20 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
              Ann's Haircuts & Beauty Salon
            </span>
          </div>
          <h1
            className="text-white uppercase leading-none"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(2rem, 7vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            TERMS &amp;
            <br /><span style={{ color: "#c9a96e" }}>CONDITIONS.</span>
          </h1>
        </div>
      </section>

      {/* ══ EFFECTIVE DATE STRIP ═════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f2ede7" }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#7a5540" }}>
            <strong>Effective Date:</strong> 1 January 2025
          </p>
          <p className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#7a5540" }}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* ══ CONTENT ══════════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 py-20">

          {/* Intro */}
          <p
            className="text-base leading-relaxed mb-16 pb-10"
            style={{
              fontFamily: "Georgia, serif",
              color: "#5a4030",
              lineHeight: 1.85,
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            Please read these Terms & Conditions carefully before booking or using any service at
            Ann's Haircuts & Beauty Salon. These terms outline your rights and responsibilities
            as a client, and ours as a service provider. We aim to be fair, transparent and clear.
          </p>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {sections.map((s) => (
              <div key={s.title} className="flex flex-col gap-4">
                <h2
                  className="font-black uppercase"
                  style={{
                    fontFamily: "'Arial Black', Arial, sans-serif",
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    letterSpacing: "0.06em",
                    color: "#0a0808",
                  }}
                >
                  {s.title}
                </h2>
                <div
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Georgia, serif", color: "#5a4030", lineHeight: 1.85, whiteSpace: "pre-line" }}
                >
                  {s.content}
                </div>
                <div className="h-px w-full mt-4" style={{ backgroundColor: "rgba(0,0,0,0.06)" }} />
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-20 pt-10 flex flex-col sm:flex-row gap-4" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            <Link
              href="/Privacypolicy"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b pb-px hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e" }}
            >
              View Privacy Policy →
            </Link>
            <Link
              href="/contact_us"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b pb-px hover:opacity-70 transition-opacity sm:ml-8"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#0a0808", borderColor: "#0a0808" }}
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}