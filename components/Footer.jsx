// "use client";

// import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
// import { IoLogoGooglePlaystore } from "react-icons/io5";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-black">

//       {/* ── Main Footer Grid ── */}
//       <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

//         {/* Col 1 — TONI&GUY links */}
//         <div>
//           <h3
//             className="text-white font-black uppercase text-lg mb-6"
//             style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
//           >
//             TONI&amp;GUY
//           </h3>
//           <ul className="flex flex-col gap-3">
//             {[
//               "TONI&GUY Shop",
//               "LABEL.M",
//               "Gift Cards & Rewards",
//               "News",
//               "Fashion Week",
//               "Our Story",
//               "Our Charity",
//             ].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   className="text-white text-sm hover:opacity-60 transition-opacity"
//                   style={{ fontFamily: "Arial, sans-serif" }}
//                   dangerouslySetInnerHTML={{ __html: item }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Col 2 — FOLLOW US */}
//         <div>
//           <h3
//             className="text-white font-black uppercase text-lg mb-6"
//             style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
//           >
//             FOLLOW US
//           </h3>
//           <ul className="flex flex-col gap-4">
//             {[
//               { icon: <FaInstagram className="text-xl" />, label: "Instagram" },
//               { icon: <FaFacebookF className="text-xl" />, label: "Facebook" },
//               { icon: <FaYoutube className="text-xl" />, label: "YouTube" },
//               { icon: <FaTiktok className="text-xl" />, label: "TikTok" },
//             ].map(({ icon, label }) => (
//               <li key={label}>
//                 <a
//                   href="#"
//                   className="flex items-center gap-4 text-white text-sm hover:opacity-60 transition-opacity"
//                   style={{ fontFamily: "Arial, sans-serif" }}
//                 >
//                   {icon}
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Col 3 — COMPANY */}
//         <div>
//           <h3
//             className="text-white font-black uppercase text-lg mb-6"
//             style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
//           >
//             COMPANY
//           </h3>
//           <ul className="flex flex-col gap-3">
//             {[
//               "Contact Us",
//               "FAQ's",
//               "Modern Slavery Statement",
//               "Client Policies",
//               "Privacy Policy",
//               "Terms & Conditions",
//               "Franchising",
//               "Refer A Friend",
//               "Cookie Policy",
//             ].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   className="text-white text-sm hover:opacity-60 transition-opacity"
//                   style={{ fontFamily: "Arial, sans-serif" }}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Col 4 — Superbrands badge */}
//         <div className="flex items-start justify-start lg:justify-end">
//           <div className="flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 border-yellow-500 bg-yellow-600 text-center p-3">
//             <p
//               className="text-white font-black uppercase text-xs leading-tight"
//               style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif", fontSize: "0.55rem" }}
//             >
//               Superbrands
//             </p>
//             <p
//               className="text-yellow-200 uppercase text-center leading-tight mt-1"
//               style={{ fontFamily: "Arial, sans-serif", fontSize: "0.42rem", letterSpacing: "0.1em" }}
//             >
//               BRITAIN'S CHOICE
//             </p>
//             <p
//               className="text-white font-bold mt-1"
//               style={{ fontFamily: "Arial, sans-serif", fontSize: "0.5rem" }}
//             >
//               2022/23
//             </p>
//           </div>
//         </div>

//       </div>

//       {/* ── Divider ── */}
//       <div className="border-t border-white/10" />

//       {/* ── App Store Row ── */}
//       <div className="flex items-center justify-center gap-4 py-8 px-8">
//         {/* App Store */}
//         <a
//           href="#"
//           className="flex items-center gap-3 bg-black border border-white text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors group"
//         >
//           <FaApple className="text-2xl group-hover:text-black" />
//           <div className="flex flex-col items-start leading-tight">
//             <span className="text-xs opacity-70 group-hover:opacity-100" style={{ fontFamily: "Arial, sans-serif", fontSize: "0.6rem" }}>
//               Download on the
//             </span>
//             <span className="font-bold text-sm group-hover:text-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
//               App Store
//             </span>
//           </div>
//         </a>

//         {/* Google Play */}
//         <a
//           href="#"
//           className="flex items-center gap-3 bg-black border border-white text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition-colors group"
//         >
//           <IoLogoGooglePlaystore className="text-2xl text-green-400 group-hover:text-green-600" />
//           <div className="flex flex-col items-start leading-tight">
//             <span className="text-xs opacity-70 group-hover:opacity-100" style={{ fontFamily: "Arial, sans-serif", fontSize: "0.6rem" }}>
//               GET IT ON
//             </span>
//             <span className="font-bold text-sm group-hover:text-black" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
//               Google Play
//             </span>
//           </div>
//         </a>
//       </div>

//     </footer>
//   );
// }


"use client";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    label: "Haircuts",
    href: "/haircuts-clayton",
    image: "/images/haircuts/men-fade.webp",
    icon: "/images/haircut-icon-image.webp",
    description: "Precision cuts tailored to your style.",
  },
  {
    label: "Threading",
    href: "/threading-clayton",
    image: "/images/threading/bold.webp",
    icon: "/images/threading-icon-image.webp",
    description: "Clean, defined brow shaping & facial threading.",
  },
  {
    label: "Waxing",
    href: "/waxing-clayton",
    image: "/images/waxing/facial-image.webp",
    icon: "/images/waxing-icon-image.webp",
    description: "Smooth, flawless skin with premium waxing.",
  },
  {
    label: "Makeup",
    href: "/makeup-clayton",
    image: "/images/makeup/glam-evening.webp",
    icon: "/images/makeup-icon-image.webp",
    description: "Professional artistry for a flawless finish.",
  },
];

function Logo() {
  return (
    <Link href="/" className="group inline-block">
      <div className="flex flex-col leading-none select-none">
        {/* Diamond / border box logo */}
        <div className="relative flex items-center justify-center w-40 h-40 mb-4">
          {/* Outer rotated square */}
          <div
            className="absolute inset-0 border border-white/40"
            style={{ transform: "rotate(45deg) scale(0.72)" }}
          />
          {/* Inner rotated square */}
          <div
            className="absolute inset-0 border border-white/20"
            style={{ transform: "rotate(45deg) scale(0.62)" }}
          />
          {/* Text */}
          <div className="relative text-center z-10">
            <p
              className="text-white/40 uppercase tracking-[0.25em]"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "0.45rem" }}
            >
              THE
            </p>
            <p
              className="text-white font-black uppercase"
              style={{
                fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              ANN&apos;S
            </p>
            <p
              className="text-white/50 uppercase tracking-[0.18em]"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "0.42rem" }}
            >
              SALON
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a]">

      {/* ── Main Footer Grid ── */}
      <div className="max-w-[1300px] mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Logo + social + sitemap */}
        <div className="flex flex-col items-start">
          <Logo />

          <p
            className="text-white/50 text-sm leading-relaxed mb-6"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Ann&apos;s is a one-of-a-kind salon that celebrates the beauty and diversity of every client.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mb-6">
            {[
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaYoutube />, label: "YouTube" },
              { icon: <FaGooglePlusG />, label: "Google+" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white/60 text-lg hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
         
        </div>

        {/* Col 2 — Our Services */}
        <div>
          <h3
            className="text-white font-black uppercase text-base mb-6 tracking-widest"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            OUR SERVICES
          </h3>
          <ul className="flex flex-col gap-4">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="flex items-center gap-3 group">
                  {/* Service image thumbnail */}
                  <div className="w-14 h-14 flex-shrink-0 overflow-hidden relative rounded-sm">
                    <Image
                      src={service.image}
                      alt={service.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Text + icon */}
                  <div className="flex items-start gap-2">
                    {/* <Image
                      src={service.icon}
                      alt={`${service.label} icon`}
                      width={18}
                      height={18}
                      className="object-contain mt-0.5 flex-shrink-0 brightness-0 invert opacity-70"
                    /> */}
                    <div>
                      <p
                        className="text-white text-xs font-black uppercase tracking-wide group-hover:opacity-70 transition-opacity"
                        style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
                      >
                        {service.label}
                      </p>
                      <p
                        className="text-white/40 text-[0.65rem] leading-snug mt-0.5"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Our Locations */}
        <div>
          <h3
            className="text-white font-black uppercase text-base mb-6 tracking-widest"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            OUR LOCATIONS
          </h3>

          <div className="flex flex-col gap-6">
            {/* Location 1 */}
            <div>
              <p
                className="text-white/40 uppercase text-[0.6rem] tracking-[0.25em] mb-1"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                CLAYTON
              </p>
              <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                2025 Dandenong Rd<br />
                Clayton VIC 3168
              </p>
              <a
                href="tel:+61390000000"
                className="text-white/50 text-xs hover:text-white transition-colors mt-1 block"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Phone: (03) 9000 0000
              </a>
            </div>

            {/* Location 2 — add more if needed */}
            <div>
              <p
                className="text-white/40 uppercase text-[0.6rem] tracking-[0.25em] mb-1"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                HOURS
              </p>
              <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                Mon–Sat: 9:00 AM – 6:00 PM<br />
                Sun: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Col 4 — Discover */}
        <div>
          <h3
            className="text-white font-black uppercase text-base mb-6 tracking-widest leading-tight"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
          >
            DISCOVER YOUR<br />PERFECT MATCH
          </h3>

          {/* Split pill button */}
          <div className="flex border border-white/30 mb-6 w-fit">
            <span
              className="px-5 py-3 text-white/70 text-sm"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              meet your
            </span>
            <span
              className="px-5 py-3 bg-white text-black font-black text-sm"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              stylist
            </span>
          </div>

          <Link
            href="/booking"
            className="block text-white/50 text-xs uppercase tracking-widest hover:text-white transition-colors mb-8"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            TAKE THE SURVEY »
          </Link>

          {/* Quick links */}
          {/* <div className="flex flex-col gap-2">
            {[
              { label: "Haircuts",  href: "/haircuts-clayton" },
              { label: "Threading", href: "/threading-clayton" },
              { label: "Waxing",    href: "/waxing-clayton" },
              { label: "Makeup",    href: "/makeup-clayton" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white/50 text-xs hover:text-white transition-colors uppercase tracking-widest"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {label}
              </Link>
            ))}
          </div> */}
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/10" />

      {/* ── Bottom bar ── */}
      <div className="max-w-[1300px] mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-white/30 text-xs"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          © {new Date().getFullYear()} Ann&apos;s Haircuts &amp; Beauty Salon. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "Privacy Policy",     href: "/Privacypolicy" },
            { label: "Terms & Conditions", href: "/terms&condition" },
            { label: "Contact",            href: "/contact_us" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
}


// "use client";

// import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-black">

//       {/* ── Main Footer Grid ── */}
//       <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

//         {/* Col 1 — ANN'S links */}
//         <div>
        
//         <Link href={"/"} title="Home page of Ann's haircuts">
//           <h3
//             className="text-white font-black uppercase text-lg mb-2"
//             style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
//           >
//             ANN&apos;S
//           </h3>
//           </Link>
//           <p
//             className="text-white/40 uppercase mb-6"
//             style={{ fontFamily: "Arial, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em" }}
//           >
//             HAIRCUTS &amp; BEAUTY SALON
//           </p>
//           <ul className="flex flex-col gap-3">
//             {[
//               { label: "Haircuts",  href: "/haircuts-clayton" },
//               { label: "Threading", href: "/threading-clayton" },
//               { label: "Waxing",    href: "/waxing-clayton" },
//               { label: "Makeup",    href: "/makeup-clayton" },
//               { label: "Reviews",   href: "/reviews" },
//               { label: "About Us",  href: "/about" },
//               { label: "Contact",   href: "/contact_us" },
//             ].map(({ label, href }) => (
//               <li key={href}>
//                 <Link
//                   href={href}
//                   className="text-white text-sm hover:opacity-60 transition-opacity"
//                   style={{ fontFamily: "Arial, sans-serif" }}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Col 2 — FOLLOW US */}
//         <div>
//           <h3
//             className="text-white font-black uppercase text-lg mb-6"
//             style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
//           >
//             FOLLOW US
//           </h3>
//           <ul className="flex flex-col gap-4">
//             {[
//               { icon: <FaInstagram className="text-xl" />, label: "Instagram", href: "#" },
//               { icon: <FaFacebookF className="text-xl" />, label: "Facebook",  href: "#" },
//               { icon: <FaYoutube className="text-xl" />,   label: "YouTube",   href: "#" },
//               { icon: <FaTiktok className="text-xl" />,    label: "TikTok",    href: "#" },
//             ].map(({ icon, label, href }) => (
//               <li key={label}>
//                 <a
//                   href={href}
//                   className="flex items-center gap-4 text-white text-sm hover:opacity-60 transition-opacity"
//                   style={{ fontFamily: "Arial, sans-serif" }}
//                 >
//                   {icon}
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Col 3 — STUDIO INFO */}
//         <div>
//           <h3
//             className="text-white font-black uppercase text-lg mb-6"
//             style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
//           >
//             STUDIO
//           </h3>
//           <div className="flex flex-col gap-4">
//             <div>
//               <p
//                 className="text-white/40 uppercase mb-1"
//                 style={{ fontFamily: "Arial, sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em" }}
//               >
//                 Address
//               </p>
//               <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
//                 2025 Dandenong Rd<br />
//                 Clayton VIC 3168<br />
//                 Australia
//               </p>
//             </div>
//             <div>
//               <p
//                 className="text-white/40 uppercase mb-1"
//                 style={{ fontFamily: "Arial, sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em" }}
//               >
//                 Hours
//               </p>
//               <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
//                 Mon–Sat: 9:00 AM – 6:00 PM<br />
//                 Sun: 10:00 AM – 4:00 PM
//               </p>
//             </div>
//             <div>
//               <p
//                 className="text-white/40 uppercase mb-1"
//                 style={{ fontFamily: "Arial, sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em" }}
//               >
//                 Booking
//               </p>
//               <Link
//                 href="/booking"
//                 className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b pb-px hover:opacity-70 transition-opacity"
//                 style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", borderColor: "#c9a96e", fontSize: "0.62rem" }}
//               >
//                 Book a Slot →
//               </Link>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* ── Divider ── */}
//       <div className="border-t border-white/10" />

//       {/* ── Bottom bar ── */}
//       <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//         <p
//           className="text-white/30 text-xs"
//           style={{ fontFamily: "Arial, sans-serif" }}
//         >
//           © {new Date().getFullYear()} Ann&apos;s Haircuts &amp; Beauty Salon. All rights reserved.
//         </p>
//         <div className="flex items-center gap-6">
//           {[
//             { label: "Privacy Policy",    href: "/Privacypolicy" },
//             { label: "Terms & Conditions", href: "/terms&condition" },
//             { label: "Contact",            href: "/contact_us" },
//           ].map(({ label, href }) => (
//             <Link
//               key={label}
//               href={href}
//               className="text-white/30 text-xs hover:text-white/60 transition-opacity"
//               style={{ fontFamily: "Arial, sans-serif" }}
//             >
//               {label}
//             </Link>
//           ))}
//         </div>
//       </div>

//     </footer>
//   );
// }