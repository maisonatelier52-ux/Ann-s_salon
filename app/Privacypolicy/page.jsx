"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const sections = [
  {
    title: "1. Who We Are",
    content: `Ann's Haircuts & Beauty Salon ("we", "us", "our") is a private, appointment-only beauty studio located at 2025 Dandenong Rd, Clayton VIC 3168, Australia. We provide haircut, threading, waxing and makeup services.

This Privacy Policy explains how we collect, use, store and protect your personal information when you visit our website or make a booking with us.`,
  },
  {
    title: "2. Information We Collect",
    content: `When you use our website or book an appointment, we may collect the following information:

• Full name
• Phone number
• Email address
• Service preferences and notes you provide during booking
• Any additional information you choose to share in your messages or booking notes

We only collect information that is necessary to manage your appointment and communicate with you.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information you provide to:

• Process and confirm your booking requests
• Send you appointment reminders and confirmations by SMS or email
• Respond to your enquiries via our contact form
• Improve our services based on feedback

We do not use your personal information for marketing purposes without your explicit consent. We will never sell, rent or share your information with third parties for commercial purposes.`,
  },
  {
    title: "4. Email Communications",
    content: `When you submit a booking or contact form, you will receive transactional emails related to your request — including booking confirmations, appointment reminders and replies from our team. These are not marketing emails.

If you wish to stop receiving emails from us, you can contact us directly and we will remove your details from our records.`,
  },
  {
    title: "5. Data Storage & Security",
    content: `Your personal information is handled with care. Booking and contact form submissions are sent directly to our salon team via secure email. We do not store your data in any third-party database or CRM without your knowledge.

We take reasonable measures to protect your information from unauthorised access, disclosure or misuse. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "6. Cookies",
    content: `Our website may use essential cookies to ensure the site functions correctly. We do not use tracking cookies, advertising cookies or analytics that identify you personally without your consent.

You can disable cookies in your browser settings at any time, though this may affect how some parts of our website function.`,
  },
  {
    title: "7. Third-Party Services",
    content: `Our website may include links to third-party services such as Google Maps for directions. These services have their own privacy policies and we are not responsible for how they handle your data.

If you book via a third-party platform (such as Fresha or Square), their own privacy policies apply to that booking data.`,
  },
  {
    title: "8. Your Rights",
    content: `Under Australian privacy law, you have the right to:

• Request access to the personal information we hold about you
• Ask us to correct any inaccurate or outdated information
• Request that we delete your personal information from our records
• Withdraw consent for us to use your information at any time

To exercise any of these rights, please contact us using the details below.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are available to clients of all ages, including children when accompanied by a parent or guardian. We do not knowingly collect personal information from children under 13 without parental consent.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:

Ann's Haircuts & Beauty Salon
2025 Dandenong Rd, Clayton VIC 3168, Australia
Email: anns.salon@gmail.com`,
  },
];

export default function PrivacyPolicyPage() {
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
            fontSize: "clamp(4rem, 16vw, 16rem)",
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
          PRIVACY
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
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            PRIVACY
            <br /><span style={{ color: "#c9a96e" }}>POLICY.</span>
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
            At Ann's Haircuts & Beauty Salon, we take your privacy seriously. This policy describes what
            information we collect, why we collect it and how we use it. By using our website or booking
            an appointment with us, you agree to the terms of this policy.
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
              href="/terms&condition"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b pb-px hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e" }}
            >
              View Terms & Conditions →
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