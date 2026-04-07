import Image from 'next/image'
import Link from 'next/link'

/* ══════════════════════════════════════════
   1. MEET OUR EXPERTS
══════════════════════════════════════════ */
function MeetOurExperts() {
  const experts = [
    { name: "Ann",     role: "Head Stylist & Founder",  img: "/images/experts/emily.webp" },
    { name: "Jessica", role: "Colour Specialist",        img: "/images/experts/jessica.webp" },
    { name: "Laura",   role: "Skin & Waxing Expert",     img: "/images/experts/laura.webp" },
    { name: "Michael", role: "Men&apos;s Grooming",      img: "/images/experts/michael.webp" },
  ]

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="max-w-5xl mx-auto px-8 lg:px-16 text-center">
        <p className="uppercase text-xs tracking-[0.35em] mb-3" style={{ fontFamily: "Georgia, serif", color: "#9a7a5a" }}>
          The People Behind Your Look
        </p>
        <h2
          className="font-black uppercase mb-14"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
        >
          MEET OUR EXPERTS
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {experts.map((e) => (
            <div key={e.name} className="flex flex-col items-center gap-3 group">
              <div
                className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105"
                style={{ width: "120px", height: "120px", flexShrink: 0 }}
              >
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
   2. HAIRCUTS BANNER (image left, content right)
══════════════════════════════════════════ */
function HaircutsBanner() {
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden lg:flex w-full" style={{ minHeight: "440px" }}>
        <div className="relative w-1/2" style={{ minHeight: "340px" }}>
          <Image
            src="/images/haircare-banner-image.webp"
            alt="Ann's precision haircut service"
            fill
            sizes="50vw"
            className="object-cover object-[center_50%]"
          />
        </div>
        <div
          className="w-1/2 flex flex-col justify-center px-14 py-16"
          style={{ backgroundColor: "#9E8962" }}
        >
          <p className="uppercase text-xs tracking-[0.3em] mb-3" style={{ fontFamily: "Georgia, serif", color: "#e6c9ab" }}>
            Signature Service
          </p>
          <h3
            className="font-black uppercase leading-tight mb-4"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            THE CUT THAT<br />DEFINES YOU.
          </h3>
          <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "Arial, sans-serif", color: "#6b5040" }}>
            Every haircut at Ann&apos;s is a personalised experience. Our stylists take the time
            to understand your hair type, lifestyle and vision — delivering precision cuts that
            grow out beautifully and turn heads every day.
          </p>
          <Link href="/haircuts-clayton" title="View haircut services">
            <button
              className="self-start px-8 py-3 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              VIEW HAIRCUTS
            </button>
          </Link>
        </div>
      </section>

      {/* MOBILE */}
      <section className="flex lg:hidden flex-col w-full">
        <div className="relative w-full" style={{ height: "60vw", minHeight: "220px" }}>
          <Image src="/images/haircare-banner-image.webp" alt="Ann's precision haircut service" fill sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="flex flex-col items-center text-center px-8 py-12" style={{ backgroundColor: "#9E8962" }}>
          <h3 className="font-black uppercase leading-tight mb-4" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 6vw, 2rem)", color: "#1a1a1a" }}>
            THE CUT THAT<br />DEFINES YOU.
          </h3>
          <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "Arial, sans-serif", color: "#6b5040" }}>
            Personalised precision cuts tailored to your hair type, lifestyle and vision.
          </p>
          <Link href="/haircuts-clayton" title="View haircut services">
            <button className="px-8 py-3 font-black uppercase text-xs tracking-widest border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              VIEW HAIRCUTS
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
    { before: "/images/before-after/before-1.webp", after: "/images/before-after/after-1.webp", price: "from $50" },
    { before: "/images/before-after/before-2.webp", after: "/images/before-after/after-2.webp", price: "from $60" },
    { before: "/images/before-after/before-3.webp", after: "/images/before-after/after-3.webp", price: "from $150" },
  ]

  const gradients = [
    "from-amber-800 to-stone-700",
    "from-stone-600 to-amber-900",
    "from-zinc-700 to-stone-600",
  ]

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-[0.35em] mb-3" style={{ fontFamily: "Georgia, serif", color: "#9a7a5a" }}>
            Real Results, Real Clients
          </p>
          <h2
            className="font-black uppercase"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            BEFORE &amp; AFTER
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md group">
              <div className="flex">
                <div className="relative flex-1 overflow-hidden" style={{ height: "220px" }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]}`} />
                  <Image
                    src={card.before}
                    alt="Before transformation"
                    fill
                    sizes="(min-width:768px) 16vw, 45vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = "none" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                    <span className="text-white text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem" }}>Before</span>
                  </div>
                </div>
                <div className="relative flex-1 overflow-hidden" style={{ height: "220px" }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[(i + 1) % 3]}`} />
                  <Image
                    src={card.after}
                    alt="After transformation"
                    fill
                    sizes="(min-width:768px) 16vw, 45vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = "none" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-end justify-between" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                    <span className="text-white text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem" }}>After</span>
                    <span className="text-[#c9a96e] text-xs font-bold" style={{ fontFamily: "Georgia, serif", fontSize: "0.62rem" }}>{card.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   4. MAKEUP BANNER (content left, image right)
══════════════════════════════════════════ */
function MakeupBanner() {
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden lg:flex w-full" style={{ minHeight: "380px" }}>
        <div
          className="w-1/2 flex flex-col justify-center px-14 py-16"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <p
            className="uppercase text-xs tracking-[0.3em] mb-3 font-bold"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", letterSpacing: "0.25em", fontSize: "0.6rem" }}
          >
            GLAM &amp; ARTISTRY
          </p>
          <h3
            className="font-black uppercase leading-tight mb-5"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.05 }}
          >
            MAKEUP THAT
            <br />
            MOVES WITH
            <br />
            YOU.
          </h3>
          <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "Arial, sans-serif", color: "#a89070" }}>
            From everyday glam to special occasion artistry, our makeup artists at Ann&apos;s
            enhance your natural features with premium products and expert technique.
            Because you deserve to feel extraordinary — every single day.
          </p>
          <div className="flex gap-3">
            <Link href="/makeup-clayton" title="Makeup services at Ann's">
              <button className="px-7 py-3 font-black uppercase text-xs tracking-widest border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                EXPLORE MAKEUP
              </button>
            </Link>
            <Link href="/booking" title="Book a makeup appointment">
              <button className="px-7 py-3 font-black uppercase text-xs tracking-widest border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-1/2" style={{ minHeight: "380px" }}>
          <Image
            src="/images/makeup-banner-image.webp"
            alt="Professional makeup artistry at Ann's"
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* MOBILE */}
      <section className="flex lg:hidden flex-col w-full">
        <div className="relative w-full" style={{ height: "65vw", minHeight: "240px" }}>
          <Image src="/images/makeup-banner-image.webp" alt="Professional makeup artistry at Ann's" fill sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="flex flex-col items-center text-center px-8 py-12" style={{ backgroundColor: "#1a1a1a" }}>
          <p className="uppercase text-xs tracking-[0.3em] mb-3 font-bold" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", fontSize: "0.6rem" }}>
            GLAM &amp; ARTISTRY
          </p>
          <h3 className="font-black uppercase leading-tight mb-4 text-white" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.4rem, 6vw, 2rem)", lineHeight: 1.05 }}>
            MAKEUP THAT
            <br />
            MOVES WITH YOU.
          </h3>
          <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: "Arial, sans-serif", color: "#a89070" }}>
            Expert makeup artistry for every occasion — from everyday glam to bridal looks.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/makeup-clayton" title="Makeup services"><button className="px-7 py-3 font-black uppercase text-xs border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>EXPLORE MAKEUP</button></Link>
            <Link href="/booking" title="Book now"><button className="px-7 py-3 font-black uppercase text-xs border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>BOOK NOW</button></Link>
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
        <div className="text-center mb-10">
          <h2
            className="font-black uppercase mb-2"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            OUR GALLERY
          </h2>
          <p className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#9a7a5a" }}>
            REAL LOOKS. HAPPY CLIENTS. GENUINE RESULTS.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${img.grad}`} />
              <Image
                src={img.src}
                alt={`Ann's salon gallery image ${i + 1}`}
                fill
                sizes="(min-width:768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = "none" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/reviews" title="View more from Ann's gallery">
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
   EXPORT
══════════════════════════════════════════ */
export default function HomeSections() {
  return (
    <>
      <MeetOurExperts />
      <HaircutsBanner />
      <BeforeAfter />
      <MakeupBanner />
      <OurGallery />
    </>
  )
}