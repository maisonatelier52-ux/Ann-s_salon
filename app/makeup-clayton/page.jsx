"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── FAQs ── */
const faqs = [
  { q: "Do you do bridal makeup?", a: "Yes. For bridal bookings, contact us early so we can plan a trial session and get the timing right for your big day." },
  { q: "Can you match makeup to my outfit or event?", a: "Absolutely. Bring a photo of your outfit or inspiration and we'll tailor the look to match your style, colours and occasion perfectly." },
  { q: "How long does a makeup appointment take?", a: "Typically 45–75 minutes depending on the complexity of the look. Allow a little extra time if you'd like a consultation beforehand." },
  { q: "Can I combine makeup with threading?", a: "Yes. Many clients book brows + makeup together for an event-ready finish. Let us know when booking and we'll schedule accordingly." },
  { q: "Do you use hygienic practices for makeup tools?", a: "Yes. We sanitise all brushes and tools between clients and maintain a clean workstation for every single appointment." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer group"
      style={{ borderColor: "rgba(201,169,110,0.15)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 px-1">
        <span
          className="font-bold uppercase text-sm transition-colors group-hover:text-[#c9a96e]"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.1em", color: "#fff" }}
        >
          {q}
        </span>
        <span
          className="text-2xl font-light ml-6 transition-transform duration-300 inline-block"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color: "#c9a96e" }}
        >
          +
        </span>
      </div>
      {open && (
        <p className="text-sm leading-relaxed pb-6 px-1 max-w-2xl" style={{ fontFamily: "Georgia, serif", color: "#a89070" }}>
          {a}
        </p>
      )}
    </div>
  );
}

/* ── Looks gallery ── */
const looks = [
  { id: 1, title: "Glam Evening", tag: "EVENING", col: "col-span-2 row-span-2", img: "/images/makeup/glam-evening.webp", grad: "from-stone-900 via-zinc-800 to-stone-800" },
  { id: 2, title: "Natural Glow", tag: "NATURAL", col: "col-span-1 row-span-1", img: "/images/makeup/natural-glow.webp", grad: "from-amber-950 via-stone-800 to-zinc-900" },
  { id: 3, title: "Graduation Day", tag: "OCCASION", col: "col-span-1 row-span-1", img: "/images/makeup/graduation.webp", grad: "from-zinc-800 via-stone-700 to-neutral-900" },
  { id: 4, title: "Bridal Look", tag: "BRIDAL", col: "col-span-1 row-span-2", img: "/images/makeup/bridal.webp", grad: "from-stone-700 via-amber-950 to-stone-900" },
  { id: 5, title: "Editorial", tag: "PHOTOSHOOT", col: "col-span-1 row-span-1", img: "/images/makeup/editorial.webp", grad: "from-neutral-800 via-zinc-700 to-stone-900" },
  { id: 6, title: "Party Ready", tag: "PARTY", col: "col-span-2 row-span-1", img: "/images/makeup/party.webp", grad: "from-stone-800 via-amber-950 to-zinc-800" },
];

function LookCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${item.col}`}
      style={{ minHeight: "180px" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} transition-transform duration-500 group-hover:scale-105`} />
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
      {/* Gold shimmer overlay on hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: hov
            ? "linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(0,0,0,0.2) 100%)"
            : "rgba(0,0,0,0.52)",
        }}
      />
      <div className="absolute top-4 left-4 z-10">
        <span className="uppercase text-xs tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.58rem", color: "#c9a96e" }}>{item.tag}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <h3
          className="text-white font-black uppercase leading-none transition-colors group-hover:text-[#c9a96e]"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(0.85rem, 2vw, 1.1rem)", letterSpacing: "-0.01em" }}
        >
          {item.title}
        </h3>
      </div>
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[#c9a96e] text-lg">→</span>
      </div>
    </div>
  );
}

/* ── Services ── */
const services = [
  { num: "01", title: "Natural to Glam", detail: "Fully customised to your features, skin tone and occasion — from barely-there to full glam." },
  { num: "02", title: "Skin Prep", detail: "Clean base, primer and long-wear finish on request. Your makeup stays all day." },
  { num: "03", title: "Event & Occasion", detail: "Graduations, parties, photoshoots, birthdays — any occasion deserves great makeup." },
  { num: "04", title: "Bridal Makeup", detail: "Trial + wedding day sessions available. Book early to secure your date." },
  { num: "05", title: "Hygienic Tools", detail: "Sanitised brushes, single-use applicators and a clean workstation for every client." },
  { num: "06", title: "Perfect Add-on", detail: "Combine with brow threading or a haircut for a complete event-ready look in one visit." },
];

/* ── Occasions ── */
const occasions = [
  { label: "Graduation", emoji: "🎓" },
  { label: "Wedding", emoji: "💍" },
  { label: "Photoshoot", emoji: "📸" },
  { label: "Birthday", emoji: "🎉" },
  { label: "Party", emoji: "✨" },
  { label: "Corporate", emoji: "💼" },
];

const quickLinks = [
  { name: "Haircuts", href: "/haircuts-clayton" },
  { name: "Threading", href: "/threading-clayton" },
  { name: "Waxing", href: "/waxing-clayton" },
  { name: "Beauty Tips Blog", href: "/beauty-tips-clayton" },
];

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function MakeupPage() {
  return (
    <div style={{ backgroundColor: "#0a0808", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "92vh", backgroundColor: "#0a0808" }}
      >
        {/* Gold shimmer gradient bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,169,110,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Fine grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ghost watermark */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(6rem, 20vw, 20rem)",
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
          GLAM
        </div>

        {/* Diagonal gold accent lines */}
        <div className="absolute pointer-events-none" style={{ width: "1px", height: "200%", background: "linear-gradient(to bottom, transparent, #c9a96e 50%, transparent)", top: "-50%", left: "55%", transform: "rotate(8deg)", opacity: 0.15 }} />
        <div className="absolute pointer-events-none" style={{ width: "1px", height: "200%", background: "linear-gradient(to bottom, transparent, #c9a96e 50%, transparent)", top: "-50%", left: "57%", transform: "rotate(8deg)", opacity: 0.07 }} />

        <div className="relative z-10 px-8 lg:px-20 pb-20 pt-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
              Dahisar East, Mumbai · Private Studio
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
              color: "#fff",
            }}
          >
            MAKE
            <br />
            <span style={{ color: "#c9a96e" }}>UP.</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <p className="text-base leading-relaxed max-w-md" style={{ fontFamily: "Georgia, serif", color: "#a89070" }}>
              Occasion-ready makeup in a private studio — ideal for graduations,
              parties, photoshoots and events. Calm, one-on-one attention from
              a dedicated makeup artist.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/booking"
                className="inline-flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest transition-all hover:brightness-110 hover:scale-[1.02]"
                style={{ backgroundColor: "#c9a96e", color: "#000", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
              >
                Book a Slot
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest border transition-colors hover:bg-white hover:text-black"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
              >
                View Looks
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-20 flex flex-col items-center gap-2 opacity-25">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", writingMode: "vertical-rl", color: "#c9a96e" }}>Scroll</span>
          <div className="w-px h-12" style={{ backgroundColor: "#c9a96e" }} />
        </div>
      </section>

      {/* ══ OCCASIONS TICKER STRIP ═══════════ */}
      <section className="w-full overflow-hidden" style={{ backgroundColor: "#c9a96e", minHeight: "64px" }}>
        <div className="flex items-center justify-center flex-wrap gap-6 px-8 py-4">
          {occasions.map((o) => (
            <span
              key={o.label}
              className="flex items-center gap-2 uppercase text-black font-black text-xs tracking-widest whitespace-nowrap"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.18em" }}
            >
              <span>{o.emoji}</span>
              {o.label}
              <span className="opacity-30 ml-2">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══ LOOKS GALLERY ════════════════════ */}
      <section id="gallery" className="w-full" style={{ backgroundColor: "#0f0c0c" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Look Gallery</span>
              </div>
              <h2
                className="text-white font-black uppercase leading-none"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}
              >
                YOUR
                <br /><span style={{ color: "#c9a96e" }}>LOOK.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ fontFamily: "Georgia, serif", color: "#a89070" }}>
              Every look is tailored to your face shape, skin tone and occasion.
              Bring inspiration — we'll make it happen.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] lg:auto-rows-[220px]">
            {looks.map((item) => <LookCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED ══════════════════ */}
      <section id="services" className="w-full" style={{ backgroundColor: "#0a0808" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201,169,110,0.1)" }} />
            <span className="uppercase text-xs tracking-[0.35em] whitespace-nowrap" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>What's Included</span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201,169,110,0.1)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,169,110,0.08)" }}>
            {services.map((s) => (
              <div
                key={s.num}
                className="group flex flex-col gap-4 p-8 lg:p-10 transition-colors duration-300 cursor-default"
                style={{ backgroundColor: "#0a0808" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#130f0f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0a0808")}
              >
                <span className="font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#c9a96e" }}>{s.num}</span>
                <h3
                  className="text-white font-black uppercase text-xl leading-tight transition-colors group-hover:text-[#c9a96e]"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a6550" }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GOLD STATEMENT BANNER ════════════ */}
      <section
        className="w-full relative overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#c9a96e", minHeight: "220px" }}
      >
        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 20px)" }} />
        <div className="relative z-10 px-8 lg:px-20 py-16 text-center">
          <p
            className="text-black uppercase leading-none"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Natural. Glam. Bridal.
            <br className="hidden lg:block" />
            <span style={{ opacity: 0.5 }}> Every look. One studio.</span>
          </p>
        </div>
      </section>

      {/* ══ PROCESS STEPS ════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0f0c0c" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>How It Works</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book", detail: "Choose your date and look type. Book online — instant confirmation." },
              { step: "02", title: "Consult", detail: "Share your inspiration, outfit or event details on the day." },
              { step: "03", title: "Create", detail: "Skin prep, application and finishing — tailored to you." },
              { step: "04", title: "Arrive Ready", detail: "Walk out event-ready. Reminders sent by SMS or email." },
            ].map((p, i) => (
              <div key={p.step} className="flex flex-col gap-4 relative">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-4 left-full w-full h-px z-0" style={{ backgroundColor: "rgba(201,169,110,0.15)", width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
                )}
                <span className="text-[#c9a96e] font-black relative z-10" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "2rem", letterSpacing: "-0.03em" }}>{p.step}</span>
                <h3 className="text-white font-black uppercase text-lg" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a6550" }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION + QUICK LINKS ═══════════ */}
      <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Location</span>
            </div>
            <h2
              className="text-white font-black uppercase leading-none mb-8"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95 }}
            >
              FIND<br />US HERE.
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "Georgia, serif", color: "#a89070" }}>
              Barkat Villa, Shop No 2/3, Zen 11<br />
              Maratha Colony, Dahisar East<br />
              Mumbai, Maharashtra 400068<br />
              India
            </p>
            <a
              href="https://maps.app.goo.gl/iQ4hG5RH142W3svY9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e" }}
            >
              Get Directions →
            </a>
            <div className="mt-10 w-full overflow-hidden" style={{ height: "220px", border: "1px solid rgba(201,169,110,0.2)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2!2d72.8597!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1e0b8e3b1b1%3A0x1!2sBarkat+Villa+Shop+No+2%2F3+Zen+11+Maratha+Colony+Dahisar+East+Mumbai+Maharashtra+400068!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1) brightness(0.85)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location — Barkat Villa, Dahisar East, Mumbai"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Quick Links</span>
            </div>
            <nav className="flex flex-col">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between py-5 border-b hover:pl-4 transition-all duration-200"
                  style={{ borderColor: "rgba(201,169,110,0.1)" }}
                >
                  <span
                    className="text-white font-black uppercase text-xl transition-colors group-hover:text-[#c9a96e]"
                    style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.01em" }}
                  >
                    {link.name}
                  </span>
                  <span className="text-stone-600 group-hover:text-[#c9a96e] transition-colors">→</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ══ FAQs ══════════════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0f0c0c" }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>FAQs</span>
          </div>
          <h2
            className="text-white font-black uppercase leading-none mb-16"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95 }}
          >
            GOT<br /><span style={{ color: "#c9a96e" }}>QUESTIONS?</span>
          </h2>
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ══ BOOK A SLOT ═══════════════════════ */}
      <section id="book" className="w-full relative overflow-hidden" style={{ backgroundColor: "#0a0808" }}>
        {/* Ghost bg */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(6rem, 18vw, 18rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,169,110,0.05)",
            bottom: "-2rem",
            right: "-1rem",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          GLAM
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 py-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Book an Appointment</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-white font-black uppercase leading-none mb-6"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}
              >
                YOUR EVENT.
                <br />YOUR LOOK.
                <br /><span style={{ color: "#c9a96e" }}>OUR STUDIO.</span>
              </h2>
              <p className="text-sm leading-relaxed mt-8 max-w-sm" style={{ fontFamily: "Georgia, serif", color: "#a89070" }}>
                One client at a time. Book your makeup slot online and receive a
                confirmation with appointment reminders by SMS or email.
              </p>
              <p className="text-xs mt-4 italic" style={{ fontFamily: "Georgia, serif", color: "#6a5540" }}>
                Prefer a specific time? Use the request form and we'll confirm shortly.
              </p>
              <a
                href="/reviews"
                className="inline-flex items-center gap-3 mt-8 text-xs uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e" }}
              >
                See Reviews →
              </a>
            </div>

            <div className="flex flex-col gap-5">
              {/* Main CTA */}
              <a
                href="/booking"
                className="group flex items-center justify-between px-10 py-7 font-black uppercase text-base tracking-widest transition-all hover:brightness-110 hover:scale-[1.02]"
                style={{ backgroundColor: "#c9a96e", color: "#000", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
              >
                <span>Book a Slot</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200">→</span>
              </a>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: "💄", label: "Fully Tailored" },
                  { icon: "⏱", label: "45–75 min" },
                  { icon: "✦", label: "1-on-1 Artist" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-2 py-5 text-center"
                    style={{ border: "1px solid rgba(201,169,110,0.15)", backgroundColor: "#0f0c0c" }}
                  >
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", color: "#c9a96e" }}>{b.label}</span>
                  </div>
                ))}
              </div>

              {/* Secondary */}
              <a
                href="/contact_us"
                className="group flex items-center justify-between px-10 py-5 text-stone-500 font-black uppercase text-xs tracking-widest border transition-all hover:border-[#c9a96e] hover:text-[#c9a96e]"
                style={{ borderColor: "rgba(201,169,110,0.12)", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
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