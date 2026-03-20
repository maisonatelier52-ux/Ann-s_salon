"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Review data ── */
const reviews = [
  {
    id: 1,
    name: "Priya S.",
    service: "Threading",
    rating: 5,
    date: "March 2025",
    text: "Absolutely loved my experience. The studio is so calm and private — nothing like the noisy salons I've been to before. My brows look perfect and she really mapped the shape to my face. Will not go anywhere else.",
    featured: true,
  },
  {
    id: 2,
    name: "Rahul M.",
    service: "Haircut",
    rating: 5,
    date: "February 2025",
    text: "Best fade I've had in Mumbai. Clean lines, no rushing, and he actually listened to what I wanted. Booked again already.",
    featured: false,
  },
  {
    id: 3,
    name: "Sneha K.",
    service: "Makeup",
    rating: 5,
    date: "March 2025",
    text: "Booked makeup for my cousin's wedding and I was genuinely blown away. She matched the look to my outfit perfectly and it lasted all day. Everyone kept asking who did my makeup.",
    featured: true,
  },
  {
    id: 4,
    name: "Arjun T.",
    service: "Haircut",
    rating: 5,
    date: "January 2025",
    text: "Private, clean, professional. Got a taper fade and beard trim done together. The attention to detail was something else. Highly recommend.",
    featured: false,
  },
  {
    id: 5,
    name: "Meera D.",
    service: "Waxing",
    rating: 5,
    date: "February 2025",
    text: "I was nervous about going to a new place for waxing but the studio put me completely at ease. So hygienic, so private. Exactly what I needed.",
    featured: false,
  },
  {
    id: 6,
    name: "Kavya R.",
    service: "Threading",
    rating: 5,
    date: "March 2025",
    text: "Threading done so precisely — she took the time to understand the shape I wanted. The brow mapping before starting was a lovely touch. Super clean studio.",
    featured: false,
  },
  {
    id: 7,
    name: "Rohan P.",
    service: "Haircut",
    rating: 5,
    date: "December 2024",
    text: "My go-to haircut spot now. Appointment-only means zero waiting and you get full attention. My hair has never looked this good.",
    featured: true,
  },
  {
    id: 8,
    name: "Divya N.",
    service: "Makeup",
    rating: 5,
    date: "January 2025",
    text: "Graduation makeup that lasted through all the photos, speeches and celebrations. I couldn't stop smiling. Worth every rupee.",
    featured: false,
  },
  {
    id: 9,
    name: "Aditya V.",
    service: "Waxing",
    rating: 5,
    date: "February 2025",
    text: "Clean, quick and completely private. No judgement, no rushing. The aftercare advice was really helpful too.",
    featured: false,
  },
];

const services = ["ALL", "HAIRCUT", "THREADING", "WAXING", "MAKEUP"];

const serviceColors = {
  Threading: { bg: "#8b6d50", text: "#fff" },
  Haircut:   { bg: "#c9a96e", text: "#000" },
  Makeup:    { bg: "#1a0a0a", text: "#c9a96e" },
  Waxing:    { bg: "#b48c8c", text: "#fff" },
};

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9a96e">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const color = serviceColors[review.service] || { bg: "#c9a96e", text: "#000" };
  const isFeatured = review.featured;

  return (
    <div
      className={`group relative flex flex-col gap-5 p-8 transition-all duration-300 hover:-translate-y-1 ${
        isFeatured ? "md:col-span-2" : ""
      }`}
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)")}
    >
      {/* Index number — large background */}
      <span
        className="absolute bottom-4 right-6 select-none pointer-events-none font-black"
        style={{
          fontFamily: "'Arial Black', Arial, sans-serif",
          fontSize: "5rem",
          color: "rgba(0,0,0,0.03)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-2">
          <StarRating count={review.rating} />
          <p
            className="font-black uppercase text-xs tracking-widest"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#1a1a1a", letterSpacing: "0.15em" }}
          >
            {review.name}
          </p>
          <p className="text-xs" style={{ fontFamily: "Georgia, serif", color: "#999" }}>
            {review.date}
          </p>
        </div>
        <span
          className="text-xs font-black uppercase px-3 py-1 tracking-widest"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            backgroundColor: color.bg,
            color: color.text,
            letterSpacing: "0.15em",
            fontSize: "0.6rem",
            whiteSpace: "nowrap",
          }}
        >
          {review.service}
        </span>
      </div>

      {/* Quote mark */}
      <div
        className="font-black leading-none select-none"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "4rem",
          color: "#c9a96e",
          lineHeight: 0.6,
          marginTop: "-8px",
        }}
      >
        "
      </div>

      {/* Review text */}
      <p
        className="leading-relaxed flex-1"
        style={{
          fontFamily: "Georgia, serif",
          color: "#333",
          fontSize: isFeatured ? "1.05rem" : "0.9rem",
          lineHeight: 1.75,
        }}
      >
        {review.text}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function ReviewsPage() {
  const [active, setActive] = useState("ALL");

  const filtered = active === "ALL"
    ? reviews
    : reviews.filter((r) => r.service.toUpperCase() === active);

  const avgRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <div style={{ backgroundColor: "#f8f7f5", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#f8f7f5", minHeight: "60vh" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
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
            WebkitTextStroke: "1px rgba(0,0,0,0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          LOVE
        </div>

        <div className="relative z-10 px-8 lg:px-20 pt-24 pb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
              Dahisar East, Mumbai
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h1
              className="uppercase leading-none"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "clamp(4rem, 11vw, 10rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: "#0a0808",
              }}
            >
              WHAT
              <br />
              THEY
              <br />
              <span style={{ color: "#c9a96e" }}>SAY.</span>
            </h1>

            {/* Stats panel */}
            <div className="flex flex-row lg:flex-col gap-10 lg:gap-6 lg:items-end">
              <div className="flex flex-col gap-1">
                <span
                  className="font-black leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", color: "#0a0808", letterSpacing: "-0.04em" }}
                >
                  {avgRating.toFixed(1)}
                </span>
                <StarRating count={5} />
                <p className="text-xs uppercase tracking-widest mt-1" style={{ fontFamily: "Georgia, serif", color: "#999" }}>
                  Average rating
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-black leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", color: "#0a0808", letterSpacing: "-0.04em" }}
                >
                  {totalReviews}+
                </span>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ fontFamily: "Georgia, serif", color: "#999" }}>
                  Happy clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BLACK STRIP ══════════════════════ */}
      <section
        className="w-full flex items-center justify-center"
        style={{ backgroundColor: "#0a0808", minHeight: "72px" }}
      >
        <p
          className="text-center px-8 py-5 uppercase"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
            color: "#c9a96e",
            letterSpacing: "0.25em",
          }}
        >
          Appointment-only · Private Studio · One client at a time · Dahisar East, Mumbai
        </p>
      </section>

      {/* ══ FEATURED QUOTE ═══════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-5xl mx-auto px-8 lg:px-20 py-20 text-center">
          <div
            className="font-black leading-none select-none"
            style={{ fontFamily: "Georgia, serif", fontSize: "6rem", color: "#c9a96e", lineHeight: 0.5, marginBottom: "1.5rem" }}
          >
            "
          </div>
          <blockquote
            className="leading-relaxed"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              color: "#1a1a1a",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            Nothing like the noisy salons I've been to before. My brows look
            perfect and she really mapped the shape to my face.
            Will not go anywhere else.
          </blockquote>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-widest" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#1a1a1a" }}>Priya S. — Threading Client</span>
            <div className="h-px w-12" style={{ backgroundColor: "#c9a96e" }} />
          </div>
        </div>
      </section>

      {/* ══ FILTER + REVIEWS GRID ════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f8f7f5" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">

          {/* Section heading + filters */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>All Reviews</span>
              </div>
              <h2
                className="font-black uppercase leading-none"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#0a0808" }}
              >
                EVERY
                <br /><span style={{ color: "#c9a96e" }}>REVIEW.</span>
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-1 flex-wrap">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setActive(s)}
                  className="px-5 py-2 text-xs uppercase tracking-widest font-black transition-all cursor-pointer"
                  style={{
                    fontFamily: "'Arial Black', Arial, sans-serif",
                    backgroundColor: active === s ? "#0a0808" : "transparent",
                    color: active === s ? "#c9a96e" : "rgba(0,0,0,0.35)",
                    border: active === s ? "1px solid #0a0808" : "1px solid rgba(0,0,0,0.12)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Review count */}
          <p className="text-xs uppercase tracking-widest mb-8" style={{ fontFamily: "Georgia, serif", color: "#999" }}>
            Showing {filtered.length} review{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <span className="text-6xl">🌟</span>
              <p className="text-sm uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#999" }}>
                No reviews yet for this service
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ══ LEAVE A REVIEW BANNER ════════════ */}
      <section className="w-full relative overflow-hidden" style={{ backgroundColor: "#0a0808" }}>
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(5rem, 16vw, 16rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,169,110,0.06)",
            bottom: "-2rem",
            right: "-1rem",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          REVIEW
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Share Your Experience</span>
              </div>
              <h2
                className="text-white font-black uppercase leading-none mb-6"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}
              >
                BEEN WITH
                <br />US BEFORE?
                <br /><span style={{ color: "#c9a96e" }}>TELL US.</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm mt-8" style={{ fontFamily: "Georgia, serif", color: "#a89070" }}>
                Your feedback helps other clients feel confident booking their first
                appointment. A few words go a long way.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Google review CTA */}
              <a
                href="https://maps.app.goo.gl/iQ4hG5RH142W3svY9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-10 py-7 font-black uppercase text-base tracking-widest transition-all hover:brightness-110 hover:scale-[1.02]"
                style={{ backgroundColor: "#c9a96e", color: "#000", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
              >
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Leave a Google Review</span>
                </div>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200">→</span>
              </a>

              {/* Trust row */}
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { icon: "⭐", label: `${totalReviews}+ Reviews` },
                  { icon: "🏆", label: "5-Star Rated" },
                  { icon: "📍", label: "Mumbai Studio" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-2 py-5 text-center"
                    style={{ border: "1px solid rgba(201,169,110,0.12)", backgroundColor: "#0f0c0c" }}
                  >
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", fontSize: "0.6rem", color: "#c9a96e" }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOOK CTA ══════════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#c9a96e" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <p
            className="text-black uppercase leading-none"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Ready to experience it yourself?
          </p>
          <a
            href="/booking"
            className="flex items-center gap-4 px-10 py-5 font-black uppercase text-sm tracking-widest transition-all hover:scale-[1.02] whitespace-nowrap"
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