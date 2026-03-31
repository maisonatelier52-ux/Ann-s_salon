
"use client";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomeSections from '@/components/homeComponents/Homesections';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <Header />
      <div>
        
            {/* ── HERO DESKTOP (lg+) ── */}
            <section
              className="hidden lg:block relative w-full overflow-hidden lg:min-h-[600px]"
              style={{ backgroundColor: "#9a9a8e" }}
            >
              <div className="absolute left-0 top-0 h-full w-1/2 ">
                <Image
                  src="/images/hero-image5.png"
                  alt="TONI&GUY model"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="relative z-10 flex items-center justify-end min-h-[600px]">
                <div className="w-1/2 flex flex-col items-start justify-center px-10 py-20 text-left">
                  <h1
                    className="text-white font-black uppercase leading-none tracking-tight"
                    style={{
                      fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                      fontSize: "clamp(2.8rem, 7vw, 4rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 0.95,
                    }}
                  >
                    WELCOME TO
                    <br />
                    {/* TONI&amp;GUY */}
                    ANN'S Haircuts & beauty salon
                  </h1>
                  <p
                    className="text-white mt-5 max-w-sm text-sm leading-relaxed opacity-95"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Indulge in the mastery of our globally acclaimed artists and experience
                    a salon journey defined by precision, creativity, and elevated haircare.
                  </p>
                  <div className="flex gap-3 mt-8">
                    <Link href={"/haircuts-clayton"} title='haircuts-clayton page'>
                    <button
                      className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                      style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                    >
                      BE INSPIRED
                    </button>
                    </Link>
                   <Link href={"/booking"} title='booking page'>
                    <button
                      className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                      style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                    >
                      BOOK NOW
                    </button>
                   </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── HERO MOBILE / TABLET (< lg) ── */}
            <section
              className="flex lg:hidden flex-col w-full"
              style={{ backgroundColor: "#9a9a8e" }}
            >
              <div className="relative w-full" style={{ height: "155vw", minHeight: "260px", maxHeight: "470px" }}>
                <Image
                  src="/images/hero-image5.png"
                  alt="TONI&GUY model"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="flex flex-col items-center text-center px-8 py-12">
                <h1
                  className="text-white font-black uppercase leading-none tracking-tight"
                  style={{
                    fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                    fontSize: "clamp(2rem, 8vw, 3rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 0.95,
                  }}
                >
                  WELCOME TO ANN'S Haircuts & beauty salon
                </h1>
                <p
                  className="text-white mt-5 text-sm leading-relaxed opacity-95 max-w-xs"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Indulge in the mastery of our globally acclaimed artists and experience
                  a salon journey defined by precision, creativity, and elevated haircare.
                </p>
                <div className="flex gap-3 mt-8">
                  <Link href={"/haircuts-clayton"} title='haircuts-clayton page'>
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    BE INSPIRED
                  </button>
                  </Link>
                 <Link href={"/booking"} title='booking page'>
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    BOOK NOW
                  </button>
                  </Link>
                </div>
              </div>
            </section>
      </div>
      <div>
        
            {/* ══════════════════════════════════════════
                HAIRCARE SECTION — DESKTOP (lg+)
                Text left | Image absolute right
            ══════════════════════════════════════════ */}
            <section
              className="hidden lg:block relative w-full overflow-hidden lg:min-h-[560px]"
              style={{ backgroundColor: "#D6D6D6" }}
            >
              {/* Image — absolute right half */}
              <div className="absolute right-0 top-0 h-full w-1/2">
                <Image
                  src="/images/hero-image7.jpg"
                  alt="Professional haircare model"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text — left half */}
              <div className="relative z-10 flex items-center justify-start min-h-[560px]">
                <div className="w-1/2 flex flex-col items-start justify-center px-16 py-20 text-left">
                  <h2
                    className="text-black font-black uppercase leading-none"
                    style={{
                      fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                      fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.0,
                    }}
                  >
                    PROFESSIONAL
                    <br />
                    HAIRCARE,
                    <br />
                    CURATED FOR
                    <br />
                    YOU.
                  </h2>
                  <p
                    className="text-black mt-6 text-sm leading-relaxed max-w-xs opacity-80"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    LABEL.M Personalised Haircare, created by TONI&amp;GUY. Explore our
                    collection of pro haircare.
                  </p>
                 <Link href={"/threading-clayton"} title='threading page'>
                  <button
                    className="mt-8 border-2 border-black text-black font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    THREADING
                  </button>
                  </Link>
                </div>
              </div>
            </section>

            {/* ══════════════════════════════════════════
                HAIRCARE SECTION — MOBILE / TABLET (< lg)
                Image top | Text bottom
            ══════════════════════════════════════════ */}
            <section
              className="flex lg:hidden flex-col w-full"
              style={{ backgroundColor: "#e8e5e0" }}
            >
              {/* Image — top */}
              <div
                className="relative w-full"
                style={{ height: "100vw", minHeight: "280px", maxHeight: "480px" }}
              >
                <Image
                  src="/images/hero-image7.jpg"
                  alt="Professional haircare model"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Text — bottom */}
              <div className="flex flex-col items-center text-center px-8 py-12">
                <h2
                  className="text-black font-black uppercase leading-none"
                  style={{
                    fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                    fontSize: "clamp(1.8rem, 8vw, 2.8rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.0,
                  }}
                >
                  PROFESSIONAL HAIRCARE,
                  <br />
                  CURATED FOR YOU.
                </h2>
                <p
                  className="text-black mt-5 text-sm leading-relaxed opacity-80 max-w-xs"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  LABEL.M Personalised Haircare, created by TONI&amp;GUY. Explore our
                  collection of pro haircare.
                </p>
                 <Link href={"/threading-clayton"} title='threading page'>
                <button
                  className="mt-8 border-2 border-black text-black font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                  style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                >
                 THREADING
                </button>
                 </Link>
              </div>
            </section>

      </div>
      <div>
        {/* ══════════════════════════════════════════
                EDUCATION — DESKTOP (lg+)
                Image left | Text right
            ══════════════════════════════════════════ */}
            <section
              className="hidden lg:block relative w-full overflow-hidden lg:min-h-[700px]"
              style={{ backgroundColor: "#83847D" }}
            >
              {/* Image — absolute left half */}
              <div className="absolute left-0 top-0 h-full w-1/2">
                <Image
                  src="/images/hero-image8.jpg"
                  alt="TONI&GUY education model"
                  fill
                  className="object-cover object-center"
                />
              </div>
      
              {/* Text — right half */}
              <div className="relative z-10 flex items-center justify-end min-h-[560px]">
                <div className="w-1/2 flex flex-col items-start justify-center px-14 py-20 text-left">
                  <h2
                    className="text-white font-black uppercase leading-none"
                    style={{
                      fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                      fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.05,
                    }}
                  >
                    EDUCATION.
                    <br />
                    EDUCATION.
                    <br />
                    EDUCATION.
                  </h2>
                  <p
                    className="text-white mt-6 text-sm leading-relaxed max-w-sm opacity-90 text-center"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    For over 60 years, our success and philosophy has been rooted firmly
                    in education. Sharing our unique experience, to create innovative,
                    globally renowned hairdressing education.
                  </p>
                  <div className="flex gap-3 mt-8">
                    <Link href={"/waxing-clayton"} title='waxing page'>
                    <button
                      className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                      style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                    >
                      WAXING
                    </button>
                    </Link>
                     <Link href={"/booking"} title='booking page'>
                    <button
                      className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                      style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                    >
                      BOOKING
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
            {/* ── EDUCATION MOBILE / TABLET (< lg) ── */}
            <section
              className="flex lg:hidden flex-col w-full"
              style={{ backgroundColor: "#9a9a8e" }}
            >
              {/* Image — top */}
              <div className="relative w-full" style={{ height: "100vw", minHeight: "280px", maxHeight: "480px" }}>
                <Image
                  src="/images/hero-image8.jpg"
                  alt="TONI&GUY education model"
                  fill
                  className="object-cover object-top"
                  loading="eager"
                />
              </div>
      
              {/* Text — bottom */}
              <div className="flex flex-col items-center text-center px-8 py-12">
                <h2
                  className="text-white font-black uppercase leading-none"
                  style={{
                    fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                    fontSize: "clamp(1.8rem, 8vw, 2.8rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  EDUCATION.
                  <br />
                  EDUCATION.
                  <br />
                  EDUCATION.
                </h2>
                <p
                  className="text-white mt-5 text-sm leading-relaxed opacity-90 max-w-xs"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  For over 60 years, our success and philosophy has been rooted firmly
                  in education. Sharing our unique experience, to create innovative,
                  globally renowned hairdressing education.
                </p>
                <div className="flex flex-col gap-3 mt-8 w-full max-w-xs">
                   <Link href={"/waxing-clayton"} title='waxing page'>
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full cursor-pointer"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                   WAXING
                  </button>
                   </Link>
                    <Link href={"/booking"} title='booking page'>
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full cursor-pointer"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    BOOKING
                  </button>
                </Link>
                </div>
              </div>
            </section>
      </div>

      <div>
  {/* ══════════════════════════════════════════
      OUR SERVICES SECTION — DESKTOP & MOBILE
      Background image, centered heading, 4 cards row, gold button
  ══════════════════════════════════════════ */}
  <section className="relative w-full overflow-hidden py-16 md:py-24 bg-cover bg-center bg-no-repeat">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/ChatGPT Image Mar 31, 2026, 02_33_46 PM.png"
        alt="Luxury salon background"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>

    {/* Content Container */}
    <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
      {/* Heading & Subheading — centered */}
      <div className="text-center mb-12 md:mb-16">
        <h2
          className="text-black font-black uppercase tracking-tight mb-3"
          style={{
            fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          OUR SERVICES
        </h2>
        <p
          className="text-black/70 text-sm md:text-base tracking-wide uppercase font-semibold"
          style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.1em" }}
        >
          INDULGE IN LUXURY. EXPERIENCE PERFECTION.
        </p>
      </div>

      {/* 4 Cards Grid — row on desktop, column on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        
        {/* Card 1 — HAIRCUTS */}
     <Link href={"/haircuts-clayton"} title='haircut page'>
      <div className="group bg-white/85 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  
        {/* Top Image */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src="/images/haircuts/men-fade.webp"
            alt="Haircut service"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 text-center">

          {/* ICON + TITLE ROW */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/images/haircut-icon-image.webp" 
              alt="Haircut icon"
              width={32}
              height={32}
              className="object-contain"
            />

            <h3
              className="text-black font-black text-xl uppercase"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              HAIRCUTS
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Tailored precision cuts designed to complement your individuality and elevate your style.
          </p>

        </div>
      </div>
    </Link>
        {/* Card 2 — THREADING */}
         <Link href={"/threading-clayton"} title='threading page'>
       <div className="group bg-white/85 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src="/images/threading/bold.webp"
            alt="Threading service"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 text-center">

          {/* ICON + TITLE ROW */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/images/threading-icon-image.webp" 
              alt="Haircut icon"
              width={32}
              height={32}
              className="object-contain"
            />

            <h3
              className="text-black font-black text-xl uppercase"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              THREADING
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Meticulous brow shaping and facial threading for a clean, defined, and polished look.
          </p>

        </div>
      </div>
      </Link>

        {/* Card 3 — WAXING */}
         <Link href={"/waxing-clayton"} title='waxing page'>
       <div className="group bg-white/85 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src="/images/waxing/facial-image.webp"
            alt="Waxing service"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/images/waxing-icon-image.webp" 
              alt="Haircut icon"
              width={32}
              height={32}
              className="object-contain"
            />

            <h3
              className="text-black font-black text-xl uppercase"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              WAXING
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Premium waxing treatments that leave your skin flawlessly smooth and radiant.
          </p>

        </div>
      </div>
      </Link>

        {/* Card 4 — MAKEUP */}
         <Link href={"/makeup-clayton"} title='makeup page'>
        <div className="group bg-white/85 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          
          <div className="relative w-full h-48 md:h-56 overflow-hidden">
            <Image
              src="/images/makeup/glam-evening.webp"
              alt="Makeup service"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-5 text-center">
             <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/images/makeup-icon-image.webp" 
              alt="Haircut icon"
              width={32}
              height={32}
              className="object-contain"
            />

            <h3
              className="text-black font-black text-xl uppercase"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
               MAKEUP
            </h3>
          </div>
           

            <p className="text-gray-600 text-sm leading-relaxed">
              Professional makeup artistry that enhances your natural beauty with a flawless finish.
            </p>

          </div>
        </div>
        </Link>
      </div>

      {/* Gold Button — centered below cards */}
      <div className="text-center mt-12 md:mt-16">
       <Link href="/about" title="Explore all services from about page">
          <button
            className="px-8 py-3 md:px-10 md:py-4 uppercase font-black text-sm md:text-base tracking-wider cursor-pointer
                      transition-all duration-300 
                      bg-[#C9A03D] text-black 
                      hover:bg-[#b38f33] hover:-translate-y-[2px] hover:scale-105"
            style={{
              fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
              borderRadius: "0",
            }}
          >
            EXPLORE ALL SERVICES
          </button>
        </Link>
      </div>
    </div>
  </section>
</div>
      <div>
        <HomeSections/>
        
      {/* ══════════════════════════════════════════
          NEW VISION — DESKTOP (lg+)
          Full-width bg image, text overlaid bottom-left
      ══════════════════════════════════════════ */}
      <section className="hidden lg:block relative w-full overflow-hidden lg:min-h-[560px]">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/c414414c44e5a76a11e841db88e91a23.jpg"
            alt="TONI&GUY salon interior"
            fill
            className="object-cover object-center"
          />
        </div>
         <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.35) 100%)",
          }}
        />
 
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.25)" }} />
 
        {/* Text — overlaid bottom-left */}
        <div className="relative z-10 flex items-center justify-start min-h-[560px]">
          <div className="flex flex-col items-start justify-center px-16 py-20 text-left max-w-xl">
            <h2
              className="text-white font-black uppercase leading-none"
              style={{
                fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              NEW VISION.
              <br />
              NEW ENERGY.
              <br />
              NEW EDITION.
            </h2>
            <p
              className="text-white mt-6 text-sm leading-relaxed opacity-90 max-w-sm"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Revitalise your hair with our new Hair Therapy experience, delivered
              by experts in a TONI&amp;GUY salon near you.
            </p>
           <Link href={"/contact_us"} title='Contact us page'>
            <button
              className="mt-8 border-2 border-white text-white font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              CONTACT US
            </button>
            </Link>
          </div>
        </div>
      </section>
 
      {/* ── NEW VISION MOBILE / TABLET ── */}
      <section className="flex lg:hidden flex-col w-full" style={{ backgroundColor: "#111111" }}>
        {/* Image — top */}
        <div className="relative w-full" style={{ height: "80vw", minHeight: "260px", maxHeight: "420px" }}>
          <Image
            src="/images/c414414c44e5a76a11e841db88e91a23.jpg"
            alt="TONI&GUY salon interior"
            fill
            className="object-cover object-center"
          />
          
          {/* Dark overlay on image */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
        </div>
 
        {/* Text — bottom on dark bg */}
        <div className="flex flex-col items-center text-center px-8 py-12" style={{ backgroundColor: "#000000" }}>
          <h2
            className="text-white font-black uppercase leading-none"
            style={{
              fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
              fontSize: "clamp(1.8rem, 8vw, 2.8rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            NEW VISION. NEW ENERGY.
            <br />
            NEW EDITION.
          </h2>
          <p
            className="text-white mt-5 text-sm leading-relaxed opacity-80 max-w-xs"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Revitalise your hair with our new Hair Therapy experience, delivered
            by experts in a TONI&amp;GUY salon near you.
          </p>
          <Link href={"/contact_us"} title='Contact us page'>
          <button
            className="mt-8 border-2 border-white text-white font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            CONTACT US
          </button>
          </Link>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default page

// "use client";
// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export default function page() {
//   return (
//     <div>
//       <Header />

//       {/* ══════════════════════════════════════════
//           HERO — DESKTOP
//       ══════════════════════════════════════════ */}
//       <section
//         className="hidden lg:block relative w-full overflow-hidden"
//         style={{ backgroundColor: "#9a9a8e", minHeight: "600px" }}
//       >
//         <div className="absolute inset-y-0 left-0 w-1/2">
//           <Image
//             src="/images/hero-image5.png"
//             alt="Ann's salon model"
//             fill
//             sizes="(min-width:1024px) 50vw, 100vw"
//             className="object-cover object-center"
//             priority
//           />
//         </div>
//         <div className="relative z-10 flex items-center justify-end min-h-[600px]">
//           <div className="w-1/2 flex flex-col items-start justify-center px-10 py-20 text-left">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="h-px w-8" style={{ backgroundColor: "#fff", opacity: 0.5 }} />
//               <span className="text-white text-xs uppercase tracking-widest opacity-70" style={{ fontFamily: "Georgia, serif" }}>
//                 Clayton VIC · Private Studio
//               </span>
//             </div>
//             <h1
//               className="text-white font-black uppercase leading-none tracking-tight"
//               style={{
//                 fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
//                 fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
//                 letterSpacing: "-0.03em",
//                 lineHeight: 0.92,
//               }}
//             >
//               WELCOME TO
//               <br />
//               ANN&apos;S
//               <br />
//               <span style={{ color: "#fff", opacity: 0.6, fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
//                 HAIRCUTS &amp; BEAUTY
//               </span>
//             </h1>
//             <p className="text-white mt-6 max-w-sm text-sm leading-relaxed opacity-90" style={{ fontFamily: "Arial, sans-serif" }}>
//               Private, appointment-only beauty services in Clayton VIC. One client at a time.
//               No waiting rooms. Just exceptional results.
//             </p>
//             <div className="flex gap-3 mt-8">
//               <Link href="/haircuts-clayton">
//                 <button className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
//                   BE INSPIRED
//                 </button>
//               </Link>
//               <Link href="/booking">
//                 <button className="bg-white text-black font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-transparent hover:text-white border-2 border-white transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
//                   BOOK NOW
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── HERO MOBILE ── */}
//       <section className="flex lg:hidden flex-col w-full" style={{ backgroundColor: "#9a9a8e" }}>
//         <div className="relative w-full" style={{ height: "155vw", minHeight: "260px", maxHeight: "470px" }}>
//           <Image src="/images/hero-image5.png" alt="Ann's salon model" fill sizes="(min-width:1024px) 0vw, 100vw" className="object-cover object-top" priority />
//         </div>
//         <div className="flex flex-col items-center text-center px-8 py-12">
//           <h1 className="text-white font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 8vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 0.95 }}>
//             WELCOME TO<br />ANN&apos;S HAIRCUTS<br />&amp; BEAUTY
//           </h1>
//           <p className="text-white mt-5 text-sm leading-relaxed opacity-90 max-w-xs" style={{ fontFamily: "Arial, sans-serif" }}>
//             Private, appointment-only beauty services. One client at a time. No waiting rooms.
//           </p>
//           <div className="flex gap-3 mt-8">
//             <Link href="/haircuts-clayton"><button className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>BE INSPIRED</button></Link>
//             <Link href="/booking"><button className="bg-white text-black font-black text-xs px-6 py-3 uppercase tracking-widest border-2 border-white hover:bg-transparent hover:text-white transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>BOOK NOW</button></Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           STATS STRIP
//       ══════════════════════════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
//         <div className="max-w-7xl mx-auto px-8 lg:px-20 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { number: "500+", label: "Happy Clients" },
//             { number: "4",    label: "Expert Services" },
//             { number: "5★",   label: "Average Rating" },
//             { number: "1",    label: "Seat. Always Private." },
//           ].map((s) => (
//             <div key={s.label} className="flex flex-col gap-1">
//               <span className="font-black leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#c9a96e", letterSpacing: "-0.03em" }}>{s.number}</span>
//               <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#666", letterSpacing: "0.18em" }}>{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           SERVICES GRID
//       ══════════════════════════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#f8f7f5" }}>
//         <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
//           <div className="flex items-center gap-4 mb-5">
//             <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//             <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>What We Offer</span>
//           </div>
//           <h2 className="font-black uppercase leading-none mb-14" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#0a0808" }}>
//             OUR<br /><span style={{ color: "#c9a96e" }}>SERVICES.</span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.08)" }}>
//             {[
//               { num: "01", title: "Haircuts", sub: "Men, Women & Kids", desc: "Clean fades, tapers, trims, layers and styles — tailored to your head shape and hair type.", href: "/haircuts-clayton", color: "#c9a96e", icon: "✂" },
//               { num: "02", title: "Threading", sub: "Brows, Lip & Face", desc: "Precise, chemical-free brow shaping and facial hair removal. Fast, clean and long-lasting.", href: "/threading-clayton", color: "#8b6d50", icon: "✦" },
//               { num: "03", title: "Waxing", sub: "Facial & Body", desc: "Private, hygienic waxing for face and body. Disposable applicators. Comfort-first approach.", href: "/waxing-clayton", color: "#b48c8c", icon: "◈" },
//               { num: "04", title: "Makeup", sub: "Natural to Glam", desc: "Occasion-ready looks for graduations, weddings, parties and events. Tailored to you.", href: "/makeup-clayton", color: "#c9a96e", icon: "◆" },
//             ].map((s) => (
//               <Link key={s.href} href={s.href}>
//                 <div
//                   className="group flex flex-col gap-5 p-8 lg:p-10 h-full transition-colors duration-300 cursor-pointer"
//                   style={{ backgroundColor: "#f8f7f5" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0a0808")}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f8f7f5")}
//                 >
//                   <div className="flex items-start justify-between">
//                     <span className="text-3xl transition-colors" style={{ color: s.color }}>{s.icon}</span>
//                     <span className="font-black text-xs" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: s.color }}>{s.num}</span>
//                   </div>
//                   <div>
//                     <h3 className="font-black uppercase text-xl leading-tight mb-1 transition-colors group-hover:text-white" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em", color: "#0a0808" }}>{s.title}</h3>
//                     <p className="text-xs uppercase tracking-widest mb-3 transition-colors group-hover:text-[#c9a96e]" style={{ fontFamily: "Georgia, serif", color: "#999" }}>{s.sub}</p>
//                     <p className="text-sm leading-relaxed transition-colors group-hover:text-stone-400" style={{ fontFamily: "Georgia, serif", color: "#7a6050" }}>{s.desc}</p>
//                   </div>
//                   <span className="text-sm mt-auto transition-opacity opacity-0 group-hover:opacity-100" style={{ color: s.color }}>Explore →</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           HAIRCARE SECTION — DESKTOP
//       ══════════════════════════════════════════ */}
//       <section className="hidden lg:block relative w-full overflow-hidden" style={{ backgroundColor: "#D6D6D6", minHeight: "560px" }}>
//         <div className="absolute inset-y-0 right-0 w-1/2">
//           <Image src="/images/hero-image7.jpg" alt="Professional haircare" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-center" />
//         </div>
//         <div className="relative z-10 flex items-center justify-start min-h-[560px]">
//           <div className="w-1/2 flex flex-col items-start justify-center px-16 py-20 text-left">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="h-px w-8" style={{ backgroundColor: "#8b6d50" }} />
//               <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#8b6d50" }}>Threading</span>
//             </div>
//             <h2 className="text-black font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.0 }}>
//               PRECISE BROWS.
//               <br />CHEMICAL-FREE.
//               <br />EVERY TIME.
//             </h2>
//             <p className="text-black mt-6 text-sm leading-relaxed max-w-xs opacity-70" style={{ fontFamily: "Arial, sans-serif" }}>
//               Threading is fast, clean and perfect for sensitive skin. Our brow mapping consultation ensures a shape that flatters your face — naturally.
//             </p>
//             <Link href="/threading-clayton">
//               <button className="mt-8 border-2 border-black text-black font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
//                 EXPLORE THREADING
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── HAIRCARE MOBILE ── */}
//       <section className="flex lg:hidden flex-col w-full" style={{ backgroundColor: "#e8e5e0" }}>
//         <div className="relative w-full" style={{ height: "100vw", minHeight: "280px", maxHeight: "480px" }}>
//           <Image src="/images/hero-image7.jpg" alt="Professional haircare" fill sizes="(min-width:1024px) 0vw, 100vw" className="object-cover object-top" />
//         </div>
//         <div className="flex flex-col items-center text-center px-8 py-12">
//           <h2 className="text-black font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.8rem, 8vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.0 }}>PRECISE BROWS.<br />CHEMICAL-FREE.</h2>
//           <p className="text-black mt-5 text-sm leading-relaxed opacity-70 max-w-xs" style={{ fontFamily: "Arial, sans-serif" }}>Threading is fast, clean and perfect for sensitive skin. Brow mapping included.</p>
//           <Link href="/threading-clayton"><button className="mt-8 border-2 border-black text-black font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>EXPLORE THREADING</button></Link>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           WHY CHOOSE US
//       ══════════════════════════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#faf8f5" }}>
//         <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
//           <div className="flex items-center gap-4 mb-5">
//             <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//             <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Why Ann's</span>
//           </div>
//           <h2 className="font-black uppercase leading-none mb-14" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#0a0808" }}>
//             THE ANN&apos;S
//             <br /><span style={{ color: "#c9a96e" }}>DIFFERENCE.</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.07)" }}>
//             {[
//               { icon: "🔒", title: "Fully Private", detail: "Single-seat studio. You are the only client during your appointment — every time." },
//               { icon: "⏱", title: "No Waiting", detail: "Appointment-only means we're ready when you arrive. Zero waiting room, zero delays." },
//               { icon: "🧼", title: "Hygiene First", detail: "Tools sanitised between clients. Disposable applicators used where required." },
//               { icon: "✦", title: "1-on-1 Attention", detail: "Your stylist or technician is 100% focused on you — no distractions, no rushing." },
//               { icon: "🌿", title: "All Are Welcome", detail: "Men, women, kids. All backgrounds and hair types. A calm space for everyone." },
//               { icon: "📍", title: "Easy to Find", detail: "Located at 2025 Dandenong Rd, Clayton VIC — easy access, parking available nearby." },
//             ].map((f) => (
//               <div key={f.title} className="group flex flex-col gap-4 p-8 lg:p-10 transition-colors duration-300" style={{ backgroundColor: "#faf8f5" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0e8e0")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#faf8f5")}
//               >
//                 <span className="text-2xl">{f.icon}</span>
//                 <h3 className="font-black uppercase text-lg transition-colors group-hover:text-[#c9a96e]" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.01em", color: "#0a0808" }}>{f.title}</h3>
//                 <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a5540" }}>{f.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           WAXING SECTION — DESKTOP
//       ══════════════════════════════════════════ */}
//       <section className="hidden lg:block relative w-full overflow-hidden" style={{ backgroundColor: "#83847D", minHeight: "560px" }}>
//         <div className="absolute inset-y-0 left-0 w-1/2">
//           <Image src="/images/hero-image8.jpg" alt="Waxing service" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-center" />
//         </div>
//         <div className="relative z-10 flex items-center justify-end min-h-[560px]">
//           <div className="w-1/2 flex flex-col items-start justify-center px-14 py-20 text-left">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="h-px w-8" style={{ backgroundColor: "#e8c0c0" }} />
//               <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#e8c0c0" }}>Waxing</span>
//             </div>
//             <h2 className="text-white font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
//               COMFORT.
//               <br />HYGIENE.
//               <br />DIGNITY.
//             </h2>
//             <p className="text-white mt-6 text-sm leading-relaxed max-w-sm opacity-80" style={{ fontFamily: "Arial, sans-serif" }}>
//               Private waxing for face and body in a single-seat studio. Disposable applicators, strict hygiene and aftercare guidance included.
//             </p>
//             <div className="flex gap-3 mt-8">
//               <Link href="/waxing-clayton"><button className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>EXPLORE WAXING</button></Link>
//               <Link href="/booking"><button className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>BOOK NOW</button></Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── WAXING MOBILE ── */}
//       <section className="flex lg:hidden flex-col w-full" style={{ backgroundColor: "#9a9a8e" }}>
//         <div className="relative w-full" style={{ height: "100vw", minHeight: "280px", maxHeight: "480px" }}>
//           <Image src="/images/hero-image8.jpg" alt="Waxing service" fill sizes="(min-width:1024px) 0vw, 100vw" className="object-cover object-top" loading="eager" />
//         </div>
//         <div className="flex flex-col items-center text-center px-8 py-12">
//           <h2 className="text-white font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.8rem, 8vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>COMFORT.<br />HYGIENE.<br />DIGNITY.</h2>
//           <p className="text-white mt-5 text-sm leading-relaxed opacity-80 max-w-xs" style={{ fontFamily: "Arial, sans-serif" }}>Private waxing for face and body. Disposable applicators. Strictly hygienic.</p>
//           <div className="flex flex-col gap-3 mt-8 w-full max-w-xs">
//             <Link href="/waxing-clayton"><button className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>EXPLORE WAXING</button></Link>
//             <Link href="/booking"><button className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>BOOK NOW</button></Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           TESTIMONIALS
//       ══════════════════════════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
//         <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
//           <div className="flex items-center gap-4 mb-5">
//             <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//             <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>What Clients Say</span>
//           </div>
//           <h2 className="text-white font-black uppercase leading-none mb-14" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
//             REAL<br /><span style={{ color: "#c9a96e" }}>REVIEWS.</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,169,110,0.08)" }}>
//             {[
//               { name: "Priya S.", service: "Threading", text: "The studio is so calm and private — nothing like the noisy salons I've been to before. My brows look perfect and she really mapped the shape to my face.", rating: 5 },
//               { name: "Rahul M.", service: "Haircut", text: "Best fade I've had in the area. Clean lines, no rushing, and he actually listened to what I wanted. Booked again already.", rating: 5 },
//               { name: "Sneha K.", service: "Makeup", text: "Booked makeup for my cousin's wedding and I was genuinely blown away. The look lasted all day and everyone kept asking who did my makeup.", rating: 5 },
//             ].map((r) => (
//               <div key={r.name} className="flex flex-col gap-5 p-8 lg:p-10" style={{ backgroundColor: "#0a0808" }}>
//                 <div className="flex gap-1">
//                   {Array.from({ length: r.rating }).map((_, i) => (
//                     <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#c9a96e"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
//                   ))}
//                 </div>
//                 <div className="font-black leading-none select-none" style={{ fontFamily: "Georgia, serif", fontSize: "3.5rem", color: "#c9a96e", lineHeight: 0.5 }}>"</div>
//                 <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "Georgia, serif", color: "#a89070", lineHeight: 1.8 }}>{r.text}</p>
//                 <div>
//                   <p className="text-white font-black uppercase text-xs" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.1em" }}>{r.name}</p>
//                   <p className="text-xs uppercase tracking-widest mt-1" style={{ fontFamily: "Georgia, serif", color: "#c9a96e", fontSize: "0.58rem" }}>{r.service}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-10 text-center">
//             <Link href="/reviews" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b pb-px hover:opacity-70 transition-opacity" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e" }}>
//               Read All Reviews →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           HOW IT WORKS
//       ══════════════════════════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#f2ede7" }}>
//         <div className="max-w-7xl mx-auto px-8 lg:px-20 py-24">
//           <div className="flex items-center gap-4 mb-5">
//             <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//             <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Simple Process</span>
//           </div>
//           <h2 className="font-black uppercase leading-none mb-14" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: "#0a0808" }}>
//             HOW IT
//             <br /><span style={{ color: "#c9a96e" }}>WORKS.</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { step: "01", title: "Choose a Service", detail: "Pick from haircuts, threading, waxing or makeup — or combine for a full session." },
//               { step: "02", title: "Book Online", detail: "Select your date and preferred time. We'll confirm your slot by SMS or email." },
//               { step: "03", title: "Arrive & Consult", detail: "Turn up on time. We'll talk through what you want before we begin." },
//               { step: "04", title: "Leave Looking Great", detail: "Walk out feeling confident. Aftercare advice included with every service." },
//             ].map((p, i) => (
//               <div key={p.step} className="flex flex-col gap-4 relative">
//                 {i < 3 && <div className="hidden md:block absolute top-5 h-px" style={{ backgroundColor: "rgba(201,169,110,0.2)", width: "calc(100% - 1rem)", left: "calc(100% - 0.5rem)" }} />}
//                 <span className="font-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "2.5rem", color: "#c9a96e", letterSpacing: "-0.03em", lineHeight: 1 }}>{p.step}</span>
//                 <h3 className="font-black uppercase text-base" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.01em", color: "#0a0808" }}>{p.title}</h3>
//                 <p className="text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "#7a5540" }}>{p.detail}</p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-14 text-center">
//             <Link href="/booking">
//               <button className="inline-flex items-center gap-3 px-10 py-5 font-black uppercase text-sm tracking-widest transition-all hover:brightness-95 hover:scale-[1.02]" style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em" }}>
//                 Book a Slot Now →
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           FULL-WIDTH IMAGE SECTION
//       ══════════════════════════════════════════ */}
//       <section className="hidden lg:block relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
//         <div className="absolute inset-0">
//           <Image src="/images/c414414c44e5a76a11e841db88e91a23.jpg" alt="Ann's salon interior" fill sizes="100vw" className="object-cover object-center" loading="eager" />
//         </div>
//         <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.35) 100%)" }} />
//         <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.25)" }} />
//         <div className="relative z-10 flex items-center justify-start min-h-[560px]">
//           <div className="flex flex-col items-start justify-center px-16 py-20 text-left max-w-xl">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//               <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Private Studio</span>
//             </div>
//             <h2 className="text-white font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
//               YOUR SPACE.
//               <br />YOUR TIME.
//               <br />YOUR RESULTS.
//             </h2>
//             <p className="text-white mt-6 text-sm leading-relaxed opacity-80 max-w-sm" style={{ fontFamily: "Arial, sans-serif" }}>
//               At Ann's, every appointment is just for you. No crowds, no noise, no waiting. A calm private studio where you get the full attention of your stylist or technician.
//             </p>
//             <Link href="/contact_us">
//               <button className="mt-8 border-2 border-white text-white font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
//                 GET IN TOUCH
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── FULL WIDTH MOBILE ── */}
//       <section className="flex lg:hidden flex-col w-full" style={{ backgroundColor: "#111111" }}>
//         <div className="relative w-full" style={{ height: "80vw", minHeight: "260px", maxHeight: "420px" }}>
//           <Image src="/images/c414414c44e5a76a11e841db88e91a23.jpg" alt="Ann's salon interior" fill sizes="(min-width:1024px) 0vw, 100vw" className="object-cover object-center" loading="eager" />
//           <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)" }} />
//         </div>
//         <div className="flex flex-col items-center text-center px-8 py-12" style={{ backgroundColor: "#000000" }}>
//           <h2 className="text-white font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.8rem, 8vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>YOUR SPACE.<br />YOUR TIME.<br />YOUR RESULTS.</h2>
//           <p className="text-white mt-5 text-sm leading-relaxed opacity-70 max-w-xs" style={{ fontFamily: "Arial, sans-serif" }}>A calm private studio where you get the full attention of your stylist or technician.</p>
//           <Link href="/contact_us"><button className="mt-8 border-2 border-white text-white font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>GET IN TOUCH</button></Link>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           LOCATION STRIP
//       ══════════════════════════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#c9a96e" }}>
//         <div className="max-w-7xl mx-auto px-8 lg:px-20 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
//           <div>
//             <p className="text-black font-black uppercase text-xs tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em" }}>Find Us</p>
//             <p className="text-black font-black uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.2rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
//               2025 Dandenong Rd, Clayton VIC 3168
//             </p>
//             <p className="text-black opacity-60 text-sm mt-1" style={{ fontFamily: "Georgia, serif" }}>Mon–Sat 9AM–6PM · Sun 10AM–4PM · Appointment-only</p>
//           </div>
//           <div className="flex gap-3 flex-wrap">
//             <Link href="/booking"><button className="px-8 py-4 font-black uppercase text-xs tracking-widest transition-all hover:scale-[1.02]" style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif" }}>Book a Slot →</button></Link>
//             <Link href="/contact_us"><button className="px-8 py-4 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-[#c9a96e] transition-colors" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>Contact Us</button></Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
