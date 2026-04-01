"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── Data ── */
const categories = ["ALL", "HAIRCUTS", "THREADING", "WAXING", "MAKEUP"];

const services = [
  /* ── HAIRCUTS ── */
  {
    id: 1,
    category: "HAIRCUTS",
    title: "Men's Haircut",
    desc: "Classic or contemporary cuts shaped to your head and face. Includes a consultation and finish.",
    duration: "30 min",
    price: "From $35",
    tag: "POPULAR",
    href: "/haircuts-clayton",
  },
  {
    id: 2,
    category: "HAIRCUTS",
    title: "Women's Haircut",
    desc: "Precision trims, layers and shaping. Blow-wave finish available on request.",
    duration: "45 min",
    price: "From $55",
    tag: null,
    href: "/haircuts-clayton",
  },
  {
    id: 3,
    category: "HAIRCUTS",
    title: "Kids' Haircut",
    desc: "Patient, friendly service for children. Tidy shapes they'll love and parents will approve.",
    duration: "25 min",
    price: "From $25",
    tag: null,
    href: "/haircuts-clayton",
  },
  {
    id: 4,
    category: "HAIRCUTS",
    title: "Fade & Taper",
    desc: "Skin fade, mid fade or taper — sharp lines and clean blends. Pairs with any length on top.",
    duration: "40 min",
    price: "From $45",
    tag: "POPULAR",
    href: "/haircuts-clayton",
  },
  {
    id: 5,
    category: "HAIRCUTS",
    title: "Beard Trim",
    desc: "Line-up, shape and tidy. Can be added on to any haircut booking.",
    duration: "15 min",
    price: "From $20",
    tag: "ADD-ON",
    href: "/haircuts-clayton",
  },

  /* ── THREADING ── */
  {
    id: 6,
    category: "THREADING",
    title: "Eyebrow Threading",
    desc: "Precise brow shaping mapped to your face shape. Natural or defined — your choice.",
    duration: "15 min",
    price: "From $18",
    tag: "POPULAR",
    href: "/threading-clayton",
  },
  {
    id: 7,
    category: "THREADING",
    title: "Upper Lip Threading",
    desc: "Quick, clean and precise. A popular add-on with brow threading.",
    duration: "8 min",
    price: "From $10",
    tag: "ADD-ON",
    href: "/threading-clayton",
  },
  {
    id: 8,
    category: "THREADING",
    title: "Chin Threading",
    desc: "Fine facial hair removed with precision — no chemicals, no irritation.",
    duration: "10 min",
    price: "From $12",
    tag: null,
    href: "/threading-clayton",
  },
  {
    id: 9,
    category: "THREADING",
    title: "Full Face Threading",
    desc: "Complete facial session: brows, upper lip, chin, cheeks and sideburns in one visit.",
    duration: "30 min",
    price: "From $40",
    tag: null,
    href: "/threading-clayton",
  },
  {
    id: 10,
    category: "THREADING",
    title: "Brow Mapping",
    desc: "Personalised consultation to design the ideal brow shape for your face before we begin.",
    duration: "10 min",
    price: "Included",
    tag: "COMPLIMENTARY",
    href: "/threading-clayton",
  },

  /* ── WAXING ── */
  {
    id: 11,
    category: "WAXING",
    title: "Facial Waxing",
    desc: "Upper lip, chin, brows and sideburns — precise and fast with minimal discomfort.",
    duration: "20 min",
    price: "From $22",
    tag: null,
    href: "/waxing-clayton",
  },
  {
    id: 12,
    category: "WAXING",
    title: "Full Arm Wax",
    desc: "Smooth results from wrist to shoulder. Long-lasting and gentle on the skin.",
    duration: "30 min",
    price: "From $38",
    tag: null,
    href: "/waxing-clayton",
  },
  {
    id: 13,
    category: "WAXING",
    title: "Half Leg Wax",
    desc: "Knee to ankle — clean and smooth. Perfect for maintenance between full sessions.",
    duration: "25 min",
    price: "From $30",
    tag: null,
    href: "/waxing-clayton",
  },
  {
    id: 14,
    category: "WAXING",
    title: "Full Leg Wax",
    desc: "Ankle to hip. Smooth results that last weeks. Aftercare guidance included.",
    duration: "45 min",
    price: "From $55",
    tag: "POPULAR",
    href: "/waxing-clayton",
  },
  {
    id: 15,
    category: "WAXING",
    title: "Underarm Wax",
    desc: "Clean, fast and gentle. One of our most popular add-ons.",
    duration: "15 min",
    price: "From $18",
    tag: "ADD-ON",
    href: "/waxing-clayton",
  },
  {
    id: 16,
    category: "WAXING",
    title: "Bikini Wax",
    desc: "Discussed privately and performed with full confidentiality. Strict hygiene protocols.",
    duration: "25 min",
    price: "From $35",
    tag: null,
    href: "/waxing-clayton",
  },
  {
    id: 17,
    category: "WAXING",
    title: "Brazilian Wax",
    desc: "Full removal. Strictly private, appointment-only. Aftercare guidance provided.",
    duration: "40 min",
    price: "From $55",
    tag: null,
    href: "/waxing-clayton",
  },

  /* ── MAKEUP ── */
  {
    id: 18,
    category: "MAKEUP",
    title: "Natural / Everyday Look",
    desc: "Skin-enhancing, effortless makeup that looks polished without feeling heavy.",
    duration: "45 min",
    price: "From $60",
    tag: null,
    href: "/makeup-clayton",
  },
  {
    id: 19,
    category: "MAKEUP",
    title: "Glam / Evening Look",
    desc: "Full glam with bold eyes, contour and long-wear finish. Perfect for events and nights out.",
    duration: "60 min",
    price: "From $85",
    tag: "POPULAR",
    href: "/makeup-clayton",
  },
  {
    id: 20,
    category: "MAKEUP",
    title: "Bridal Makeup",
    desc: "Trial session + wedding day application. Book early to secure your date.",
    duration: "75 min",
    price: "From $120",
    tag: "BRIDAL",
    href: "/makeup-clayton",
  },
  {
    id: 21,
    category: "MAKEUP",
    title: "Graduation / Event Makeup",
    desc: "Occasion-ready looks for graduations, parties and photoshoots. Tailored to your outfit.",
    duration: "60 min",
    price: "From $75",
    tag: null,
    href: "/makeup-clayton",
  },
  {
    id: 22,
    category: "MAKEUP",
    title: "Skin Prep & Base",
    desc: "Skincare prep, primer and long-wear base application. Can be added to any makeup service.",
    duration: "15 min",
    price: "From $20",
    tag: "ADD-ON",
    href: "/makeup-clayton",
  },
];

const tagColors = {
  POPULAR:       { bg: "#c9a96e", text: "#000" },
  "ADD-ON":      { bg: "#0a0808", text: "#c9a96e" },
  BRIDAL:        { bg: "#b48c8c", text: "#fff" },
  COMPLIMENTARY: { bg: "#1a7a1a", text: "#fff" },
};

const categoryColors = {
  HAIRCUTS:  "#c9a96e",
  THREADING: "#8b6d50",
  WAXING:    "#b48c8c",
  MAKEUP:    "#c9a96e",
};

const categoryIcons = {
  HAIRCUTS:  "✂",
  THREADING: "✦",
  WAXING:    "◈",
  MAKEUP:    "◆",
};

function ServiceCard({ s }) {
  const accentColor = categoryColors[s.category];
  const tagStyle = s.tag ? tagColors[s.tag] : null;

  return (
    <div
      className="group relative flex flex-col gap-4 p-7 border transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.borderColor = accentColor; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"; }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl" style={{ color: accentColor }}>{categoryIcons[s.category]}</span>
        {tagStyle && (
          <span
            className="text-xs font-black uppercase px-2 py-1 whitespace-nowrap"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", backgroundColor: tagStyle.bg, color: tagStyle.text, fontSize: "0.55rem", letterSpacing: "0.15em" }}
          >
            {s.tag}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="font-black uppercase leading-tight transition-colors group-hover:text-[var(--accent)]"
        style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "1.05rem", letterSpacing: "-0.01em", color: "#0a0808", "--accent": accentColor }}
      >
        {s.title}
      </h3>

      {/* Desc */}
      <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "Georgia, serif", color: "#7a5540" }}>
        {s.desc}
      </p>

      {/* Duration + Price row */}
      <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#aaa", fontSize: "0.6rem" }}>
          ⏱ {s.duration}
        </span>
        <span className="font-black text-sm" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: accentColor }}>
          {s.price}
        </span>
      </div>

      {/* Book button */}
      <Link href="/booking">
        <button
          className="w-full py-3 font-black uppercase text-xs tracking-widest transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
          style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}
        >
          Book This →
        </button>
      </Link>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function ServicesPage() {
  const [active, setActive] = useState("ALL");

  const filtered = active === "ALL" ? services : services.filter((s) => s.category === active);

  const grouped = active === "ALL"
    ? ["HAIRCUTS", "THREADING", "WAXING", "MAKEUP"].reduce((acc, cat) => {
        acc[cat] = services.filter((s) => s.category === cat);
        return acc;
      }, {})
    : null;

  return (
    <div style={{ backgroundColor: "#f8f7f5", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO ══════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#0a0808", minHeight: "300px" }}>
        {/* Grid texture */}
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
            fontSize: "clamp(5rem, 18vw, 18rem)",
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
          SERVICES
        </div>
        <div className="relative z-10 px-8 lg:px-20 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
              Ann's Haircuts & Beauty · Clayton VIC
            </span>
          </div>
          <h1 className="text-white uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(3rem, 10vw, 8rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
            OUR
            <br /><span style={{ color: "#c9a96e" }}>SERVICES.</span>
          </h1>
        </div>
      </section>

      {/* ══ FILTER TABS ══════════════════════ */}
      <section className="w-full sticky top-0 z-40" style={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-4 flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="flex-shrink-0 px-5 py-2 text-xs uppercase tracking-widest font-black transition-all cursor-pointer"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                backgroundColor: active === cat ? "#0a0808" : "transparent",
                color: active === cat ? "#c9a96e" : "rgba(0,0,0,0.4)",
                border: active === cat ? "1px solid #0a0808" : "1px solid rgba(0,0,0,0.12)",
                letterSpacing: "0.12em",
              }}
            >
              {cat === "ALL" ? "ALL" : `${categoryIcons[cat]} ${cat}`}
            </button>
          ))}
          <div className="ml-auto flex-shrink-0">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#aaa", fontSize: "0.6rem" }}>
              {filtered.length} service{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* ══ SERVICES CONTENT ═════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f8f7f5" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">

          {/* ALL view — grouped by category */}
          {grouped ? (
            <div className="flex flex-col gap-20">
              {Object.entries(grouped).map(([cat, items]) => (
                <div key={cat}>
                  {/* Category header */}
                  <div className="flex items-center gap-5 mb-10">
                    <span className="text-3xl" style={{ color: categoryColors[cat] }}>{categoryIcons[cat]}</span>
                    <div>
                      <h2
                        className="font-black uppercase leading-none"
                        style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", letterSpacing: "-0.02em", color: "#0a0808" }}
                      >
                        {cat}
                      </h2>
                      <Link href={`/${cat.toLowerCase()}-clayton`} className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ fontFamily: "Georgia, serif", color: categoryColors[cat], fontSize: "0.6rem" }}>
                        View full {cat.toLowerCase()} page →
                      </Link>
                    </div>
                    <div className="flex-1 h-px ml-4" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
                  </div>

                  {/* Cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((s) => <ServiceCard key={s.id} s={s} />)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Filtered view */
            <div>
              <p className="text-xs uppercase tracking-widest mb-8" style={{ fontFamily: "Georgia, serif", color: "#aaa" }}>
                Showing {filtered.length} {active.toLowerCase()} service{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((s) => <ServiceCard key={s.id} s={s} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ PRICING NOTE ═════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f2ede7" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-12 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16">
          <div className="flex items-center gap-3">
            <span className="text-xl">ℹ</span>
            <p className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#7a5540", lineHeight: 1.7 }}>
              <strong style={{ color: "#0a0808" }}>Pricing notice:</strong> All prices shown are starting prices.
              Final pricing depends on hair length, service complexity and any add-ons selected.
              Exact pricing will be confirmed at the time of booking.
            </p>
          </div>
          <Link href="/contact_us" className="flex-shrink-0">
            <button className="px-8 py-3 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer whitespace-nowrap" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              Ask Us →
            </button>
          </Link>
        </div>
      </section>

      {/* ══ POPULAR COMBOS ═══════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Best Value</span>
          </div>
          <h2 className="text-white font-black uppercase leading-none mb-14" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
            POPULAR
            <br /><span style={{ color: "#c9a96e" }}>COMBOS.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,169,110,0.08)" }}>
            {[
              {
                title: "Haircut + Beard Trim",
                items: ["Men's Haircut", "Beard Trim"],
                time: "45 min",
                price: "From $50",
                color: "#c9a96e",
              },
              {
                title: "Brows + Upper Lip",
                items: ["Eyebrow Threading", "Upper Lip Threading"],
                time: "20 min",
                price: "From $25",
                color: "#8b6d50",
              },
              {
                title: "Makeup + Brows",
                items: ["Eyebrow Threading", "Natural / Glam Makeup"],
                time: "75 min",
                price: "From $70",
                color: "#b48c8c",
              },
            ].map((combo) => (
              <div key={combo.title} className="flex flex-col gap-5 p-8 lg:p-10" style={{ backgroundColor: "#0a0808" }}>
                <h3 className="font-black uppercase text-xl leading-tight" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: combo.color, letterSpacing: "-0.01em" }}>
                  {combo.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {combo.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: combo.color }} />
                      <span className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#a89070" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
                  <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#555", fontSize: "0.6rem" }}>⏱ {combo.time}</span>
                  <span className="font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: combo.color }}>{combo.price}</span>
                </div>
                <Link href="/booking">
                  <button className="w-full py-3 font-black uppercase text-xs tracking-widest border transition-colors cursor-pointer hover:text-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", borderColor: combo.color, color: combo.color, letterSpacing: "0.12em" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = combo.color; e.currentTarget.style.color = "#000"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = combo.color; }}
                  >
                    Book Combo →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOOK CTA ══════════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#c9a96e" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-black uppercase text-xs tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "rgba(0,0,0,0.5)", fontSize: "0.6rem" }}>
              Appointment-only · Private Studio · Clayton VIC
            </p>
            <p className="text-black font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Ready to book your service?
            </p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <Link href="/booking">
              <button className="px-10 py-4 font-black uppercase text-xs tracking-widest transition-all hover:scale-[1.02]" style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}>
                Book a Slot →
              </button>
            </Link>
            <Link href="/contact_us">
              <button className="px-10 py-4 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-[#c9a96e] transition-colors" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.15em" }}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}