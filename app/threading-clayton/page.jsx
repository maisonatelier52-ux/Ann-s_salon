"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── FAQ ── */
const faqs = [
  { q: "Is threading good for sensitive skin?", a: "Threading is often preferred for sensitive skin because it doesn't use chemicals or wax. Everyone's skin reacts differently — just let us know if you're prone to redness and we'll adjust our approach." },
  { q: "How often should I get eyebrow threading?", a: "Most clients come every 2–4 weeks depending on hair growth speed and how defined they like their brow shape. We'll advise a schedule that suits your natural growth." },
  { q: "Do you do men's eyebrow threading?", a: "Yes. Brow grooming is available for all genders. We keep it clean and natural-looking unless you'd like something more defined." },
  { q: "Can I combine threading with waxing?", a: "Yes. We tailor the best method per area depending on your skin type and hair texture. Threading and waxing can complement each other beautifully." },
  { q: "Do I need to do anything before threading?", a: "Arrive with clean skin and avoid strong exfoliants for 24 hours beforehand if possible. That's all — no other preparation needed." },
];

const quickLinks = [{
  name: "Haircuts",
  href : "/haircuts-clayton"
},
{
   name: "Waxing",
  href : "/waxing-clayton"
},
{
   name: "Makeup",
  href : "/makeup-clayton"
}]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer group"
      style={{ borderColor: "rgba(139,109,80,0.2)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 px-1">
        <span
          className="text-[#2c1f14] font-bold uppercase text-sm group-hover:text-[#8b6d50] transition-colors"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.1em" }}
        >
          {q}
        </span>
        <span
          className="text-[#8b6d50] text-2xl font-light ml-6 transition-transform duration-300 inline-block"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </div>
      {open && (
        <p className="text-[#6b5040] text-sm leading-relaxed pb-6 px-1 max-w-2xl" style={{ fontFamily: "Georgia, serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

/* ── Service cards ── */
const services = [
  { num: "01", title: "Eyebrow Shaping", detail: "Natural or defined — mapped to your face shape for perfect symmetry." },
  { num: "02", title: "Brow Clean-Up", detail: "Tidy stray hairs and maintain the shape between full appointments." },
  { num: "03", title: "Upper Lip", detail: "Quick, precise and clean. A popular add-on with brow threading." },
  { num: "04", title: "Chin & Jawline", detail: "Fine facial hair removed with precision — no chemicals involved." },
  { num: "05", title: "Full Face", detail: "Complete facial threading session covering all areas in one visit." },
  { num: "06", title: "Brow Mapping", detail: "Personalised shape guidance before we begin — ideal for first visits." },
];

/* ── Gallery tiles ── */
const looks = [
  { id: 1, title: "Arched Brow", tag: "DEFINED", grad: "from-amber-100 via-stone-200 to-amber-50", col: "col-span-2 row-span-2", img: "/images/threading/arched.webp" },
  { id: 2, title: "Soft Natural", tag: "NATURAL", grad: "from-stone-200 via-amber-100 to-stone-100", col: "col-span-1 row-span-1", img: "/images/threading/natural.webp" },
  { id: 3, title: "Bold Straight", tag: "BOLD", grad: "from-amber-200 via-stone-300 to-amber-100", col: "col-span-1 row-span-1", img: "/images/threading/bold.webp" },
  { id: 4, title: "Feathered", tag: "SOFT", grad: "from-stone-100 via-amber-50 to-stone-200", col: "col-span-1 row-span-2", img: "/images/threading/feathered.webp" },
  { id: 5, title: "High Arch", tag: "DRAMATIC", grad: "from-amber-300 via-stone-200 to-amber-200", col: "col-span-1 row-span-1", img: "/images/threading/high-arch.webp" },
  { id: 6, title: "Men's Groom", tag: "MEN", grad: "from-stone-300 via-amber-100 to-stone-200", col: "col-span-2 row-span-1", img: "/images/threading/mens.webp" },
];

function LookCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${item.col}`}
      style={{ minHeight: "200px" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Warm gradient placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} transition-transform duration-500 group-hover:scale-105`} />
      {/* Real image */}
      <div className="absolute inset-0">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(min-width:1024px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>
      {/* Light overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: hov ? "rgba(44,31,20,0.25)" : "rgba(44,31,20,0.45)" }}
      />
      {/* Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-[#c9a96e] uppercase text-xs tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.58rem" }}>{item.tag}</span>
      </div>
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <h3
          className="text-white font-black uppercase leading-none mb-1 transition-colors group-hover:text-[#c9a96e]"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(0.85rem, 2vw, 1.1rem)", letterSpacing: "-0.01em" }}
        >
          {item.title}
        </h3>
      </div>
      {/* Arrow */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[#c9a96e] text-lg">→</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function ThreadingPage() {
  return (
    <div style={{ backgroundColor: "#faf7f4", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "90vh", backgroundColor: "#faf7f4" }}
      >
        {/* Subtle warm dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,109,80,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ghost watermark */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(7rem, 22vw, 22rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(139,109,80,0.07)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          BROWS
        </div>

        {/* Thin angled warm line */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "1px",
            height: "180%",
            background: "linear-gradient(to bottom, transparent, #c9a96e 50%, transparent)",
            top: "-40%",
            left: "60%",
            transform: "rotate(-6deg)",
            opacity: 0.18,
          }}
        />

        <div className="relative z-10 px-8 lg:px-20 pb-20 pt-32">
          {/* Eyebrow label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#8b6d50" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>
              Clayton, VIC · Private Studio
            </span>
          </div>

          {/* Heading */}
          <h1
            className="uppercase leading-none mb-10"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(4rem, 11vw, 10rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#2c1f14",
            }}
          >
            THREAD
            <br />
            <span style={{ color: "#8b6d50" }}>ING.</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <p
              className="text-base leading-relaxed max-w-md"
              style={{ fontFamily: "Georgia, serif", color: "#6b5040" }}
            >
              Precise brows in a calm, private studio. Threading is fast, clean
              and perfect for those who prefer a chemical-free method. Shapes
              that flatter your face — every time.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/booking"
                className="inline-flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest transition-all hover:brightness-95"
                style={{ backgroundColor: "#2c1f14", color: "#fff", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
              >
                Book a Slot
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest border transition-colors hover:bg-[#2c1f14] hover:text-white"
                style={{ borderColor: "rgba(44,31,20,0.3)", color: "#2c1f14", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
              >
                View Styles
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-20 flex flex-col items-center gap-2 opacity-25">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", writingMode: "vertical-rl", color: "#2c1f14" }}>Scroll</span>
          <div className="w-px h-12" style={{ backgroundColor: "#2c1f14" }} />
        </div>
      </section>

      {/* ══ STATEMENT STRIP ══════════════════ */}
      <section
        className="w-full flex items-center justify-center"
        style={{ backgroundColor: "#2c1f14", minHeight: "100px" }}
      >
        <p
          className="text-center px-8 py-8 uppercase leading-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(0.8rem, 2.5vw, 1.4rem)",
            color: "#c9a96e",
            letterSpacing: "0.18em",
          }}
        >
          Chemical-free · Fast · Precise · Appointment-only
        </p>
      </section>

      {/* ══ BROW STYLES GALLERY ══════════════ */}
      <section id="gallery" className="w-full" style={{ backgroundColor: "#f5efe9" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: "#8b6d50" }} />
                <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>Brow Styles</span>
              </div>
              <h2
                className="font-black uppercase leading-none"
                style={{
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.92,
                  color: "#2c1f14",
                }}
              >
                YOUR
                <br />
                <span style={{ color: "#8b6d50" }}>SHAPE.</span>
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Georgia, serif", color: "#6b5040" }}
            >
              Every brow is mapped to your face shape before we begin.
              Whether you want soft and natural or bold and defined — we'll find your look.
            </p>
          </div>

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] lg:auto-rows-[210px]">
            {looks.map((item) => <LookCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED ══════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#faf7f4" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(139,109,80,0.15)" }} />
            <span className="uppercase text-xs tracking-[0.35em] whitespace-nowrap" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>What's Included</span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(139,109,80,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(139,109,80,0.12)" }}>
            {services.map((s) => (
              <div
                key={s.num}
                className="group flex flex-col gap-4 p-8 lg:p-10 transition-colors duration-300 cursor-default"
                style={{ backgroundColor: "#faf7f4" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0e8e0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#faf7f4")}
              >
                <span
                  className="font-black"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8b6d50" }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-black uppercase text-xl leading-tight transition-colors group-hover:text-[#8b6d50]"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em", color: "#2c1f14" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a6050" }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WARM BANNER ══════════════════════ */}
      <section
        className="w-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#8b6d50", minHeight: "200px" }}
      >
        <div className="px-8 lg:px-20 py-16 text-center">
          <p
            className="text-white uppercase leading-none"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(1.4rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Fresh thread per client.
            <br className="hidden lg:block" />
            <span style={{ opacity: 0.6 }}> Hygiene-first. Every time.</span>
          </p>
        </div>
      </section>

      {/* ══ LOCATION + QUICK LINKS ═══════════ */}
      <section className="w-full" style={{ backgroundColor: "#f5efe9" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: "#8b6d50" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>Location</span>
            </div>
            <h2
              className="font-black uppercase leading-none mb-8"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#2c1f14" }}
            >
              FIND<br />US HERE.
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "Georgia, serif", color: "#6b5040" }}>
              2025 Dandenong Rd<br />Clayton VIC 3168<br />Australia
            </p>
            <a
              href="https://maps.app.goo.gl/gZFfDonDDsYouuPz8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#8b6d50", borderColor: "#8b6d50" }}
            >
              Get Directions →
            </a>
             <div className="mt-10 w-full overflow-hidden" style={{ height: "220px", border: "1px solid rgba(201,169,110,0.2)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.034!2d145.1177!3d-37.9165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66aba775b5a5b%3A0x5045675218ce860!2s2025+Dandenong+Rd%2C+Clayton+VIC+3168!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1) brightness(0.85)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location — 2025 Dandenong Rd, Clayton VIC"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: "#8b6d50" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>Quick Links</span>
            </div>
            <nav className="flex flex-col">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between py-5 border-b hover:pl-4 transition-all duration-200"
                  style={{ borderColor: "rgba(139,109,80,0.15)" }}
                >
                  <span
                    className="font-black uppercase text-xl transition-colors group-hover:text-[#8b6d50]"
                    style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.01em", color: "#2c1f14" }}
                  >
                    {link.name}
                  </span>
                  <span className="transition-colors group-hover:text-[#8b6d50]" style={{ color: "#c4a88a" }}>→</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ══ FAQs ══════════════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#faf7f4" }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#8b6d50" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>FAQs</span>
          </div>
          <h2
            className="font-black uppercase leading-none mb-16"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#2c1f14" }}
          >
            GOT<br /><span style={{ color: "#8b6d50" }}>QUESTIONS?</span>
          </h2>
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ══ BOOK A SLOT ═══════════════════════ */}
      <section id="book" className="w-full relative overflow-hidden" style={{ backgroundColor: "#f5efe9" }}>
        {/* Ghost bg text */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(6rem, 20vw, 20rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(139,109,80,0.06)",
            bottom: "-2rem",
            right: "-1rem",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          BOOK
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 py-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#8b6d50" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>Book an Appointment</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-black uppercase leading-none mb-6"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#2c1f14" }}
              >
                PRIVATE.
                <br />PRECISE.
                <br /><span style={{ color: "#8b6d50" }}>NO WAITING.</span>
              </h2>
              <p className="text-sm leading-relaxed mt-8 max-w-sm" style={{ fontFamily: "Georgia, serif", color: "#6b5040" }}>
                One client at a time. Book your threading slot online and receive
                a confirmation with appointment reminders by SMS or email.
              </p>
              <p className="text-xs mt-4 italic" style={{ fontFamily: "Georgia, serif", color: "#a08060" }}>
                Prefer a specific time? Use the request form and we'll confirm shortly.
              </p>
              <a
                href="/reviews"
                className="inline-flex items-center gap-3 mt-8 text-xs uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#8b6d50", borderColor: "#8b6d50" }}
              >
                See Reviews →
              </a>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-5">
              <a
                href="/booking"
                className="group flex items-center justify-between px-10 py-7 font-black uppercase text-base tracking-widest transition-all hover:brightness-95 hover:scale-[1.02]"
                style={{ backgroundColor: "#2c1f14", color: "#fff", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
              >
                <span>Book a Slot</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200" style={{ color: "#c9a96e" }}>→</span>
              </a>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: "🌿", label: "Chemical-Free" },
                  { icon: "⏱", label: "15–30 min" },
                  { icon: "✦", label: "1-on-1 Service" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-2 py-5 text-center"
                    style={{ border: "1px solid rgba(139,109,80,0.2)", backgroundColor: "#faf7f4" }}
                  >
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", color: "#8b6d50" }}>{b.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact_us"
                className="group flex items-center justify-between px-10 py-5 font-black uppercase text-xs tracking-widest border transition-all hover:border-[#8b6d50] hover:text-[#8b6d50]"
                style={{ borderColor: "rgba(139,109,80,0.2)", color: "#a08060", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
              >
                <span>Request a Time Instead</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}