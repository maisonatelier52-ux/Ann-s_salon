

// "use client";

// import { useState } from "react";
// import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
// import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
// import Link from "next/link";

// const navLinks = [
//   {
//     name : "HAIRCUTS",
//     href : "/haircuts-clayton"
//   },
//   {
//     name : "THREADING",
//     href : "/threading-clayton"
//   },
//   {
//     name : "WAXING",
//     href : "/waxing-clayton"
//   },
//    {
//     name : "MAKEUP",
//     href : "/makeup-clayton"
//   },
//   {
//     name : "REVIEWS",
//     href : "/reviews"
//   },
 
//    {
//     name : "ABOUT",
//     href : "/about"
//   },
//    {
//     name : "CONTACT",
//     href : "/contact_us"
//   },
// ];

// /* ── Reusable Logo ────────────────────────────────────────────── */
// function Logo() {
//   return (
//     <Link href={"/"}>
//     <div className="flex items-center gap-2">
//       <span
//         className="text-black font-black tracking-tight leading-none select-none"
//         style={{
//           fontSize: "clamp(1.6rem, 4vw, 4.6rem)",
//           fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
//           letterSpacing: "-0.13em",
//         }}
//       >
//         {/* TONI&amp;GUY */}
//         ANN&apos;S
//       </span>

//       {/* OFFICIAL PARTNER — vertical, bottom to top */}
//       <span
//         className="text-black font-semibold uppercase select-none text-[0.17rem] lg:text-[0.25rem]"
//         style={{
//           writingMode: "vertical-rl",
//           transform: "rotate(180deg)",
//           whiteSpace: "nowrap",
//         }}
//       >
//         OFFICIAL PARTNER
//       </span>

//       {/* LONDON FASHION WEEK */}
//       <div className="flex flex-col items-start leading-none">
//         <span
//           className="text-black font-black uppercase"
//           style={{
//             fontSize: "clamp(0.5rem, 1.2vw, 0.75rem)",
//             fontFamily:"'Arial Black', 'Arial Bold', Arial, sans-serif",
//             letterSpacing: "-0.04em",
//             lineHeight: 0.80,
//           }}
//         >
//           HAIRCUTS &
//           <br />
//           BEAUTY
//           <br />
//           SALOON
//         </span>
//       </div>
//     </div></Link>
//   );
// }

// /* ── Main Header ──────────────────────────────────────────────── */
// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="w-full border-b border-gray-200 bg-white">
//         <div className="flex items-center justify-between px-5 py-3">

//           {/* Col 1 — hamburger, desktop only */}
//           <div className="hidden lg:flex items-center w-1/4">
//             <button
//               onClick={() => setMenuOpen(true)}
//               aria-label="Open menu"
//               className="text-2xl text-black hover:opacity-70 transition-opacity cursor-pointer"
//             >
//               <RxHamburgerMenu />
//             </button>
//           </div>

//           {/* Col 2 — logo: centered on desktop, left on mobile/tablet */}
//           <div className="flex lg:justify-center lg:w-1/2">
//             <Logo />
//           </div>

//           {/* Col 3 — CTA buttons, desktop only */}
//           <div className="hidden lg:flex items-center justify-end gap-2 w-1/4">
//             <Link href="/booking">
//             <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
//               BOOK A SLOT
//             </button></Link>
//             <Link href={"/contact_us"}>
//             <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
//               CONTACT US
//             </button></Link>
//           </div>

//           {/* Hamburger — mobile/tablet only, right side */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             aria-label="Open menu"
//             className="flex lg:hidden text-2xl text-black hover:opacity-70 transition-opacity"
//           >
//             <RxHamburgerMenu />
//           </button>

//         </div>
//       </header>

//       {/* ── OVERLAY MENU ───────────────────────────────────────── */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col">

//           {/* Top bar */}
//           <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">

//             {/* Desktop: X on left */}
//             <button
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//               className="hidden lg:flex text-2xl text-black hover:opacity-70 transition-opacity cursor-pointer"
//             >
//               <RxCross2 />
//             </button>

//             {/* Logo — left on mobile, centered on desktop */}
//             <div className="flex lg:justify-center lg:flex-1">
//               <Logo />
//             </div>

//             {/* Desktop: CTA buttons */}
//             <div className="hidden lg:flex items-center gap-2">
//               <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
//                 BOOK A SLOT
//               </button>
//               <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
//                 CONTACT US
//               </button>
//             </div>

//             {/* Mobile/tablet: X on right */}
//             <button
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//               className="flex lg:hidden text-2xl text-black hover:opacity-70 transition-opacity"
//             >
//               <RxCross2 />
//             </button>

//           </div>

//           {/* Nav links */}
//           <nav className="flex flex-col items-center justify-center flex-1 gap-1 py-6 overflow-y-auto">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="text-black font-black uppercase text-3xl md:text-4xl tracking-tight hover:opacity-60 transition-opacity py-1"
//                 style={{
//                   fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
//                   letterSpacing: "-0.01em",
//                 }}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* Social icons — mobile/tablet overlay only */}
//           <div className="flex lg:hidden items-center justify-center gap-8 py-6 border-t border-gray-200">
//             <a href="#" aria-label="Instagram" className="text-black text-2xl hover:opacity-60 transition-opacity">
//               <FaInstagram />
//             </a>
//             <a href="#" aria-label="Facebook" className="text-black text-2xl hover:opacity-60 transition-opacity">
//               <FaFacebookF />
//             </a>
//             <a href="#" aria-label="YouTube" className="text-black text-2xl hover:opacity-60 transition-opacity">
//               <FaYoutube />
//             </a>
//             <a href="#" aria-label="TikTok" className="text-black text-2xl hover:opacity-60 transition-opacity">
//               <FaTiktok />
//             </a>
//           </div>

//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const leftLinks = [
  { name: "HAIRCUTS",  href: "/haircuts-clayton" },
  { name: "THREADING", href: "/threading-clayton" },
  { name: "WAXING",   href: "/waxing-clayton" },
  { name: "MAKEUP",   href: "/makeup-clayton" },
];

const rightLinks = [

  { name: "ABOUT",     href: "/about" },
  { name: "REVIEWS",  href: "/reviews" },
  { name: "CONTACT",  href: "/contact_us" },
  { name: "BOOK NOW", href: "/booking" },
];

const allLinks = [...leftLinks, ...rightLinks];

function Logo({ light = true }) {
  return (
    <Link href="/" className="flex flex-col items-center leading-none select-none group">
      <span
        className={`font-black tracking-tight transition-opacity group-hover:opacity-70 ${light ? "text-white" : "text-black"}`}
        style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
          letterSpacing: "-0.08em",
          border: `2px solid ${light ? "white" : "black"}`,
          padding: "4px 14px 2px",
          lineHeight: 1.1,
        }}
      >
        ANN&apos;S
      </span>
      <span
        className={`uppercase tracking-[0.22em] mt-1 ${light ? "text-white/70" : "text-black/60"}`}
        style={{ fontSize: "0.45rem", fontFamily: "Arial, sans-serif" }}
      >
        HAIRCUTS &amp; BEAUTY SALON
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = isHome
    ? scrolled
      ? "bg-[#1a1a1a] shadow-lg"
      : "bg-transparent"
    : "bg-[#1a1a1a] shadow-lg";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT NAV — desktop only */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[0.68rem] font-bold uppercase tracking-[0.18em] hover:opacity-60 transition-opacity whitespace-nowrap"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CENTER — Logo */}
          <div className="flex justify-center lg:flex-none">
            <Logo light={true} />
          </div>

          {/* RIGHT NAV — desktop only */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {rightLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[0.68rem] font-bold uppercase tracking-[0.18em] hover:opacity-60 transition-opacity whitespace-nowrap"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/booking">
              <button
                className="text-white text-[0.68rem] font-black uppercase tracking-[0.18em] border border-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-200 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
              >
                BOOK NOW
              </button>
            </Link>
          </nav>

          {/* HAMBURGER — mobile/tablet */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden text-white text-2xl hover:opacity-70 transition-opacity ml-auto"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-50 bg-black flex flex-col transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Logo light={true} />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white text-2xl hover:opacity-70 transition-opacity"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-2 py-8 overflow-y-auto">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-black uppercase text-3xl tracking-tight hover:opacity-50 transition-opacity py-2"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif", letterSpacing: "-0.01em" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-8 py-6 border-t border-white/10">
          {[
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaFacebookF />, label: "Facebook" },
            { icon: <FaYoutube />, label: "YouTube" },
            { icon: <FaTiktok />, label: "TikTok" },
          ].map(({ icon, label }) => (
            <a key={label} href="#" aria-label={label} className="text-white text-2xl hover:opacity-60 transition-opacity">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

// "use client";

// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="w-full bg-[#ede8e2] border-b border-gray-300">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-tight text-black">
//           ANN’S
//         </div>

//         {/* Nav */}
//         <nav className="hidden lg:flex items-center gap-8 text-sm text-black">
//           <Link href="/" className="hover:opacity-70">Home</Link>
//           <Link href="/services" className="hover:opacity-70">Services</Link>
//           <Link href="/gallery" className="hover:opacity-70">Gallery</Link>
//           <Link href="/about" className="hover:opacity-70">About</Link>
//           <Link href="/contact_us" className="hover:opacity-70">Contact</Link>
//         </nav>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-3">
//           <Link href="/booking">
//             <button className="bg-[#9a7a5a] text-white text-xs px-4 py-2 uppercase tracking-wider">
//               Book Now
//             </button>
//           </Link>

//           <Link href="/contact_us">
//             <button className="border border-black text-xs px-4 py-2 uppercase tracking-wider text-black">
//               Call
//             </button>
//           </Link>
//         </div>

//       </div>
//     </header>
//   );
// }