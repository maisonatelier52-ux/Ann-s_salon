"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── FAQ accordion ── */
const faqs = [
  { q: "Do you do men's fades and tapers?", a: "Yes — we specialise in clean fades, tapers, and tidy-ups for men. Every cut is tailored to your head shape and hair texture for a result that grows out well." },
  { q: "How long does a haircut appointment take?", a: "Most haircuts take 30–45 minutes. Allow a little longer if you'd like a full consultation or blow-wave styling at the end." },
  { q: "Can I book a haircut and beard trim together?", a: "Absolutely. Choose your haircut, then add a beard trim in the booking notes. We'll schedule the right amount of time for both." },
  { q: "Do you take walk-ins?", a: "No — the studio is appointment-only to keep the space calm and private. This means no waiting room and no delays." },
  { q: "Where are you located?", a: "We're at 2025 Dandenong Rd, Clayton VIC 3168, Australia. Full directions are on the Contact page." },
];

const quickLinks = [
{
   name: "Threading",
  href : "/threading-clayton"
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
    <div className="border-b cursor-pointer group" style={{ borderColor: "rgba(255,255,255,0.08)" }} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between py-5 px-1">
        <span className="text-white font-bold uppercase text-sm group-hover:text-[#c9a96e] transition-colors" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.1em" }}>{q}</span>
        <span className="text-[#c9a96e] text-2xl font-light ml-6 transition-transform duration-300 inline-block" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </div>
      {open && <p className="text-stone-400 text-sm leading-relaxed pb-6 px-1 max-w-2xl" style={{ fontFamily: "Georgia, serif" }}>{a}</p>}
    </div>
  );
}

/* ── Hairstyle gallery data ── */
const categories = ["ALL", "WOMEN", "MEN", "KIDS"];

const styles = [
  { id: 1, label: "WOMEN", title: "Layered Waves", desc: "Flowing movement, soft ends", col: "col-span-2 row-span-2", img: "/images/haircuts/women-waves.webp", grad: "from-amber-950 via-stone-800 to-stone-900" },
  { id: 2, label: "MEN", title: "Skin Fade", desc: "Clean taper, sharp lines", col: "col-span-1 row-span-1", img: "/images/haircuts/men-fade.webp", grad: "from-zinc-800 via-zinc-700 to-stone-800" },
  { id: 3, label: "MEN", title: "Classic Crop", desc: "Textured top, tight sides", col: "col-span-1 row-span-1", img: "/images/haircuts/men-crop.webp", grad: "from-stone-700 via-neutral-800 to-zinc-900" },
  { id: 4, label: "KIDS", title: "Boys Tidy-Up", desc: "Fun shape, easy to manage", col: "col-span-1 row-span-1", img: "/images/haircuts/kids-boy.webp", grad: "from-stone-600 via-amber-900 to-stone-800" },
  { id: 5, label: "WOMEN", title: "Precision Bob", desc: "Sharp angles, bold statement", col: "col-span-1 row-span-1", img: "/images/haircuts/women-bob.webp", grad: "from-neutral-700 via-stone-600 to-zinc-800" },
  { id: 6, label: "MEN", title: "Textured Quiff", desc: "Volume on top, faded sides", col: "col-span-1 row-span-2", img: "/images/haircuts/men-quiff.webp", grad: "from-zinc-900 via-stone-700 to-neutral-800" },
  { id: 7, label: "WOMEN", title: "Curtain Fringe", desc: "Effortless, parted fringe", col: "col-span-1 row-span-1", img: "/images/haircuts/women-fringe.webp", grad: "from-amber-900 via-stone-800 to-zinc-900" },
  { id: 8, label: "KIDS", title: "Girls Trim", desc: "Healthy ends, natural flow", col: "col-span-1 row-span-1", img: "/images/haircuts/kids-girl.webp", grad: "from-stone-500 via-neutral-600 to-stone-700" },
  { id: 9, label: "WOMEN", title: "Long Layers", desc: "Movement through the length", col: "col-span-2 row-span-1", img: "/images/haircuts/women-long.webp", grad: "from-stone-800 via-amber-950 to-zinc-900" },
];

/* ── Gradient placeholder card ── */
function StyleCard({ item, visible }) {
  const [hov, setHov] = useState(false);
  if (!visible) return null;
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${item.col}`}
      style={{ minHeight: "220px" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Gradient background (shows when no image) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} transition-transform duration-500 group-hover:scale-105`} />

      {/* Real image — comment this out if images not ready */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 transition-opacity duration-300" style={{ background: hov ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.55)" }} />

      {/* Gold top-left label */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-[#c9a96e] uppercase text-xs tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem" }}>{item.label}</span>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <h3 className="text-white font-black uppercase leading-none mb-1 transition-colors group-hover:text-[#c9a96e]" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", letterSpacing: "-0.01em" }}>{item.title}</h3>
        <p className="text-stone-400 text-xs" style={{ fontFamily: "Georgia, serif" }}>{item.desc}</p>
      </div>

      {/* Hover arrow */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[#c9a96e] text-lg">→</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════ */
export default function HaircutsPage() {
  const [activeTab, setActiveTab] = useState("ALL");

  const visible = (item) => activeTab === "ALL" || item.label === activeTab;

  return (
    <div style={{ backgroundColor: "#0c0c0c", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section className="relative w-full overflow-hidden flex flex-col justify-end" style={{ minHeight: "90vh", backgroundColor: "#0c0c0c" }}>
        {/* Ghost watermark */}
        <div className="absolute select-none pointer-events-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(8rem, 24vw, 24rem)", fontWeight: 900, color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.03)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", whiteSpace: "nowrap", letterSpacing: "-0.05em", lineHeight: 1 }}>HAIR</div>

        {/* Angled gold line */}
        <div className="absolute pointer-events-none" style={{ width: "1px", height: "180%", background: "linear-gradient(to bottom, transparent, #c9a96e 45%, transparent)", top: "-40%", left: "62%", transform: "rotate(10deg)", opacity: 0.2 }} />

        {/* Noise */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")` }} />

        <div className="relative z-10 px-8 lg:px-20 pb-20 pt-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="text-[#c9a96e] uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif" }}>Clayton, VIC · Private Studio</span>
          </div>

          <h1 className="text-white uppercase leading-none mb-10" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(4rem, 11vw, 10rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
            HAIR
            <br />
            <span style={{ color: "#c9a96e" }}>CUTS.</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <p className="text-stone-400 text-base leading-relaxed max-w-md" style={{ fontFamily: "Georgia, serif" }}>
              Clean, modern haircuts for men, women and kids — delivered one-on-one
              in a private studio. No crowds, no waiting room, just great hair.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/booking" className="inline-flex items-center gap-3 px-8 py-4 text-black font-black text-xs uppercase tracking-widest transition-all hover:brightness-110" style={{ backgroundColor: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}>
                Book a Slot
              </a>
              <a href="#gallery" className="inline-flex items-center gap-3 px-8 py-4 text-white font-black text-xs uppercase tracking-widest border transition-colors hover:bg-white hover:text-black" style={{ borderColor: "rgba(255,255,255,0.25)", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}>
                View Styles
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-20 flex flex-col items-center gap-2 opacity-30">
          <span className="text-white text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", writingMode: "vertical-rl" }}>Scroll</span>
          <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* ══ STYLES GALLERY ═══════════════════ */}
      <section id="gallery" className="w-full" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">

          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                <span className="text-[#c9a96e] uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif" }}>Our Styles</span>
              </div>
              <h2 className="text-white font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
                FIND YOUR
                <br />
                <span style={{ color: "#c9a96e" }}>LOOK.</span>
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-1 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className="px-5 py-2 text-xs uppercase tracking-widest font-black transition-all cursor-pointer"
                  style={{
                    fontFamily: "'Arial Black', Arial, sans-serif",
                    backgroundColor: activeTab === cat ? "#c9a96e" : "transparent",
                    color: activeTab === cat ? "#000" : "rgba(255,255,255,0.4)",
                    border: activeTab === cat ? "1px solid #c9a96e" : "1px solid rgba(255,255,255,0.12)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric masonry grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] lg:auto-rows-[220px]">
            {styles.map((item) => (
              <StyleCard key={item.id} item={item} visible={visible(item)} />
            ))}
          </div>

          <p className="text-stone-600 text-xs mt-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
            Images shown are representative styles. Final result varies by hair type and texture.
          </p>
        </div>
      </section>

      {/* ══ GOLD BANNER ══════════════════════ */}
      <section className="w-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#c9a96e", minHeight: "200px" }}>
        <div className="px-8 lg:px-20 py-16 text-center">
          <p className="text-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Private. Appointment-only.
            <br className="hidden lg:block" />
            <span style={{ opacity: 0.55 }}> One client at a time.</span>
          </p>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED ══════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0c0c0c" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
            <span className="text-[#c9a96e] uppercase text-xs tracking-[0.35em] whitespace-nowrap" style={{ fontFamily: "Georgia, serif" }}>What's Included</span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            {[
              { num: "01", title: "Men's Cuts", detail: "Fades, tapers, tidy-ups and classic cuts tailored to your head shape." },
              { num: "02", title: "Women's Cuts", detail: "Trims, layers and blow-waves on request. Clean results every visit." },
              { num: "03", title: "Kids' Cuts", detail: "Patient, friendly service for kids. Tidy shapes they'll love." },
              { num: "04", title: "Beard Trim", detail: "Add-on available. Sharp lines, defined shape — pairs with any cut." },
              { num: "05", title: "Hygiene First", detail: "Tools and surfaces sanitised between every single appointment." },
              { num: "06", title: "1-on-1 Studio", detail: "One client at a time. No waiting room. No noise. Just your cut." },
            ].map((s) => (
              <div
                key={s.num}
                className="group flex flex-col gap-4 p-8 lg:p-10 transition-colors duration-300 cursor-default"
                style={{ backgroundColor: "#0c0c0c" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#161616")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0c0c0c")}
              >
                <span className="text-[#c9a96e] font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}>{s.num}</span>
                <h3 className="text-white font-black uppercase text-xl leading-tight group-hover:text-[#c9a96e] transition-colors" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION + QUICK LINKS ═══════════ */}
       <section className="w-full" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
              <span className="text-[#c9a96e] uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif" }}>Location</span>
            </div>
            <h2 className="text-white font-black uppercase leading-none mb-8" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
              FIND<br />US HERE.
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "Georgia, serif" }}>
              2025 Dandenong Rd,<br /> Clayton VIC 3168,<br /> Australia
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2025%20Dandenong%20Rd%2C%20Clayton%20VIC%203168%2C%20Australia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c9a96e] text-xs uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif", borderColor: "#c9a96e" }}
            >
              Get Directions →
            </a>
            <div className="mt-10 w-full overflow-hidden" style={{ height: "220px", border: "1px solid rgba(201,169,110,0.2)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.539952101174!2d145.1333781!3d-37.9178145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66ad26cd703d1%3A0xddc40d2c5a480322!2s2025%20Dandenong%20Rd%2C%20Clayton%20VIC%203168%2C%20Australia!5e0!3m2!1sen!2ssa!4v1773999792981!5m2!1sen!2ssa"
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
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
              <span className="text-[#c9a96e] uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif" }}>Quick Links</span>
            </div>
            <nav className="flex flex-col">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="group flex items-center justify-between py-5 border-b hover:pl-4 transition-all duration-200" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <span className="text-white font-black uppercase group-hover:text-[#c9a96e] transition-colors text-xl" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.01em" }}>{link.name}</span>
                  <span className="text-stone-600 group-hover:text-[#c9a96e] transition-colors">→</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ══ FAQs ══════════════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0c0c0c" }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="text-[#c9a96e] uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif" }}>FAQs</span>
          </div>
          <h2 className="text-white font-black uppercase leading-none mb-16" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
            GOT<br /><span style={{ color: "#c9a96e" }}>QUESTIONS?</span>
          </h2>
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ══ BOOK A SLOT ═══════════════════════ */}
      <section id="book" className="w-full relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
        {/* Ghost bg text */}
        <div className="absolute select-none pointer-events-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(6rem, 20vw, 20rem)", fontWeight: 900, color: "transparent", WebkitTextStroke: "1px rgba(201,169,110,0.05)", bottom: "-2rem", right: "-1rem", whiteSpace: "nowrap", letterSpacing: "-0.05em", lineHeight: 1 }}>BOOK</div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 py-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="text-[#c9a96e] uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif" }}>Book an Appointment</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white font-black uppercase leading-none mb-6" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
                PRIVATE.
                <br />SINGLE-SEAT.
                <br /><span style={{ color: "#c9a96e" }}>NO WAITING.</span>
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed mt-8 max-w-sm" style={{ fontFamily: "Georgia, serif" }}>
                One client at a time. Book your slot online and receive a confirmation
                with appointment reminders by SMS or email.
              </p>
              <p className="text-stone-600 text-xs mt-4 italic" style={{ fontFamily: "Georgia, serif" }}>
                Prefer a specific time? Use the form and we'll confirm shortly.
              </p>
              <a href="/reviews" className="inline-flex items-center gap-3 mt-8 text-[#c9a96e] text-xs uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity" style={{ fontFamily: "'Arial Black', Arial, sans-serif", borderColor: "#c9a96e" }}>
                See Reviews →
              </a>
            </div>

            {/* Single CTA */}
            <div className="flex flex-col gap-5">
              <a
                href="/booking"
                className="group flex items-center justify-between px-10 py-7 text-black font-black uppercase text-base tracking-widest transition-all hover:brightness-110 hover:scale-[1.02]"
                style={{ backgroundColor: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
              >
                <span>Book a Slot</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200">→</span>
              </a>

              {/* 3 trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: "🔒", label: "Private Studio" },
                  { icon: "⏱", label: "30–45 min" },
                  { icon: "✦", label: "1-on-1 Service" },
                ].map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-2 py-5 text-center" style={{ border: "1px solid rgba(255,255,255,0.07)", backgroundColor: "#0c0c0c" }}>
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-stone-400 text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem" }}>{b.label}</span>
                  </div>
                ))}
              </div>

              {/* Request a time */}
              <a
                href="#"
                className="group flex items-center justify-between px-10 py-5 text-stone-400 font-black uppercase text-xs tracking-widest border transition-all hover:border-[#c9a96e] hover:text-[#c9a96e]"
                style={{ borderColor: "rgba(255,255,255,0.1)", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
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