"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    bg: "linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 50%, #1a1a1a 100%)",
    brand: "TEKNIA\u00AE",
    title: "METAL REMOVER",
    subtitle: "THE TRUE DETOX ACTION",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    id: 2,
    bg: "linear-gradient(135deg, #3a3030 0%, #2b1f1f 50%, #1a1212 100%)",
    brand: "LAKM\u0112\u00AE",
    title: "COLOR STAY",
    subtitle: "VIBRANT COLOR PROTECTION",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80",
  },
  {
    id: 3,
    bg: "linear-gradient(135deg, #2a3a3a 0%, #1b2b2b 50%, #101e1e 100%)",
    brand: "TEKNIA\u00AE",
    title: "DEEP CARE",
    subtitle: "INTENSIVE REPAIR RITUAL",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
  },
  {
    id: 4,
    bg: "linear-gradient(135deg, #3a3530 0%, #2b261f 50%, #1c1810 100%)",
    brand: "LAKM\u0112\u00AE",
    title: "SILK OIL",
    subtitle: "LUMINOUS SHINE SERUM",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=800&q=80",
  },
  {
    id: 5,
    bg: "linear-gradient(135deg, #303a30 0%, #1f2b1f 50%, #101e10 100%)",
    brand: "TEKNIA\u00AE",
    title: "SCALP CARE",
    subtitle: "PURIFYING SCALP TREATMENT",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80",
  },
  {
    id: 6,
    bg: "linear-gradient(135deg, #383838 0%, #262626 50%, #151515 100%)",
    brand: "LAKM\u0112\u00AE",
    title: "GLOSS THERAPY",
    subtitle: "MIRROR SHINE FORMULA",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=800&q=80",
  },
  {
    id: 7,
    bg: "linear-gradient(135deg, #30303a 0%, #1f1f2b 50%, #10101e 100%)",
    brand: "TEKNIA\u00AE",
    title: "CURL EDITION",
    subtitle: "DEFINED CURL PERFECTION",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
  },
  {
    id: 8,
    bg: "linear-gradient(135deg, #3a3030 0%, #2b2020 50%, #1e1515 100%)",
    brand: "LAKM\u0112\u00AE",
    title: "BLONDE TOUCH",
    subtitle: "BRIGHTENING BLONDE RITUAL",
    btnLabel: "Discover more",
    img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&q=80",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const total = slides.length;

  const goTo = useCallback(
    (index) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(((index % total) + total) % total);
        setFading(false);
      }, 350);
    },
    [fading, total]
  );

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 4500);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <div
      className="relative w-full select-none h-[580px] lg:h-[430px]"
      style={{ overflow: "hidden" }}
    >
      {/* Shared bg */}
      <div
        className="absolute inset-0"
        style={{ background: slide.bg, transition: "background 0.7s ease" }}
      />

      {/* Mobile / Tablet: full-bleed image */}
      <img
        key={`mobile-${slide.id}`}
        src={slide.img}
        alt={slide.title}
        className="lg:hidden absolute inset-0 w-full h-full object-cover object-top"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s ease-in-out" }}
      />
      {/* Dark left-to-right gradient overlay for text readability */}
      <div
        className="lg:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Desktop: right-side image panel */}
      <div
        className="hidden lg:block absolute top-0 right-0 h-full"
        style={{ width: "55%", overflow: "hidden" }}
      >
        <img
          key={`desktop-${slide.id}`}
          src={slide.img}
          alt={slide.title}
          className="h-full w-full object-cover object-top"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s ease-in-out" }}
        />
        {/* Left-edge gradient blend */}
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: "220px",
            background: "linear-gradient(to right, rgba(40,40,40,1) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Text content — left aligned on both mobile and desktop */}
      <div
        className="absolute inset-y-0 left-0 flex flex-col justify-center"
        style={{
          width: "100%",
          maxWidth: "50%",
          paddingLeft: "clamp(24px, 6vw, 9%)",
          paddingRight: "clamp(24px, 4vw, 4%)",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.35s ease-in-out",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(1.1rem, 3vw, 1.55rem)",
            letterSpacing: "0.24em",
            color: "#fff",
            marginBottom: "0.4rem",
          }}
        >
          {slide.brand}
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 4.5vw, 2.15rem)",
            letterSpacing: "0.1em",
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: "0.9rem",
          }}
        >
          {slide.title}
        </h2>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(0.75rem, 2vw, 1rem)",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "2rem",
          }}
        >
          {slide.subtitle}
        </p>

        <div>
          <button
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(0.78rem, 1.8vw, 0.88rem)",
              letterSpacing: "0.06em",
              color: "#fff",
              background: "#111",
              border: "none",
              padding: "0.65rem 1.5rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
          >
            {slide.btnLabel}
          </button>
        </div>
      </div>

      {/* ← Arrow */}
      <button
        onClick={() => goTo(current - 1)}
        style={{
          position: "absolute", left: "8px", top: "50%",
          transform: "translateY(-50%)", zIndex: 30,
          background: "none", border: "none",
          color: "rgba(255,255,255,0.75)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: 1, cursor: "pointer", padding: "0 8px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
      >‹</button>

      {/* → Arrow */}
      <button
        onClick={() => goTo(current + 1)}
        style={{
          position: "absolute", right: "8px", top: "50%",
          transform: "translateY(-50%)", zIndex: 30,
          background: "none", border: "none",
          color: "rgba(255,255,255,0.75)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: 1, cursor: "pointer", padding: "0 8px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
      >›</button>

      {/* Dots */}
      <div
        style={{
          position: "absolute", bottom: "16px", left: "50%",
          transform: "translateX(-50%)", display: "flex",
          alignItems: "center", gap: "9px", zIndex: 30,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: "9px", height: "9px", borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.8)",
              background: i === current ? "rgba(255,255,255,0.95)" : "transparent",
              cursor: "pointer", padding: 0,
              transform: i === current ? "scale(1.2)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}