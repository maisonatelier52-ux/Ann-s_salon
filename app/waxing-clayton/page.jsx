"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── FAQ ── */
const faqs = [
  { q: "How should I prepare for a waxing appointment?", a: "Ensure hair is at least 5–7mm long for best results. Avoid heavy oils or lotions on the day, and let us know about any skin sensitivities or medications that may affect your skin." },
  { q: "Is waxing private at your salon?", a: "Yes. The studio is single-seat and appointment-only — you're the only client during your entire service. No shared spaces, no strangers." },
  { q: "Do you offer waxing for men?", a: "Yes. Select the waxing service and include notes about the area(s) you'd like treated. All genders welcome." },
  { q: "What about aftercare?", a: "Avoid heat (hot showers, saunas, steam rooms) and intense exercise for 24 hours post-wax. We'll share tailored aftercare advice based on the specific area treated." },
  { q: "How often should I wax?", a: "Most clients find 4–6 weeks between sessions gives the best results — hair grows back finer and sparser over time with regular waxing." },
];

const quickLinks = [{
  name: "Haircuts",
  href : "/haircuts-clayton"
},
{
   name: "Threading",
  href : "/threading-clayton"
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
      style={{ borderColor: "rgba(180,140,140,0.2)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 px-1">
        <span
          className="font-bold uppercase text-sm transition-colors group-hover:text-[#b48c8c]"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.1em", color: "#1a1a1a" }}
        >
          {q}
        </span>
        <span
          className="text-2xl font-light ml-6 transition-transform duration-300 inline-block"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color: "#b48c8c" }}
        >
          +
        </span>
      </div>
      {open && (
        <p
          className="text-sm leading-relaxed pb-6 px-1 max-w-2xl"
          style={{ fontFamily: "Georgia, serif", color: "#6b5555" }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

/* ── Services ── */
const services = [
  { num: "01", title: "Facial Waxing", detail: "Upper lip, chin, brows and sideburns — precise and quick.", icon: "✦" },
  { num: "02", title: "Arms & Legs", detail: "Full or half-arm, full or half-leg. Smooth results that last weeks.", icon: "✦" },
  { num: "03", title: "Underarms", detail: "Clean, fast and gentle. One of our most popular add-ons.", icon: "✦" },
  { num: "04", title: "Bikini & Brazilian", detail: "By appointment. Discussed privately. Strict hygiene standards.", icon: "✦" },
  { num: "05", title: "Strict Hygiene", detail: "Disposable applicators only. Surfaces cleaned between every client.", icon: "✦" },
  { num: "06", title: "Aftercare Guidance", detail: "Personalised aftercare advice to reduce irritation and ingrown hairs.", icon: "✦" },
];

/* ── Gallery tiles ── */
const looks = [
  { id: 1, title: "Smooth Skin", tag: "FACIAL", col: "col-span-2 row-span-2", img: "/images/waxing/facial-image.webp", grad: "from-rose-100 via-stone-100 to-rose-50" },
  { id: 2, title: "Full Leg", tag: "BODY", col: "col-span-1 row-span-1", img: "/images/waxing/legs.webp", grad: "from-stone-200 via-rose-100 to-stone-100" },
  { id: 3, title: "Underarm", tag: "BODY", col: "col-span-1 row-span-1", img: "/images/waxing/underarm.webp", grad: "from-rose-200 via-stone-100 to-rose-100" },
   { id: 4, title: "Upper Lip", tag: "FACE", col: "col-span-1 row-span-2", img: "/images/waxing/upper-lip.webp", grad: "from-stone-100 via-rose-50 to-stone-200" },
  { id: 5, title: "Arms", tag: "BODY", col: "col-span-1 row-span-1", img: "/images/waxing/arms.webp", grad: "from-rose-100 via-stone-200 to-rose-200" },
  { id: 6, title: "Chin & Jawline", tag: "FACE", col: "col-span-2 row-span-1", img: "/images/waxing/chin-jawline.webp", grad: "from-stone-200 via-rose-100 to-stone-100" },
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
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: hov ? "rgba(26,10,10,0.2)" : "rgba(26,10,10,0.42)" }}
      />
      <div className="absolute top-4 left-4 z-10">
        <span className="uppercase text-xs tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.58rem", color: "#e8c0c0" }}>{item.tag}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <h3
          className="text-white font-black uppercase leading-none mb-1 transition-colors group-hover:text-[#e8c0c0]"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(0.85rem, 2vw, 1.1rem)", letterSpacing: "-0.01em" }}
        >
          {item.title}
        </h3>
      </div>
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[#e8c0c0] text-lg">→</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function WaxingPage() {
  return (
    <div style={{ backgroundColor: "#fdf9f9", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "90vh", backgroundColor: "#fdf9f9" }}
      >
        {/* Diagonal stripe texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, rgba(180,140,140,0.04) 0px, rgba(180,140,140,0.04) 1px, transparent 1px, transparent 24px)",
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
            WebkitTextStroke: "1px rgba(180,140,140,0.07)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          WAX
        </div>

        {/* Soft rose circle accent */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(220,170,170,0.12) 0%, transparent 70%)",
            top: "10%",
            right: "-80px",
          }}
        />

        {/* Thin vertical line accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "1px",
            height: "160%",
            background: "linear-gradient(to bottom, transparent, rgba(180,140,140,0.3) 50%, transparent)",
            top: "-30%",
            left: "58%",
            transform: "rotate(-5deg)",
          }}
        />

        <div className="relative z-10 px-8 lg:px-20 pb-20 pt-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#b48c8c" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>
              Dahisar East, Mumbai · Private Studio
            </span>
          </div>

          <h1
            className="uppercase leading-none mb-10"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(4rem, 11vw, 10rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#1a0a0a",
            }}
          >
            WAX
            <br />
            <span style={{ color: "#b48c8c" }}>ING.</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <p
              className="text-base leading-relaxed max-w-md"
              style={{ fontFamily: "Georgia, serif", color: "#7a5555" }}
            >
              Private waxing in a single-seat studio — designed for comfort, hygiene
              and dignity. Ideal if you dislike busy salons. One client at a time,
              every time.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/booking"
                className="inline-flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest transition-all hover:brightness-95 hover:scale-[1.02]"
                style={{ backgroundColor: "#1a0a0a", color: "#fff", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
              >
                Book a Slot
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest border transition-colors hover:bg-[#1a0a0a] hover:text-white hover:border-[#1a0a0a]"
                style={{ borderColor: "rgba(26,10,10,0.25)", color: "#1a0a0a", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-20 flex flex-col items-center gap-2 opacity-20">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", writingMode: "vertical-rl", color: "#1a0a0a" }}>Scroll</span>
          <div className="w-px h-12" style={{ backgroundColor: "#1a0a0a" }} />
        </div>
      </section>

      {/* ══ DARK STATEMENT STRIP ═════════════ */}
      <section
        className="w-full flex items-center justify-center"
        style={{ backgroundColor: "#1a0a0a", minHeight: "90px" }}
      >
        <p
          className="text-center px-8 py-7 uppercase"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
            color: "#e8c0c0",
            letterSpacing: "0.22em",
          }}
        >
          Disposable applicators · Appointment-only · Single-seat · Strictly private
        </p>
      </section>

      {/* ══ GALLERY ═══════════════════════════ */}
      <section id="gallery" className="w-full" style={{ backgroundColor: "#f7f0f0" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: "#b48c8c" }} />
                <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>Treatment Areas</span>
              </div>
              <h2
                className="font-black uppercase leading-none"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#1a0a0a" }}
              >
                WHERE
                <br /><span style={{ color: "#b48c8c" }}>WE WAX.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ fontFamily: "Georgia, serif", color: "#7a5555" }}>
              From facial hair to full-body treatments. Discussed privately,
              performed professionally, with strict hygiene throughout.
            </p>
          </div>

          {/* Mosaic */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] lg:auto-rows-[210px]">
            {looks.map((item) => <LookCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED ══════════════════ */}
      <section id="services" className="w-full" style={{ backgroundColor: "#fdf9f9" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(180,140,140,0.2)" }} />
            <span className="uppercase text-xs tracking-[0.35em] whitespace-nowrap" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>What's Included</span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(180,140,140,0.2)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(180,140,140,0.15)" }}>
            {services.map((s) => (
              <div
                key={s.num}
                className="group flex flex-col gap-4 p-8 lg:p-10 transition-colors duration-300 cursor-default"
                style={{ backgroundColor: "#fdf9f9" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f7eded")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fdf9f9")}
              >
                <span className="font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#b48c8c" }}>{s.num}</span>
                <h3
                  className="font-black uppercase text-xl leading-tight transition-colors group-hover:text-[#b48c8c]"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em", color: "#1a0a0a" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a5555" }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ROSE BANNER ══════════════════════ */}
      <section
        className="w-full flex items-center justify-center overflow-hidden relative"
        style={{ backgroundColor: "#b48c8c", minHeight: "200px" }}
      >
        {/* Subtle diagonal lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)",
          }}
        />
        <div className="relative z-10 px-8 lg:px-20 py-16 text-center">
          <p
            className="text-white uppercase leading-none"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Comfort. Hygiene. Dignity.
            <br className="hidden lg:block" />
            <span style={{ opacity: 0.6 }}> Every single appointment.</span>
          </p>
        </div>
      </section>

      {/* ══ AFTERCARE STRIP ══════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f7f0f0" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-8" style={{ backgroundColor: "#b48c8c" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>Aftercare Tips</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🚿", tip: "Avoid hot showers for 24 hours post-wax." },
              { icon: "🏃", tip: "Skip intense exercise for the first 24 hours." },
              { icon: "🧴", tip: "Use a gentle, fragrance-free moisturiser daily." },
              { icon: "📅", tip: "Book every 4–6 weeks for best long-term results." },
            ].map((t) => (
              <div key={t.tip} className="flex flex-col gap-4 p-6" style={{ border: "1px solid rgba(180,140,140,0.2)", backgroundColor: "#fdf9f9" }}>
                <span className="text-3xl">{t.icon}</span>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a5555" }}>{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION + QUICK LINKS ═══════════ */}
      <section className="w-full" style={{ backgroundColor: "#fdf9f9" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: "#b48c8c" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>Location</span>
            </div>
            <h2
              className="font-black uppercase leading-none mb-8"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#1a0a0a" }}
            >
              FIND<br />US HERE.
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "Georgia, serif", color: "#7a5555" }}>
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
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#b48c8c", borderColor: "#b48c8c" }}
            >
              Get Directions →
            </a>
            <div className="mt-10 w-full overflow-hidden" style={{ height: "220px", border: "1px solid rgba(180,140,140,0.25)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2!2d72.8597!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1e0b8e3b1b1%3A0x1!2sBarkat+Villa+Shop+No+2%2F3+Zen+11+Maratha+Colony+Dahisar+East+Mumbai+Maharashtra+400068!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0, filter: "sepia(15%) saturate(0.8) contrast(1.05)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location — Barkat Villa, Dahisar East, Mumbai"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: "#b48c8c" }} />
              <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>Quick Links</span>
            </div>
            <nav className="flex flex-col">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between py-5 border-b hover:pl-4 transition-all duration-200"
                  style={{ borderColor: "rgba(180,140,140,0.18)" }}
                >
                  <span
                    className="font-black uppercase text-xl transition-colors group-hover:text-[#b48c8c]"
                    style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.01em", color: "#1a0a0a" }}
                  >
                    {link.name}
                  </span>
                  <span className="transition-colors group-hover:text-[#b48c8c]" style={{ color: "#c4a0a0" }}>→</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ══ FAQs ══════════════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f7f0f0" }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#b48c8c" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>FAQs</span>
          </div>
          <h2
            className="font-black uppercase leading-none mb-16"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#1a0a0a" }}
          >
            GOT<br /><span style={{ color: "#b48c8c" }}>QUESTIONS?</span>
          </h2>
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ══ BOOK A SLOT ═══════════════════════ */}
      <section id="book" className="w-full relative overflow-hidden" style={{ backgroundColor: "#fdf9f9" }}>
        {/* Ghost bg word */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(6rem, 20vw, 20rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(180,140,140,0.06)",
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
            <div className="h-px w-8" style={{ backgroundColor: "#b48c8c" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#b48c8c" }}>Book an Appointment</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-black uppercase leading-none mb-6"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#1a0a0a" }}
              >
                PRIVATE.
                <br />HYGIENIC.
                <br /><span style={{ color: "#b48c8c" }}>JUST FOR YOU.</span>
              </h2>
              <p className="text-sm leading-relaxed mt-8 max-w-sm" style={{ fontFamily: "Georgia, serif", color: "#7a5555" }}>
                One client at a time. Book your waxing slot online and receive
                a confirmation with appointment reminders by SMS or email.
              </p>
              <p className="text-xs mt-4 italic" style={{ fontFamily: "Georgia, serif", color: "#b4a0a0" }}>
                Prefer a specific time? Use the request form and we'll confirm shortly.
              </p>
              <a
                href="/reviews"
                className="inline-flex items-center gap-3 mt-8 text-xs uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#b48c8c", borderColor: "#b48c8c" }}
              >
                See Reviews →
              </a>
            </div>

            <div className="flex flex-col gap-5">
              {/* Main CTA */}
              <a
                href="/booking"
                className="group flex items-center justify-between px-10 py-7 font-black uppercase text-base tracking-widest transition-all hover:brightness-95 hover:scale-[1.02]"
                style={{ backgroundColor: "#1a0a0a", color: "#fff", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
              >
                <span>Book a Slot</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200" style={{ color: "#e8c0c0" }}>→</span>
              </a>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: "🌸", label: "Fully Private" },
                  { icon: "⏱", label: "By Appt Only" },
                  { icon: "🧼", label: "Hygiene First" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-2 py-5 text-center transition-colors"
                    style={{ border: "1px solid rgba(180,140,140,0.25)", backgroundColor: "#fdf9f9" }}
                  >
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", color: "#b48c8c" }}>{b.label}</span>
                  </div>
                ))}
              </div>

              {/* Secondary */}
              <a
                href="/contact_us"
                className="group flex items-center justify-between px-10 py-5 font-black uppercase text-xs tracking-widest border transition-all hover:border-[#b48c8c] hover:text-[#b48c8c]"
                style={{ borderColor: "rgba(180,140,140,0.25)", color: "#b4a0a0", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
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