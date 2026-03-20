"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quickLinks = [
  { name: "Haircuts", href: "/haircuts-clayton" },
  { name: "Threading", href: "/threading-clayton" },
  { name: "Waxing", href: "/waxing-clayton" },
  { name: "Makeup", href: "/makeup-clayton" },
  { name: "Reviews", href: "/reviews" },
  { name: "Book a Slot", href: "/booking" },
];

const contactDetails = [
  {
    icon: "📍",
    label: "Studio Address",
    lines: ["2025 Dandenong Rd,", "Clayton VIC 3168,", "Australia"],
    action: { text: "Get Directions →", href: "https://maps.app.goo.gl/iQ4hG5RH142W3svY9" },
  },
  {
    icon: "🕐",
    label: "Opening Hours",
    lines: ["Mon–Sat: 9:00 AM – 6:00 PM", "Sun: 10:00 AM – 4:00 PM", "Appointment-only"],
    action: { text: "Book a Slot →", href: "/booking" },
  },
  {
    icon: "📩",
    label: "Email Us",
    lines: ["For general enquiries,", "use the form below", "or email directly."],
    action: { text: "anns.salon@gmail.com", href: "mailto:anns.salon@gmail.com" },
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // Build mailto link with form details
    const subject = encodeURIComponent(form.subject || "General Enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone || "Not provided"}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "anns.salon@gmail.com"}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0a0808", minHeight: "300px" }}
      >
        {/* Gold grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Ghost watermark */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(5rem, 20vw, 20rem)",
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
          HELLO
        </div>

        <div className="relative z-10 px-8 lg:px-20 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
              Ann's Haircut & Beauty · Clayton VIC
            </span>
          </div>
          <h1
            className="text-white uppercase leading-none"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
            }}
          >
            GET IN
            <br /><span style={{ color: "#c9a96e" }}>TOUCH.</span>
          </h1>
        </div>
      </section>

      {/* ══ CONTACT CARDS ════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.07)" }}>
            {contactDetails.map((c) => (
              <div
                key={c.label}
                className="group flex flex-col gap-4 p-10 transition-colors duration-300"
                style={{ backgroundColor: "#faf8f5" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0e8e0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#faf8f5")}
              >
                <span className="text-3xl">{c.icon}</span>
                <p className="text-xs uppercase tracking-widest font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", letterSpacing: "0.18em", fontSize: "0.6rem" }}>
                  {c.label}
                </p>
                <div className="flex flex-col gap-1">
                  {c.lines.map((line) => (
                    <p key={line} className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#5a4030", lineHeight: 1.7 }}>{line}</p>
                  ))}
                </div>
                <a
                  href={c.action.href}
                  target={c.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-widest border-b pb-px hover:opacity-70 transition-opacity mt-2"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e", fontSize: "0.62rem" }}
                >
                  {c.action.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORM + MAP SECTION ═══════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f2ede7" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* ── Contact Form ── */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Send a Message</span>
            </div>
            <h2
              className="font-black uppercase leading-none mb-12"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#0a0808" }}
            >
              WRITE
              <br /><span style={{ color: "#c9a96e" }}>TO US.</span>
            </h2>

            {status === "sent" ? (
              <div
                className="flex flex-col items-center text-center gap-5 py-16"
                style={{ border: "2px solid rgba(201,169,110,0.3)", backgroundColor: "#faf8f5" }}
              >
                <div className="w-14 h-14 flex items-center justify-center text-2xl" style={{ backgroundColor: "#c9a96e", color: "#000" }}>✓</div>
                <h3 className="font-black uppercase text-2xl" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#0a0808", letterSpacing: "-0.02em" }}>Message Sent!</h3>
                <p className="text-sm max-w-xs" style={{ fontFamily: "Georgia, serif", color: "#7a5540", lineHeight: 1.7 }}>
                  Thanks for getting in touch. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-8 py-3 font-black uppercase text-xs tracking-widest"
                  style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em", fontSize: "0.6rem" }}>
                      Full Name <span style={{ color: "#b48c8c" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full px-5 py-4 text-sm focus:outline-none transition-all"
                      style={{ fontFamily: "Georgia, serif", backgroundColor: "#faf8f5", border: errors.name ? "2px solid #c0392b" : form.name ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.12)", color: "#0a0808" }}
                    />
                    {errors.name && <p className="mt-1 text-xs" style={{ color: "#c0392b", fontFamily: "Georgia, serif" }}>⚠ {errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em", fontSize: "0.6rem" }}>
                      Phone <span style={{ color: "#999" }}>(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+61 4XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full px-5 py-4 text-sm focus:outline-none transition-all"
                      style={{ fontFamily: "Georgia, serif", backgroundColor: "#faf8f5", border: "2px solid rgba(0,0,0,0.12)", color: "#0a0808" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em", fontSize: "0.6rem" }}>
                    Email Address <span style={{ color: "#b48c8c" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full px-5 py-4 text-sm focus:outline-none transition-all"
                    style={{ fontFamily: "Georgia, serif", backgroundColor: "#faf8f5", border: errors.email ? "2px solid #c0392b" : form.email && !/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(form.email) ? "2px solid #c0392b" : form.email ? "2px solid #1a7a1a" : "2px solid rgba(0,0,0,0.12)", color: "#0a0808" }}
                  />
                  {errors.email && <p className="mt-1 text-xs" style={{ color: "#c0392b", fontFamily: "Georgia, serif" }}>⚠ {errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em", fontSize: "0.6rem" }}>
                    Subject <span style={{ color: "#999" }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bridal booking enquiry"
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="w-full px-5 py-4 text-sm focus:outline-none transition-all"
                    style={{ fontFamily: "Georgia, serif", backgroundColor: "#faf8f5", border: "2px solid rgba(0,0,0,0.12)", color: "#0a0808" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em", fontSize: "0.6rem" }}>
                    Message <span style={{ color: "#b48c8c" }}>*</span>
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className="w-full px-5 py-4 text-sm focus:outline-none transition-all resize-none"
                    style={{ fontFamily: "Georgia, serif", backgroundColor: "#faf8f5", border: errors.message ? "2px solid #c0392b" : form.message ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.12)", color: "#0a0808" }}
                  />
                  {errors.message && <p className="mt-1 text-xs" style={{ color: "#c0392b", fontFamily: "Georgia, serif" }}>⚠ {errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="text-sm text-center" style={{ fontFamily: "Georgia, serif", color: "#c0392b" }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={false}
                  className="flex items-center justify-between px-10 py-5 font-black uppercase text-sm tracking-widest transition-all hover:brightness-95 hover:scale-[1.01]"
                  style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
                >
                  <span>Send Message</span>
                  <span className="text-xl">→</span>
                </button>
              </form>
            )}
          </div>

          {/* ── Map + Address ── */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Find Us</span>
            </div>
            <h2
              className="font-black uppercase leading-none mb-8"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#0a0808" }}
            >
              ANN'S
              <br /><span style={{ color: "#c9a96e" }}>SALON.</span>
            </h2>

            {/* Address block */}
            <div className="mb-8 p-6" style={{ backgroundColor: "#0a0808", border: "1px solid rgba(201,169,110,0.15)" }}>
              <p className="text-xs uppercase tracking-widest mb-3 font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", fontSize: "0.58rem", letterSpacing: "0.2em" }}>
                Studio Address
              </p>
              <p className="text-white text-sm font-bold mb-1" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                Ann's Haircut and Beauty Salon
              </p>
              <p className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#a89070", lineHeight: 1.8 }}>
                2025 Dandenong Rd<br />
                Clayton VIC 3168<br />
                Australia
              </p>
              <a
                href="https://maps.app.goo.gl/iQ4hG5RH142W3svY9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-xs uppercase tracking-widest border-b pb-px hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e", fontSize: "0.62rem" }}
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Map embed */}
            <div className="w-full overflow-hidden" style={{ height: "280px", border: "1px solid rgba(201,169,110,0.2)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.034!2d145.1177!3d-37.9165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66aba775b5a5b%3A0x5045675218ce860!2s2025+Dandenong+Rd%2C+Clayton+VIC+3168!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="280"
                style={{ border: 0, filter: "sepia(10%) contrast(1.05)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ann's Haircut and Beauty Salon — 2025 Dandenong Rd, Clayton VIC"
              />
            </div>

            {/* Hours */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest mb-4 font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", fontSize: "0.58rem", letterSpacing: "0.2em" }}>
                Opening Hours
              </p>
              {[
                { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
                { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
              ].map((h) => (
                <div key={h.day} className="flex items-center justify-between py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <span className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#5a4030" }}>{h.day}</span>
                  <span className="text-sm font-bold" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#0a0808", fontSize: "0.75rem" }}>{h.hours}</span>
                </div>
              ))}
              <p className="text-xs mt-4 italic" style={{ fontFamily: "Georgia, serif", color: "#aaa" }}>
                Appointment-only — walk-ins not available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUICK LINKS ══════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Quick Links</span>
          </div>
          <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between px-5 py-4 border transition-all hover:border-[#c9a96e]"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <span
                  className="font-black uppercase text-xs transition-colors group-hover:text-[#c9a96e]"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#fff", letterSpacing: "0.08em", fontSize: "0.7rem" }}
                >
                  {link.name}
                </span>
                <span className="text-[#c9a96e] opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <Footer />
    </div>
  );
}