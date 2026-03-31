import Image from 'next/image'
import Link from 'next/link'

/* ══════════════════════════════════════════
   1. MEET OUR EXPERTS
══════════════════════════════════════════ */
function MeetOurExperts() {
  const experts = [
    { name: "Emily",   role: "Senior Stylist",      img: "/images/experts/emily.webp" },
    { name: "Jessica", role: "Color Specialist",     img: "/images/experts/jessica.webp" },
    { name: "Laura",   role: "Skin Expert",          img: "/images/experts/laura.webp" },
    { name: "Michael", role: "Men's Stylist",        img: "/images/experts/michael.webp" },
  ]

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="max-w-5xl mx-auto px-8 lg:px-16 text-center">
        {/* Heading */}
        <p className="uppercase text-xs tracking-[0.35em] mb-3" style={{ fontFamily: "Georgia, serif", color: "#9a7a5a" }}>Our Team</p>
        <h2
          className="font-black uppercase mb-14"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
        >
          MEET OUR EXPERTS
        </h2>

        {/* 4 experts row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {experts.map((e) => (
            <div key={e.name} className="flex flex-col items-center gap-3 group">
              {/* Round image */}
              <div
                className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105"
                style={{ width: "120px", height: "120px", flexShrink: 0 }}
              >
                {/* Gradient placeholder */}
                <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg,#d4b896,#a08060)" }} />
                <Image
                  src={e.img}
                  alt={e.name}
                  fill
                  sizes="120px"
                  className="object-cover rounded-full"
                  onError={(ev) => { ev.currentTarget.style.display = "none" }}
                />
              </div>
              <div>
                <p className="font-bold text-sm" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#1a1a1a" }}>{e.name}</p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "Georgia, serif", color: "#9a7a5a" }}>{e.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   2. HAIRCARE BANNER (image left, content right)
══════════════════════════════════════════ */
function HaircareBanner() {
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden lg:flex w-full" style={{ minHeight: "440px" }}>
        {/* Left — image */}
        <div className="relative w-1/2" style={{ minHeight: "340px" }}>
          <Image
            src="/images/haircare-banner-image.webp"
            alt="Professional haircare"
            fill
            sizes="50vw"
           className="object-cover object-[center_50%]"
          />
        </div>
        {/* Right — content */}
        <div
          className="w-1/2 flex flex-col justify-center px-14 py-16"
          style={{ backgroundColor: "#9E8962" }}
        >
          <p className="uppercase text-xs tracking-[0.3em] mb-3" style={{ fontFamily: "Georgia, serif", color: "#e6c9ab" }}>Featured</p>
          <h3
            className="font-black uppercase leading-tight mb-4"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            PROFESSIONAL HAIRCARE,<br />CURATED FOR YOU.
          </h3>
          <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "Arial, sans-serif", color: "#6b5040" }}>
            Expert haircare services tailored to your hair type and lifestyle. From precision cuts to
            colour treatments — we deliver results that last.
          </p>
          <Link href="/haircuts-clayton">
            <button
              className="self-start px-8 py-3 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              VIEW HAIRCARE
            </button>
          </Link>
        </div>
      </section>

      {/* MOBILE */}
      <section className="flex lg:hidden flex-col w-full">
        <div className="relative w-full" style={{ height: "60vw", minHeight: "220px" }}>
          <Image src="/images/haircare-banner-image.webp" alt="Professional haircare" fill sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="flex flex-col items-center text-center px-8 py-12" style={{ backgroundColor: "#9E8962" }}>
          <h3 className="font-black uppercase leading-tight mb-4" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 6vw, 2rem)", color: "#1a1a1a" }}>
            PROFESSIONAL HAIRCARE,<br />CURATED FOR YOU.
          </h3>
          <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "Arial, sans-serif", color: "#6b5040" }}>
            Expert haircare services tailored to your hair type and lifestyle.
          </p>
          <Link href="/haircuts-clayton">
            <button className="px-8 py-3 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              VIEW HAIRCARE
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

/* ══════════════════════════════════════════
   3. BEFORE & AFTER
══════════════════════════════════════════ */
function BeforeAfter() {
  const cards = [
    {
      before: "/images/before-after/before-1.webp",
      after:  "/images/before-after/after-1.webp",
      price:  "from $50",
    },
    {
      before: "/images/before-after/before-2.webp",
      after:  "/images/before-after/after-2.webp",
      price:  "from $60",
    },
    {
      before: "/images/before-after/before-3.webp",
      after:  "/images/before-after/after-3.webp",
      price:  "from $150",
    },
  ]

  const gradients = [
    "from-amber-800 to-stone-700",
    "from-stone-600 to-amber-900",
    "from-zinc-700 to-stone-600",
  ]

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-[0.35em] mb-3" style={{ fontFamily: "Georgia, serif", color: "#9a7a5a" }}>Transformations</p>
          <h2
            className="font-black uppercase"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            BEFORE &amp; AFTER
          </h2>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md group">
              <div className="flex">
                {/* BEFORE */}
                <div className="relative flex-1 overflow-hidden" style={{ height: "220px" }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]}`} />
                  <Image
                    src={card.before}
                    alt="Before"
                    fill
                    sizes="(min-width:768px) 16vw, 45vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = "none" }}
                  />
                  {/* Overlay label */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                    <span className="text-white text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem" }}>Before</span>
                  </div>
                </div>

                {/* AFTER */}
                <div className="relative flex-1 overflow-hidden" style={{ height: "220px" }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[(i + 1) % 3]}`} />
                  <Image
                    src={card.after}
                    alt="After"
                    fill
                    sizes="(min-width:768px) 16vw, 45vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = "none" }}
                  />
                  {/* Overlay label + price */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-end justify-between" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                    <span className="text-white text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem" }}>After</span>
                    <span className="text-[#c9a96e] text-xs font-bold" style={{ fontFamily: "Georgia, serif", fontSize: "0.62rem" }}>{card.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More button */}
        {/* <div className="text-center">
          <Link href="/reviews">
            <button
              className="px-10 py-3 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              VIEW MORE
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   4. SPECIAL OFFERS BANNER (content left, image right)
══════════════════════════════════════════ */
function SpecialOffersBanner() {
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden lg:flex w-full" style={{ minHeight: "380px" }}>
        {/* Left — dark content */}
        <div
          className="w-1/2 flex flex-col justify-center px-14 py-16"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <p
            className="uppercase text-xs tracking-[0.3em] mb-3 font-bold"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", letterSpacing: "0.25em", fontSize: "0.6rem" }}
          >
            SPECIAL OFFERS
          </p>
          <h3
            className="font-black uppercase leading-tight mb-5"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.05 }}
          >
            EDUCATION,<br />EDUCATION.<br />EDUCATION.
          </h3>
          <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "Arial, sans-serif", color: "#a89070" }}>
            For over 60 years, our success and philosophy has been rooted firmly in education.
            Sharing our unique experience, to create innovative, globally renowned hairdressing education.
          </p>
          <div className="flex gap-3">
            <Link href="/makeup-clayton">
              <button className="px-7 py-3 font-black uppercase text-xs tracking-widest border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                MAKE UP
              </button>
            </Link>
            <Link href="/booking">
              <button className="px-7 py-3 font-black uppercase text-xs tracking-widest border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
        {/* Right — image */}
        <div className="relative w-1/2" style={{ minHeight: "380px" }}>
          <Image
            src="/images/makeup-banner-image.webp"
            alt="Special offers"
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* MOBILE */}
      <section className="flex lg:hidden flex-col w-full">
        <div className="relative w-full" style={{ height: "65vw", minHeight: "240px" }}>
          <Image src="/images/hero-image8.jpg" alt="Special offers" fill sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="flex flex-col items-center text-center px-8 py-12" style={{ backgroundColor: "#1a1a1a" }}>
          <p className="uppercase text-xs tracking-[0.3em] mb-3 font-bold" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", fontSize: "0.6rem" }}>SPECIAL OFFERS</p>
          <h3 className="font-black uppercase leading-tight mb-4 text-white" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 6vw, 2rem)", lineHeight: 1.05 }}>
            EDUCATION,<br />EDUCATION.<br />EDUCATION.
          </h3>
          <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "Arial, sans-serif", color: "#a89070" }}>
            Rooted in education. Sharing our experience to create innovative hairdressing excellence.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/waxing-clayton"><button className="px-7 py-3 font-black uppercase text-xs border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>WAXING</button></Link>
            <Link href="/booking"><button className="px-7 py-3 font-black uppercase text-xs border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>BOOK NOW</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════════════════════════════════
   5. OUR GALLERY
══════════════════════════════════════════ */
function OurGallery() {
  const galleryImages = [
    { src: "/images/gallery/salon-1.webp", span: "col-span-2 row-span-2", grad: "from-zinc-800 to-stone-700" },
    { src: "/images/gallery/salon-2.webp", span: "col-span-1 row-span-1", grad: "from-stone-700 to-zinc-800" },
    { src: "/images/gallery/salon-3.webp", span: "col-span-1 row-span-1", grad: "from-amber-900 to-stone-800" },
    { src: "/images/gallery/salon-4.webp", span: "col-span-1 row-span-1", grad: "from-neutral-800 to-zinc-700" },
    { src: "/images/gallery/salon-5.webp", span: "col-span-1 row-span-1", grad: "from-stone-600 to-amber-900" },
    { src: "/images/gallery/salon-6.webp", span: "col-span-1 row-span-1", grad: "from-zinc-900 to-stone-700" },
    { src: "/images/gallery/salon-7.webp", span: "col-span-1 row-span-1", grad: "from-stone-800 to-neutral-700" },
    { src: "/images/gallery/salon-8.webp", span: "col-span-1 row-span-1", grad: "from-zinc-900 to-stone-700" },
    { src: "/images/gallery/salon-9.webp", span: "col-span-1 row-span-1", grad: "from-stone-800 to-neutral-700" },
    
  ]

  return (
    <section className="w-full py-16" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-black uppercase mb-2"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            OUR GALLERY
          </h2>
          <p className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#9a7a5a" }}>
            STEP INSIDE OUR HAPPY CLIENTS.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${img.grad}`} />
              {/* Real image */}
              <Image
                src={img.src}
                alt={`Gallery ${i + 1}`}
                fill
                sizes="(min-width:768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = "none" }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-10">
          <Link href="/reviews">
            <button
              className="px-10 py-3 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              VIEW MORE
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   EXPORT — drop all 5 sections together
══════════════════════════════════════════ */
export default function HomeSections() {
  return (
    <>
      <MeetOurExperts />
      <HaircareBanner />
      <BeforeAfter />
      <SpecialOffersBanner />
      <OurGallery />
    </>
  )
}