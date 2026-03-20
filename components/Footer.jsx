"use client";

import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full bg-black">

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — TONI&GUY links */}
        <div>
          <h3
            className="text-white font-black uppercase text-lg mb-6"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            TONI&amp;GUY
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "TONI&GUY Shop",
              "LABEL.M",
              "Gift Cards & Rewards",
              "News",
              "Fashion Week",
              "Our Story",
              "Our Charity",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white text-sm hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "Arial, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 — FOLLOW US */}
        <div>
          <h3
            className="text-white font-black uppercase text-lg mb-6"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            FOLLOW US
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              { icon: <FaInstagram className="text-xl" />, label: "Instagram" },
              { icon: <FaFacebookF className="text-xl" />, label: "Facebook" },
              { icon: <FaYoutube className="text-xl" />, label: "YouTube" },
              { icon: <FaTiktok className="text-xl" />, label: "TikTok" },
            ].map(({ icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  className="flex items-center gap-4 text-white text-sm hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {icon}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — COMPANY */}
        <div>
          <h3
            className="text-white font-black uppercase text-lg mb-6"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            COMPANY
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Contact Us",
              "FAQ's",
              "Modern Slavery Statement",
              "Client Policies",
              "Privacy Policy",
              "Terms & Conditions",
              "Franchising",
              "Refer A Friend",
              "Cookie Policy",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white text-sm hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Superbrands badge */}
        <div className="flex items-start justify-start lg:justify-end">
          <div className="flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 border-yellow-500 bg-yellow-600 text-center p-3">
            <p
              className="text-white font-black uppercase text-xs leading-tight"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif", fontSize: "0.55rem" }}
            >
              Superbrands
            </p>
            <p
              className="text-yellow-200 uppercase text-center leading-tight mt-1"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "0.42rem", letterSpacing: "0.1em" }}
            >
              BRITAIN'S CHOICE
            </p>
            <p
              className="text-white font-bold mt-1"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "0.5rem" }}
            >
              2022/23
            </p>
          </div>
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/10" />

      {/* ── App Store Row ── */}
      <div className="flex items-center justify-center gap-4 py-8 px-8">
        {/* App Store */}
        <a
          href="#"
          className="flex items-center gap-3 bg-black border border-white text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors group"
        >
          <FaApple className="text-2xl group-hover:text-black" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs opacity-70 group-hover:opacity-100" style={{ fontFamily: "Arial, sans-serif", fontSize: "0.6rem" }}>
              Download on the
            </span>
            <span className="font-bold text-sm group-hover:text-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              App Store
            </span>
          </div>
        </a>

        {/* Google Play */}
        <a
          href="#"
          className="flex items-center gap-3 bg-black border border-white text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors group"
        >
          <IoLogoGooglePlaystore className="text-2xl text-green-400 group-hover:text-green-600" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs opacity-70 group-hover:opacity-100" style={{ fontFamily: "Arial, sans-serif", fontSize: "0.6rem" }}>
              GET IT ON
            </span>
            <span className="font-bold text-sm group-hover:text-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              Google Play
            </span>
          </div>
        </a>
      </div>

    </footer>
  );
}