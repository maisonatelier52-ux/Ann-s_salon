"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  { num: "01", title: "Privacy First", detail: "Single-seat, appointment-only. You are the only client in the studio during your service — always." },
  { num: "02", title: "Honest Craft", detail: "No upselling, no rushing. Every service is performed with full attention and genuine care for the result." },
  { num: "03", title: "Clean Standards", detail: "Tools sanitised between every client. Disposable applicators used where required. Hygiene is non-negotiable." },
  { num: "04", title: "Personal Attention", detail: "We take time to understand what you want before we begin. Every client leaves feeling heard and confident." },
  { num: "05", title: "All Are Welcome", detail: "Men, women, kids. All backgrounds, all hair types. A salon where everyone feels comfortable and respected." },
  { num: "06", title: "Calm Environment", detail: "No waiting rooms, no crowds, no noise. Just a quiet, private space designed entirely around your comfort." },
];

const services = [
  { label: "Haircuts", sub: "Men, Women & Kids", },
  { label: "Threading", sub: "Brows, Lip & Face" },
  { label: "Waxing", sub: "Facial & Body" },
  { label: "Makeup", sub: "Natural to Glam" },
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "4", label: "Expert Services" },
  { number: "5★", label: "Average Rating" },
  { number: "1", label: "Seat. Always Private." },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "85vh", backgroundColor: "#faf8f5" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Large ghost watermark */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(6rem, 22vw, 22rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,0,0,0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          ANN'S
        </div>

        {/* Gold accent line */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "1px",
            height: "180%",
            background: "linear-gradient(to bottom, transparent, #c9a96e 50%, transparent)",
            top: "-40%",
            left: "62%",
            transform: "rotate(-7deg)",
            opacity: 0.18,
          }}
        />

        <div className="relative z-10 px-8 lg:px-20 pb-20 pt-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
              Est. Clayton, VIC · Private Studio
            </span>
          </div>

          <h1
            className="uppercase leading-none mb-10"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#0a0808",
            }}
          >
            OUR
            <br />
            <span style={{ color: "#c9a96e" }}>STORY.</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ fontFamily: "Georgia, serif", color: "#6b5540", lineHeight: 1.85 }}
            >
              Ann's Haircut and Beauty Salon was born from a simple belief —
              everyone deserves a beauty experience that feels calm, personal
              and completely private. No waiting rooms. No strangers.
              Just exceptional service, one client at a time.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest transition-all hover:brightness-95 hover:scale-[1.02] whitespace-nowrap self-start lg:self-end"
              style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
            >
              Book a Slot →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 lg:right-20 flex flex-col items-center gap-2 opacity-20">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", writingMode: "vertical-rl", color: "#0a0808" }}>Scroll</span>
          <div className="w-px h-12" style={{ backgroundColor: "#0a0808" }} />
        </div>
      </section>

      {/* ══ STATS STRIP ══════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span
                  className="font-black leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#c9a96e", letterSpacing: "-0.03em" }}
                >
                  {s.number}
                </span>
                <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#666", letterSpacing: "0.18em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT NARRATIVE ══════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f2ede7" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left — large pull quote */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Who We Are</span>
              </div>
              <div
                className="font-black leading-none select-none mb-4"
                style={{ fontFamily: "Georgia, serif", fontSize: "5rem", color: "#c9a96e", lineHeight: 0.5 }}
              >
                "
              </div>
              <blockquote
                className="leading-relaxed italic mb-8"
                style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", color: "#2c1a0a", lineHeight: 1.7 }}
              >
                Beauty shouldn't feel rushed, crowded or impersonal.
                At Ann's, every appointment is a moment of calm — just you,
                your stylist, and the result you came for.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
                <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#0a0808", fontSize: "0.6rem", letterSpacing: "0.2em" }}>
                  Ann — Founder
                </span>
              </div>
            </div>

            {/* Right — story text */}
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#6b5540", lineHeight: 1.85 }}>
                Ann's Haircut and Beauty Salon is a private, single-seat studio based
                in Clayton, VIC. We offer haircuts, eyebrow threading, waxing and
                makeup services — all delivered in a calm, appointment-only environment
                designed to make every client feel completely at ease.
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#6b5540", lineHeight: 1.85 }}>
                We started with one clear principle: quality over quantity. By seeing
                one client at a time, we can focus entirely on you — no distractions,
                no corners cut, no rushing to the next person in the waiting room.
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#6b5540", lineHeight: 1.85 }}>
                Whether you're coming in for a quick tidy-up or a full event makeup
                look, you'll always leave feeling cared for. That's what Ann's is
                about — and always will be.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SERVICES OVERVIEW ════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(0,0,0,0.07)" }} />
            <span className="uppercase text-xs tracking-[0.35em] whitespace-nowrap" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>What We Offer</span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(0,0,0,0.07)" }} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.07)" }}>
            {services.map((s, i) => (
              <a
                key={s.label}
                href={`/${s.label.toLowerCase()}-clayton`}
                className="group flex flex-col gap-3 p-8 lg:p-10 transition-colors duration-300"
                style={{ backgroundColor: "#faf8f5" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0e8e0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#faf8f5")}
              >
                <span
                  className="font-black"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem", letterSpacing: "0.22em", color: "#c9a96e" }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-black uppercase text-xl leading-tight transition-colors group-hover:text-[#c9a96e]"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em", color: "#0a0808" }}
                >
                  {s.label}
                </h3>
                <p className="text-xs" style={{ fontFamily: "Georgia, serif", color: "#9a7a60" }}>{s.sub}</p>
                <span className="text-[#c9a96e] mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES GRID ══════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f2ede7" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>What We Stand For</span>
          </div>
          <h2
            className="font-black uppercase leading-none mb-16"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#0a0808" }}
          >
            OUR
            <br /><span style={{ color: "#c9a96e" }}>VALUES.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.07)" }}>
            {values.map((v) => (
              <div
                key={v.num}
                className="group flex flex-col gap-4 p-8 lg:p-10 transition-colors duration-300 cursor-default"
                style={{ backgroundColor: "#f2ede7" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8ddd3")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f2ede7")}
              >
                <span className="font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#c9a96e" }}>{v.num}</span>
                <h3
                  className="font-black uppercase text-xl leading-tight transition-colors group-hover:text-[#c9a96e]"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em", color: "#0a0808" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a5540" }}>{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GOLD CTA BANNER ══════════════════ */}
      <section
        className="w-full relative overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#c9a96e", minHeight: "220px" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 22px)" }} />
        <div className="relative z-10 px-8 lg:px-20 py-16 text-center">
          <p
            className="text-black uppercase leading-none"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Come in once.
            <br className="hidden lg:block" />
            <span style={{ opacity: 0.55 }}> You'll keep coming back.</span>
          </p>
          <a
            href="/booking"
            className="inline-flex items-center gap-3 mt-10 px-10 py-4 font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.02]"
            style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}
          >
            Book a Slot →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}