

import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
                  WELCOME TO TONI&amp;GUY
                </h1>
                <p
                  className="text-white mt-5 text-sm leading-relaxed opacity-95 max-w-xs"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Indulge in the mastery of our globally acclaimed artists and experience
                  a salon journey defined by precision, creativity, and elevated haircare.
                </p>
                <div className="flex gap-3 mt-8">
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    BE INSPIRED
                  </button>
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    BOOK NOW
                  </button>
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
                  <button
                    className="mt-8 border-2 border-black text-black font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    SHOP ONLINE
                  </button>
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
                <button
                  className="mt-8 border-2 border-black text-black font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap"
                  style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                >
                  SHOP ONLINE
                </button>
              </div>
            </section>

      </div>
      <div>
        {/* ══════════════════════════════════════════
                EDUCATION — DESKTOP (lg+)
                Image left | Text right
            ══════════════════════════════════════════ */}
            <section
              className="hidden lg:block relative w-full overflow-hidden lg:min-h-[560px]"
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
                    <button
                      className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                      style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                    >
                      EXPLORE COURSES
                    </button>
                    <button
                      className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                      style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                    >
                      OUR FLAGSHIP ACADEMY
                    </button>
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
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    EXPLORE COURSES
                  </button>
                  <button
                    className="border-2 border-white text-white font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full"
                    style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
                  >
                    OUR FLAGSHIP ACADEMY
                  </button>
                </div>
              </div>
            </section>
      </div>
      <div>
        
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
            <button
              className="mt-8 border-2 border-white text-white font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
            >
              FIND A SALON
            </button>
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
          <button
            className="mt-8 border-2 border-white text-white font-black text-xs px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            FIND A SALON
          </button>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default page
