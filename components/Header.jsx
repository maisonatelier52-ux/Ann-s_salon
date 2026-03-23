

"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  {
    name : "HAIRCUTS",
    href : "/haircuts-clayton"
  },
  {
    name : "THREADING",
    href : "/threading-clayton"
  },
  {
    name : "WAXING",
    href : "/waxing-clayton"
  },
   {
    name : "MAKEUP",
    href : "/makeup-clayton"
  },
  {
    name : "REVIEWS",
    href : "/reviews"
  },
 
   {
    name : "ABOUT",
    href : "/about"
  },
   {
    name : "CONTACT",
    href : "/contact_us"
  },
];

/* ── Reusable Logo ────────────────────────────────────────────── */
function Logo() {
  return (
    <Link href={"/"}>
    <div className="flex items-center gap-2">
      <span
        className="text-black font-black tracking-tight leading-none select-none"
        style={{
          fontSize: "clamp(1.6rem, 4vw, 4.6rem)",
          fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
          letterSpacing: "-0.13em",
        }}
      >
        {/* TONI&amp;GUY */}
        ANN'S
      </span>

      {/* OFFICIAL PARTNER — vertical, bottom to top */}
      <span
        className="text-black font-semibold uppercase select-none text-[0.17rem] lg:text-[0.25rem]"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          whiteSpace: "nowrap",
        }}
      >
        OFFICIAL PARTNER
      </span>

      {/* LONDON FASHION WEEK */}
      <div className="flex flex-col items-start leading-none">
        <span
          className="text-black font-black uppercase"
          style={{
            fontSize: "clamp(0.5rem, 1.2vw, 0.75rem)",
            fontFamily:"'Arial Black', 'Arial Bold', Arial, sans-serif",
            letterSpacing: "-0.04em",
            lineHeight: 0.80,
          }}
        >
          HAIRCUTS &
          <br />
          BEAUTY
          <br />
          SALOON
        </span>
      </div>
    </div></Link>
  );
}

/* ── Main Header ──────────────────────────────────────────────── */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-5 py-3">

          {/* Col 1 — hamburger, desktop only */}
          <div className="hidden lg:flex items-center w-1/4">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="text-2xl text-black hover:opacity-70 transition-opacity cursor-pointer"
            >
              <RxHamburgerMenu />
            </button>
          </div>

          {/* Col 2 — logo: centered on desktop, left on mobile/tablet */}
          <div className="flex lg:justify-center lg:w-1/2">
            <Logo />
          </div>

          {/* Col 3 — CTA buttons, desktop only */}
          <div className="hidden lg:flex items-center justify-end gap-2 w-1/4">
            <Link href="/booking">
            <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              BOOK A SLOT
            </button></Link>
            <Link href={"/contact_us"}>
            <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              CONTACT US
            </button></Link>
          </div>

          {/* Hamburger — mobile/tablet only, right side */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex lg:hidden text-2xl text-black hover:opacity-70 transition-opacity"
          >
            <RxHamburgerMenu />
          </button>

        </div>
      </header>

      {/* ── OVERLAY MENU ───────────────────────────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col">

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">

            {/* Desktop: X on left */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="hidden lg:flex text-2xl text-black hover:opacity-70 transition-opacity cursor-pointer"
            >
              <RxCross2 />
            </button>

            {/* Logo — left on mobile, centered on desktop */}
            <div className="flex lg:justify-center lg:flex-1">
              <Logo />
            </div>

            {/* Desktop: CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                BOOK A SLOT
              </button>
              <button className="border-2 border-black text-black font-black text-xs px-4 py-2 uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                CONTACT US
              </button>
            </div>

            {/* Mobile/tablet: X on right */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex lg:hidden text-2xl text-black hover:opacity-70 transition-opacity"
            >
              <RxCross2 />
            </button>

          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-1 py-6 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-black font-black uppercase text-3xl md:text-4xl tracking-tight hover:opacity-60 transition-opacity py-1"
                style={{
                  fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social icons — mobile/tablet overlay only */}
          <div className="flex lg:hidden items-center justify-center gap-8 py-6 border-t border-gray-200">
            <a href="#" aria-label="Instagram" className="text-black text-2xl hover:opacity-60 transition-opacity">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="text-black text-2xl hover:opacity-60 transition-opacity">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube" className="text-black text-2xl hover:opacity-60 transition-opacity">
              <FaYoutube />
            </a>
            <a href="#" aria-label="TikTok" className="text-black text-2xl hover:opacity-60 transition-opacity">
              <FaTiktok />
            </a>
          </div>

        </div>
      )}
    </>
  );
}