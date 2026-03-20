// "use client";

// import { useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// /* ── Data ── */
// const services = [
//   {
//     id: "haircut",
//     label: "Haircut",
//     desc: "Men's, Women's & Kids'",
//     duration: "30–45 min",
//     icon: "✂",
//     color: "#c9a96e",
//   },
//   {
//     id: "threading",
//     label: "Threading",
//     desc: "Brows, Upper Lip & Face",
//     duration: "15–30 min",
//     icon: "✦",
//     color: "#8b6d50",
//   },
//   {
//     id: "waxing",
//     label: "Waxing",
//     desc: "Facial & Body Waxing",
//     duration: "20–45 min",
//     icon: "◈",
//     color: "#b48c8c",
//   },
//   {
//     id: "makeup",
//     label: "Makeup",
//     desc: "Natural to Glam Looks",
//     duration: "45–75 min",
//     icon: "◆",
//     color: "#c9a96e",
//   },
// ];

// const addons = [
//   { id: "beard", label: "Beard Trim", note: "Add-on with haircut" },
//   { id: "brows", label: "Brow Mapping", note: "Consultation included" },
//   { id: "skinprep", label: "Skin Prep", note: "For makeup bookings" },
// ];

// const timeSlots = [
//   "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
//   "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
//   "01:00 PM", "02:00 PM", "02:30 PM", "03:00 PM",
//   "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM",
//   "05:30 PM", "06:00 PM",
// ];

// const steps = ["Service", "Date & Time", "Your Details", "Confirm"];

// /* ── Step indicator ── */
// function StepBar({ current }) {
//   return (
//     <div className="flex items-center gap-0 w-full max-w-2xl mx-auto mb-16">
//       {steps.map((s, i) => (
//         <div key={s} className="flex items-center flex-1">
//           <div className="flex flex-col items-center gap-2 flex-shrink-0">
//             <div
//               className="w-8 h-8 flex items-center justify-center font-black text-xs transition-all duration-300"
//               style={{
//                 fontFamily: "'Arial Black', Arial, sans-serif",
//                 backgroundColor: i < current ? "#c9a96e" : i === current ? "#0a0808" : "transparent",
//                 color: i < current ? "#000" : i === current ? "#c9a96e" : "#999",
//                 border: i < current ? "2px solid #c9a96e" : i === current ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.15)",
//               }}
//             >
//               {i < current ? "✓" : i + 1}
//             </div>
//             <span
//               className="text-xs uppercase tracking-widest hidden sm:block"
//               style={{
//                 fontFamily: "'Arial Black', Arial, sans-serif",
//                 fontSize: "0.55rem",
//                 color: i === current ? "#0a0808" : "#bbb",
//                 letterSpacing: "0.15em",
//               }}
//             >
//               {s}
//             </span>
//           </div>
//           {i < steps.length - 1 && (
//             <div
//               className="flex-1 h-px mx-2 transition-all duration-500"
//               style={{ backgroundColor: i < current ? "#c9a96e" : "rgba(0,0,0,0.1)" }}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// /* ══════════════════════════════════════════
//    PAGE
// ══════════════════════════════════════════ */
// export default function BookingPage() {
//   const [step, setStep] = useState(0);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedAddons, setSelectedAddons] = useState([]);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const toggleAddon = (id) => {
//     setSelectedAddons((prev) =>
//       prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
//     );
//   };

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
//     setSubmitError("");
//     try {
//       const res = await fetch("/api/booking", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           service: serviceData?.label,
//           duration: serviceData?.duration,
//           date: selectedDate,
//           time: selectedTime,
//           name: form.name,
//           phone: form.phone,
//           email: form.email,
//           addons: selectedAddons,
//           notes: form.notes,
//         }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setSubmitted(true);
//       } else {
//         setSubmitError("Something went wrong. Please try again or call us directly.");
//       }
//     } catch (err) {
//       setSubmitError("Network error. Please check your connection and try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   /* ── Get tomorrow's date as min ── */
//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   const minDate = tomorrow.toISOString().split("T")[0];

//   const serviceData = services.find((s) => s.id === selectedService);

//   /* ══ CONFIRMATION SCREEN ══════════════════ */
//   if (submitted) {
//     return (
//       <div style={{ backgroundColor: "#f8f7f5", minHeight: "100vh" }}>
//         <Header />
//         <section className="w-full flex flex-col items-center justify-center px-8 py-32 text-center" style={{ minHeight: "80vh" }}>
//           <div
//             className="w-20 h-20 flex items-center justify-center mb-8 text-3xl"
//             style={{ backgroundColor: "#c9a96e" }}
//           >
//             ✓
//           </div>
//           <h1
//             className="uppercase leading-none mb-6"
//             style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.9, color: "#0a0808" }}
//           >
//             REQUEST
//             <br />
//             <span style={{ color: "#c9a96e" }}>SENT.</span>
//           </h1>
//           <p className="text-base leading-relaxed max-w-md mb-4" style={{ fontFamily: "Georgia, serif", color: "#666" }}>
//             Thanks <strong style={{ color: "#0a0808" }}>{form.name}</strong> — we've received your booking request for{" "}
//             <strong style={{ color: "#0a0808" }}>{serviceData?.label}</strong> on{" "}
//             <strong style={{ color: "#0a0808" }}>{selectedDate}</strong> at{" "}
//             <strong style={{ color: "#0a0808" }}>{selectedTime}</strong>.
//           </p>
//           <p className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#999" }}>
//             We'll confirm your slot via SMS or email shortly.
//           </p>
//           <div className="flex gap-4 mt-12 flex-wrap justify-center">
//             <a
//               href="/"
//               className="px-8 py-4 font-black uppercase text-xs tracking-widest"
//               style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif" }}
//             >
//               Back to Home
//             </a>
//             <button
//               onClick={() => { setSubmitted(false); setStep(0); setSelectedService(null); setSelectedDate(""); setSelectedTime(""); setForm({ name: "", phone: "", email: "", notes: "" }); setSelectedAddons([]); }}
//               className="px-8 py-4 font-black uppercase text-xs tracking-widest border"
//               style={{ borderColor: "rgba(0,0,0,0.2)", color: "#0a0808", fontFamily: "'Arial Black', Arial, sans-serif" }}
//             >
//               Book Another
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div style={{ backgroundColor: "#f8f7f5", minHeight: "100vh" }}>
//       <Header />

//       {/* ══ HERO STRIP ════════════════════════ */}
//       <section
//         className="relative w-full overflow-hidden"
//         style={{ backgroundColor: "#0a0808", minHeight: "260px" }}
//       >
//         {/* Gold grid */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         {/* Ghost watermark */}
//         <div
//           className="absolute select-none pointer-events-none"
//           style={{
//             fontFamily: "'Arial Black', Arial, sans-serif",
//             fontSize: "clamp(5rem, 18vw, 18rem)",
//             fontWeight: 900,
//             color: "transparent",
//             WebkitTextStroke: "1px rgba(201,169,110,0.05)",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%,-50%)",
//             whiteSpace: "nowrap",
//             letterSpacing: "-0.05em",
//             lineHeight: 1,
//           }}
//         >
//           BOOK
//         </div>

//         <div className="relative z-10 px-8 lg:px-20 py-16">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
//             <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
//               Private Studio · Dahisar East, Mumbai
//             </span>
//           </div>
//           <h1
//             className="text-white uppercase leading-none"
//             style={{
//               fontFamily: "'Arial Black', Arial, sans-serif",
//               fontSize: "clamp(2.5rem, 8vw, 6rem)",
//               letterSpacing: "-0.04em",
//               lineHeight: 0.9,
//             }}
//           >
//             BOOK A<br />
//             <span style={{ color: "#c9a96e" }}>SLOT.</span>
//           </h1>
//         </div>
//       </section>

//       {/* ══ MAIN FORM AREA ════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#f8f7f5" }}>
//         <div className="max-w-4xl mx-auto px-8 lg:px-20 py-20">
//           <StepBar current={step} />

//           {/* ── STEP 0: Choose Service ── */}
//           {step === 0 && (
//             <div>
//               <div className="mb-12">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//                   <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 1 of 4</span>
//                 </div>
//                 <h2
//                   className="font-black uppercase leading-none"
//                   style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
//                 >
//                   CHOOSE YOUR
//                   <br /><span style={{ color: "#c9a96e" }}>SERVICE.</span>
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
//                 {services.map((s) => (
//                   <button
//                     key={s.id}
//                     onClick={() => setSelectedService(s.id)}
//                     className="group relative flex flex-col gap-4 p-7 text-left transition-all duration-200"
//                     style={{
//                       backgroundColor: selectedService === s.id ? "#0a0808" : "#fff",
//                       border: selectedService === s.id ? `2px solid ${s.color}` : "2px solid rgba(0,0,0,0.08)",
//                       transform: selectedService === s.id ? "scale(1.01)" : "scale(1)",
//                     }}
//                   >
//                     <div className="flex items-start justify-between">
//                       <span
//                         className="text-3xl transition-colors"
//                         style={{ color: selectedService === s.id ? s.color : "#ccc" }}
//                       >
//                         {s.icon}
//                       </span>
//                       {selectedService === s.id && (
//                         <div className="w-5 h-5 flex items-center justify-center text-xs font-black" style={{ backgroundColor: s.color, color: "#000" }}>✓</div>
//                       )}
//                     </div>
//                     <div>
//                       <h3
//                         className="font-black uppercase text-xl leading-tight mb-1"
//                         style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em", color: selectedService === s.id ? "#fff" : "#0a0808" }}
//                       >
//                         {s.label}
//                       </h3>
//                       <p className="text-sm mb-2" style={{ fontFamily: "Georgia, serif", color: selectedService === s.id ? "#a89070" : "#888" }}>
//                         {s.desc}
//                       </p>
//                       <span
//                         className="text-xs uppercase tracking-widest"
//                         style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem", color: s.color }}
//                       >
//                         ⏱ {s.duration}
//                       </span>
//                     </div>
//                   </button>
//                 ))}
//               </div>

//               {/* Add-ons */}
//               <div className="mb-10">
//                 <p className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#999", letterSpacing: "0.15em" }}>
//                   Optional Add-ons
//                 </p>
//                 <div className="flex flex-col gap-2">
//                   {addons.map((a) => (
//                     <button
//                       key={a.id}
//                       onClick={() => toggleAddon(a.id)}
//                       className="flex items-center justify-between px-6 py-4 text-left transition-all"
//                       style={{
//                         backgroundColor: selectedAddons.includes(a.id) ? "#0a0808" : "#fff",
//                         border: selectedAddons.includes(a.id) ? "2px solid #c9a96e" : "2px solid rgba(0,0,0,0.08)",
//                       }}
//                     >
//                       <div>
//                         <span
//                           className="font-black uppercase text-sm"
//                           style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: selectedAddons.includes(a.id) ? "#c9a96e" : "#0a0808", letterSpacing: "0.05em" }}
//                         >
//                           {a.label}
//                         </span>
//                         <span className="ml-3 text-xs" style={{ fontFamily: "Georgia, serif", color: "#999" }}>{a.note}</span>
//                       </div>
//                       <div
//                         className="w-5 h-5 flex items-center justify-center text-xs font-black"
//                         style={{
//                           backgroundColor: selectedAddons.includes(a.id) ? "#c9a96e" : "transparent",
//                           border: selectedAddons.includes(a.id) ? "2px solid #c9a96e" : "2px solid rgba(0,0,0,0.15)",
//                           color: "#000",
//                         }}
//                       >
//                         {selectedAddons.includes(a.id) ? "✓" : ""}
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={() => selectedService && setStep(1)}
//                 className="w-full flex items-center justify-between px-10 py-6 font-black uppercase text-base tracking-widest transition-all"
//                 style={{
//                   backgroundColor: selectedService ? "#0a0808" : "rgba(0,0,0,0.1)",
//                   color: selectedService ? "#c9a96e" : "#bbb",
//                   fontFamily: "'Arial Black', Arial, sans-serif",
//                   letterSpacing: "0.12em",
//                   cursor: selectedService ? "pointer" : "not-allowed",
//                 }}
//               >
//                 <span>Next — Date &amp; Time</span>
//                 <span className="text-2xl">→</span>
//               </button>
//             </div>
//           )}

//           {/* ── STEP 1: Date & Time ── */}
//           {step === 1 && (
//             <div>
//               <div className="mb-12">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//                   <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 2 of 4</span>
//                 </div>
//                 <h2
//                   className="font-black uppercase leading-none"
//                   style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
//                 >
//                   PICK YOUR
//                   <br /><span style={{ color: "#c9a96e" }}>DATE & TIME.</span>
//                 </h2>
//                 {serviceData && (
//                   <div className="flex items-center gap-3 mt-5">
//                     <div className="h-px w-6" style={{ backgroundColor: "#c9a96e" }} />
//                     <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#888" }}>
//                       {serviceData.label} · {serviceData.duration}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {/* Date picker */}
//               <div className="mb-10">
//                 <label
//                   className="block text-xs uppercase tracking-widest mb-3"
//                   style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}
//                 >
//                   Preferred Date
//                 </label>
//                 <input
//                   type="date"
//                   min={minDate}
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="w-full px-6 py-4 text-sm focus:outline-none transition-all"
//                   style={{
//                     fontFamily: "Georgia, serif",
//                     backgroundColor: "#fff",
//                     border: selectedDate ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.12)",
//                     color: "#0a0808",
//                   }}
//                 />
//               </div>

//               {/* Time slots */}
//               <div className="mb-10">
//                 <label
//                   className="block text-xs uppercase tracking-widest mb-4"
//                   style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}
//                 >
//                   Preferred Time
//                 </label>
//                 <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
//                   {timeSlots.map((t) => (
//                     <button
//                       key={t}
//                       onClick={() => setSelectedTime(t)}
//                       className="px-3 py-3 text-xs font-black uppercase tracking-wider transition-all"
//                       style={{
//                         fontFamily: "'Arial Black', Arial, sans-serif",
//                         backgroundColor: selectedTime === t ? "#0a0808" : "#fff",
//                         color: selectedTime === t ? "#c9a96e" : "#666",
//                         border: selectedTime === t ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.08)",
//                         fontSize: "0.62rem",
//                       }}
//                     >
//                       {t}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setStep(0)}
//                   className="flex items-center gap-2 px-8 py-5 font-black uppercase text-xs tracking-widest border"
//                   style={{ borderColor: "rgba(0,0,0,0.15)", color: "#666", fontFamily: "'Arial Black', Arial, sans-serif" }}
//                 >
//                   ← Back
//                 </button>
//                 <button
//                   onClick={() => selectedDate && selectedTime && setStep(2)}
//                   className="flex-1 flex items-center justify-between px-10 py-5 font-black uppercase text-base tracking-widest transition-all"
//                   style={{
//                     backgroundColor: selectedDate && selectedTime ? "#0a0808" : "rgba(0,0,0,0.1)",
//                     color: selectedDate && selectedTime ? "#c9a96e" : "#bbb",
//                     fontFamily: "'Arial Black', Arial, sans-serif",
//                     cursor: selectedDate && selectedTime ? "pointer" : "not-allowed",
//                   }}
//                 >
//                   <span>Next — Your Details</span>
//                   <span className="text-2xl">→</span>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ── STEP 2: Details ── */}
//           {step === 2 && (
//             <div>
//               <div className="mb-12">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//                   <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 3 of 4</span>
//                 </div>
//                 <h2
//                   className="font-black uppercase leading-none"
//                   style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
//                 >
//                   YOUR
//                   <br /><span style={{ color: "#c9a96e" }}>DETAILS.</span>
//                 </h2>
//               </div>

//               <div className="flex flex-col gap-4 mb-10">
//                 {[
//                   { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
//                   { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
//                   { key: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
//                 ].map((f) => (
//                   <div key={f.key}>
//                     <label
//                       className="block text-xs uppercase tracking-widest mb-2"
//                       style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}
//                     >
//                       {f.label}
//                     </label>
//                     <input
//                       type={f.type}
//                       placeholder={f.placeholder}
//                       value={form[f.key]}
//                       onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
//                       className="w-full px-6 py-4 text-sm focus:outline-none transition-all"
//                       style={{
//                         fontFamily: "Georgia, serif",
//                         backgroundColor: "#fff",
//                         border: form[f.key] ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.12)",
//                         color: "#0a0808",
//                       }}
//                     />
//                   </div>
//                 ))}

//                 <div>
//                   <label
//                     className="block text-xs uppercase tracking-widest mb-2"
//                     style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}
//                   >
//                     Notes <span style={{ color: "#bbb", fontWeight: 400 }}>(optional)</span>
//                   </label>
//                   <textarea
//                     placeholder="Anything we should know? Inspiration, outfit colour, specific requests..."
//                     value={form.notes}
//                     onChange={(e) => setForm({ ...form, notes: e.target.value })}
//                     rows={4}
//                     className="w-full px-6 py-4 text-sm focus:outline-none transition-all resize-none"
//                     style={{
//                       fontFamily: "Georgia, serif",
//                       backgroundColor: "#fff",
//                       border: "2px solid rgba(0,0,0,0.12)",
//                       color: "#0a0808",
//                     }}
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setStep(1)}
//                   className="flex items-center gap-2 px-8 py-5 font-black uppercase text-xs tracking-widest border"
//                   style={{ borderColor: "rgba(0,0,0,0.15)", color: "#666", fontFamily: "'Arial Black', Arial, sans-serif" }}
//                 >
//                   ← Back
//                 </button>
//                 <button
//                   onClick={() => form.name && form.phone && setStep(3)}
//                   className="flex-1 flex items-center justify-between px-10 py-5 font-black uppercase text-base tracking-widest transition-all"
//                   style={{
//                     backgroundColor: form.name && form.phone ? "#0a0808" : "rgba(0,0,0,0.1)",
//                     color: form.name && form.phone ? "#c9a96e" : "#bbb",
//                     fontFamily: "'Arial Black', Arial, sans-serif",
//                     cursor: form.name && form.phone ? "pointer" : "not-allowed",
//                   }}
//                 >
//                   <span>Next — Review &amp; Confirm</span>
//                   <span className="text-2xl">→</span>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ── STEP 3: Confirm ── */}
//           {step === 3 && (
//             <div>
//               <div className="mb-12">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
//                   <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 4 of 4</span>
//                 </div>
//                 <h2
//                   className="font-black uppercase leading-none"
//                   style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
//                 >
//                   CONFIRM
//                   <br /><span style={{ color: "#c9a96e" }}>YOUR SLOT.</span>
//                 </h2>
//               </div>

//               {/* Summary card */}
//               <div
//                 className="mb-10 p-8"
//                 style={{ backgroundColor: "#0a0808", border: "2px solid rgba(201,169,110,0.2)" }}
//               >
//                 <p className="text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", letterSpacing: "0.2em" }}>
//                   Booking Summary
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {[
//                     { label: "Service", value: serviceData?.label },
//                     { label: "Duration", value: serviceData?.duration },
//                     { label: "Date", value: selectedDate },
//                     { label: "Time", value: selectedTime },
//                     { label: "Name", value: form.name },
//                     { label: "Phone", value: form.phone },
//                     ...(form.email ? [{ label: "Email", value: form.email }] : []),
//                     ...(selectedAddons.length > 0 ? [{ label: "Add-ons", value: selectedAddons.join(", ") }] : []),
//                     ...(form.notes ? [{ label: "Notes", value: form.notes }] : []),
//                   ].map((item) => (
//                     <div key={item.label}>
//                       <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.55rem", color: "#666", letterSpacing: "0.18em" }}>
//                         {item.label}
//                       </p>
//                       <p className="text-sm font-bold" style={{ fontFamily: "Georgia, serif", color: "#fff" }}>
//                         {item.value}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}>
//                   <p className="text-xs italic" style={{ fontFamily: "Georgia, serif", color: "#666" }}>
//                     We'll confirm your appointment via SMS or email. Appointment-only — private, single-seat studio.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setStep(2)}
//                   className="flex items-center gap-2 px-8 py-5 font-black uppercase text-xs tracking-widest border"
//                   style={{ borderColor: "rgba(0,0,0,0.15)", color: "#666", fontFamily: "'Arial Black', Arial, sans-serif" }}
//                 >
//                   ← Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="flex-1 flex items-center justify-between px-10 py-6 font-black uppercase text-base tracking-widest transition-all hover:brightness-110 hover:scale-[1.01]"
//                   style={{ backgroundColor: isSubmitting ? "#a88a50" : "#c9a96e", color: "#000", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em", cursor: isSubmitting ? "not-allowed" : "pointer" }}
//                 >
//                   <span>{isSubmitting ? "Sending..." : "Confirm Booking"}</span>
//                   <span className="text-2xl">{isSubmitting ? "⏳" : "→"}</span>
//                 </button>
//               </div>

//               {submitError && (
//                 <p className="mt-4 text-sm text-center" style={{ fontFamily: "Georgia, serif", color: "#c0392b" }}>
//                   {submitError}
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ══ TRUST STRIP ═══════════════════════ */}
//       <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
//         <div className="max-w-7xl mx-auto px-8 lg:px-20 py-12">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: "🔒", label: "Private Studio", sub: "One client at a time" },
//               { icon: "⏱", label: "No Waiting", sub: "Appointment-only" },
//               { icon: "✦", label: "1-on-1 Service", sub: "Full attention" },
//               { icon: "📍", label: "Dahisar East", sub: "Mumbai, MH 400068" },
//             ].map((b) => (
//               <div key={b.label} className="flex flex-col gap-2">
//                 <span className="text-2xl">{b.icon}</span>
//                 <p className="text-white font-black uppercase text-sm" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.05em" }}>{b.label}</p>
//                 <p className="text-xs" style={{ fontFamily: "Georgia, serif", color: "#666" }}>{b.sub}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Data ── */
const services = [
  {
    id: "haircut",
    label: "Haircut",
    desc: "Men's, Women's & Kids'",
    duration: "30–45 min",
    icon: "✂",
    color: "#c9a96e",
  },
  {
    id: "threading",
    label: "Threading",
    desc: "Brows, Upper Lip & Face",
    duration: "15–30 min",
    icon: "✦",
    color: "#8b6d50",
  },
  {
    id: "waxing",
    label: "Waxing",
    desc: "Facial & Body Waxing",
    duration: "20–45 min",
    icon: "◈",
    color: "#b48c8c",
  },
  {
    id: "makeup",
    label: "Makeup",
    desc: "Natural to Glam Looks",
    duration: "45–75 min",
    icon: "◆",
    color: "#c9a96e",
  },
];

const addons = [
  { id: "beard", label: "Beard Trim", note: "Add-on with haircut" },
  { id: "brows", label: "Brow Mapping", note: "Consultation included" },
  { id: "skinprep", label: "Skin Prep", note: "For makeup bookings" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "02:00 PM", "02:30 PM", "03:00 PM",
  "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM",
  "05:30 PM", "06:00 PM",
];

const steps = ["Service", "Date & Time", "Your Details", "Confirm"];

/* ── Step indicator ── */
function StepBar({ current }) {
  return (
    <div className="flex items-center gap-0 w-full max-w-2xl mx-auto mb-16">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center flex-1">
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div
              className="w-8 h-8 flex items-center justify-center font-black text-xs transition-all duration-300"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                backgroundColor: i < current ? "#c9a96e" : i === current ? "#0a0808" : "transparent",
                color: i < current ? "#000" : i === current ? "#c9a96e" : "#999",
                border: i < current ? "2px solid #c9a96e" : i === current ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.15)",
              }}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className="text-xs uppercase tracking-widest hidden sm:block"
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "0.55rem",
                color: i === current ? "#0a0808" : "#bbb",
                letterSpacing: "0.15em",
              }}
            >
              {s}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className="flex-1 h-px mx-2 transition-all duration-500"
              style={{ backgroundColor: i < current ? "#c9a96e" : "rgba(0,0,0,0.1)" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({ phone: "", email: "" });

  /* ── Validators ── */
  const validatePhone = (val) => {
    const digits = val.replace(/\D/g, "");
    if (!val) return "Phone number is required.";
    if (digits.length !== 10) return "Phone must be exactly 10 digits.";
    return "";
  };

  const validateEmail = (val) => {
    if (!val) return ""; // email is optional
    // must contain @ and end with a valid domain (e.g. @gmail.com, @yahoo.com etc.)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(val)) return "Enter a valid email address (e.g. you@gmail.com).";
    return "";
  };

  const handlePhoneChange = (val) => {
    // Only allow digits, spaces, +, -, ()
    const cleaned = val.replace(/[^0-9+()\- ]/g, "");
    setForm((prev) => ({ ...prev, phone: cleaned }));
    setFieldErrors((prev) => ({ ...prev, phone: validatePhone(cleaned) }));
  };

  const handleEmailChange = (val) => {
    setForm((prev) => ({ ...prev, email: val }));
    setFieldErrors((prev) => ({ ...prev, email: validateEmail(val) }));
  };

  const isStep2Valid = () => {
    const phoneErr = validatePhone(form.phone);
    const emailErr = validateEmail(form.email);
    return form.name.trim() !== "" && phoneErr === "" && emailErr === "";
  };

  const handleStep2Next = () => {
    const phoneErr = validatePhone(form.phone);
    const emailErr = validateEmail(form.email);
    setFieldErrors({ phone: phoneErr, email: emailErr });
    if (form.name.trim() && phoneErr === "" && emailErr === "") {
      setStep(3);
    }
  };

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: serviceData?.label,
          duration: serviceData?.duration,
          date: selectedDate,
          time: selectedTime,
          name: form.name,
          phone: form.phone,
          email: form.email,
          addons: selectedAddons,
          notes: form.notes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Get tomorrow's date as min ── */
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const serviceData = services.find((s) => s.id === selectedService);

  /* ══ CONFIRMATION SCREEN ══════════════════ */
  if (submitted) {
    return (
      <div style={{ backgroundColor: "#f8f7f5", minHeight: "100vh" }}>
        <Header />
        <section className="w-full flex flex-col items-center justify-center px-8 py-32 text-center" style={{ minHeight: "80vh" }}>
          <div
            className="w-20 h-20 flex items-center justify-center mb-8 text-3xl"
            style={{ backgroundColor: "#c9a96e" }}
          >
            ✓
          </div>
          <h1
            className="uppercase leading-none mb-6"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.9, color: "#0a0808" }}
          >
            REQUEST
            <br />
            <span style={{ color: "#c9a96e" }}>SENT.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-md mb-4" style={{ fontFamily: "Georgia, serif", color: "#666" }}>
            Thanks <strong style={{ color: "#0a0808" }}>{form.name}</strong> — we've received your booking request for{" "}
            <strong style={{ color: "#0a0808" }}>{serviceData?.label}</strong> on{" "}
            <strong style={{ color: "#0a0808" }}>{selectedDate}</strong> at{" "}
            <strong style={{ color: "#0a0808" }}>{selectedTime}</strong>.
          </p>
          <p className="text-sm" style={{ fontFamily: "Georgia, serif", color: "#999" }}>
            We'll confirm your slot via SMS or email shortly.
          </p>
          <div className="flex gap-4 mt-12 flex-wrap justify-center">
            <a
              href="/"
              className="px-8 py-4 font-black uppercase text-xs tracking-widest"
              style={{ backgroundColor: "#0a0808", color: "#c9a96e", fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              Back to Home
            </a>
            <button
              onClick={() => { setSubmitted(false); setStep(0); setSelectedService(null); setSelectedDate(""); setSelectedTime(""); setForm({ name: "", phone: "", email: "", notes: "" }); setSelectedAddons([]); }}
              className="px-8 py-4 font-black uppercase text-xs tracking-widest border"
              style={{ borderColor: "rgba(0,0,0,0.2)", color: "#0a0808", fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              Book Another
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8f7f5", minHeight: "100vh" }}>
      <Header />

      {/* ══ HERO STRIP ════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0a0808", minHeight: "260px" }}
      >
        {/* Gold grid */}
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
          BOOK
        </div>

        <div className="relative z-10 px-8 lg:px-20 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#c9a96e" }} />
            <span className="uppercase text-xs tracking-[0.4em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>
              Private Studio · Dahisar East, Mumbai
            </span>
          </div>
          <h1
            className="text-white uppercase leading-none"
            style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            BOOK A<br />
            <span style={{ color: "#c9a96e" }}>SLOT.</span>
          </h1>
        </div>
      </section>

      {/* ══ MAIN FORM AREA ════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#f8f7f5" }}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 py-20">
          <StepBar current={step} />

          {/* ── STEP 0: Choose Service ── */}
          {step === 0 && (
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                  <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 1 of 4</span>
                </div>
                <h2
                  className="font-black uppercase leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
                >
                  CHOOSE YOUR
                  <br /><span style={{ color: "#c9a96e" }}>SERVICE.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className="group relative flex flex-col gap-4 p-7 text-left transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: selectedService === s.id ? "#0a0808" : "#fff",
                      border: selectedService === s.id ? `2px solid ${s.color}` : "2px solid rgba(0,0,0,0.08)",
                      transform: selectedService === s.id ? "scale(1.01)" : "scale(1)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="text-3xl transition-colors"
                        style={{ color: selectedService === s.id ? s.color : "#ccc" }}
                      >
                        {s.icon}
                      </span>
                      {selectedService === s.id && (
                        <div className="w-5 h-5 flex items-center justify-center text-xs font-black" style={{ backgroundColor: s.color, color: "#000" }}>✓</div>
                      )}
                    </div>
                    <div>
                      <h3
                        className="font-black uppercase text-xl leading-tight mb-1"
                        style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "-0.02em", color: selectedService === s.id ? "#fff" : "#0a0808" }}
                      >
                        {s.label}
                      </h3>
                      <p className="text-sm mb-2" style={{ fontFamily: "Georgia, serif", color: selectedService === s.id ? "#a89070" : "#888" }}>
                        {s.desc}
                      </p>
                      <span
                        className="text-xs uppercase tracking-widest"
                        style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.6rem", color: s.color }}
                      >
                        ⏱ {s.duration}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Add-ons */}
              <div className="mb-10">
                <p className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#999", letterSpacing: "0.15em" }}>
                  Optional Add-ons
                </p>
                <div className="flex flex-col gap-2">
                  {addons.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => toggleAddon(a.id)}
                      className="flex items-center justify-between px-6 py-4 text-left transition-all cursor-pointer"
                      style={{
                        backgroundColor: selectedAddons.includes(a.id) ? "#0a0808" : "#fff",
                        border: selectedAddons.includes(a.id) ? "2px solid #c9a96e" : "2px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      <div>
                        <span
                          className="font-black uppercase text-sm"
                          style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: selectedAddons.includes(a.id) ? "#c9a96e" : "#0a0808", letterSpacing: "0.05em" }}
                        >
                          {a.label}
                        </span>
                        <span className="ml-3 text-xs" style={{ fontFamily: "Georgia, serif", color: "#999" }}>{a.note}</span>
                      </div>
                      <div
                        className="w-5 h-5 flex items-center justify-center text-xs font-black"
                        style={{
                          backgroundColor: selectedAddons.includes(a.id) ? "#c9a96e" : "transparent",
                          border: selectedAddons.includes(a.id) ? "2px solid #c9a96e" : "2px solid rgba(0,0,0,0.15)",
                          color: "#000",
                        }}
                      >
                        {selectedAddons.includes(a.id) ? "✓" : ""}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => selectedService && setStep(1)}
                className="w-full flex items-center justify-between px-10 py-6 font-black uppercase text-base tracking-widest transition-all"
                style={{
                  backgroundColor: selectedService ? "#0a0808" : "rgba(0,0,0,0.1)",
                  color: selectedService ? "#c9a96e" : "#bbb",
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  letterSpacing: "0.12em",
                  cursor: selectedService ? "pointer" : "not-allowed",
                }}
              >
                <span>Next — Date &amp; Time</span>
                <span className="text-2xl">→</span>
              </button>
            </div>
          )}

          {/* ── STEP 1: Date & Time ── */}
          {step === 1 && (
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                  <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 2 of 4</span>
                </div>
                <h2
                  className="font-black uppercase leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
                >
                  PICK YOUR
                  <br /><span style={{ color: "#c9a96e" }}>DATE & TIME.</span>
                </h2>
                {serviceData && (
                  <div className="flex items-center gap-3 mt-5">
                    <div className="h-px w-6" style={{ backgroundColor: "#c9a96e" }} />
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#888" }}>
                      {serviceData.label} · {serviceData.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Date picker */}
              <div className="mb-10">
                <label
                  className="block text-xs uppercase tracking-widest mb-3"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  min={minDate}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-6 py-4 text-sm focus:outline-none transition-all"
                  style={{
                    fontFamily: "Georgia, serif",
                    backgroundColor: "#fff",
                    border: selectedDate ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.12)",
                    color: "#0a0808",
                  }}
                />
              </div>

              {/* Time slots */}
              <div className="mb-10">
                <label
                  className="block text-xs uppercase tracking-widest mb-4"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}
                >
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className="px-3 py-3 text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
                      style={{
                        fontFamily: "'Arial Black', Arial, sans-serif",
                        backgroundColor: selectedTime === t ? "#0a0808" : "#fff",
                        color: selectedTime === t ? "#c9a96e" : "#666",
                        border: selectedTime === t ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.08)",
                        fontSize: "0.62rem",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(0)}
                  className="flex items-center gap-2 px-8 py-5 font-black uppercase text-xs tracking-widest border cursor-pointer"
                  style={{ borderColor: "rgba(0,0,0,0.15)", color: "#666", fontFamily: "'Arial Black', Arial, sans-serif" }}
                >
                  ← Back
                </button>
                <button
                  onClick={() => selectedDate && selectedTime && setStep(2)}
                  className="flex-1 flex items-center justify-between px-10 py-5 font-black uppercase text-base tracking-widest transition-all"
                  style={{
                    backgroundColor: selectedDate && selectedTime ? "#0a0808" : "rgba(0,0,0,0.1)",
                    color: selectedDate && selectedTime ? "#c9a96e" : "#bbb",
                    fontFamily: "'Arial Black', Arial, sans-serif",
                    cursor: selectedDate && selectedTime ? "pointer" : "not-allowed",
                  }}
                >
                  <span>Next — Your Details</span>
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Details ── */}
          {step === 2 && (
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                  <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 3 of 4</span>
                </div>
                <h2
                  className="font-black uppercase leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
                >
                  YOUR
                  <br /><span style={{ color: "#c9a96e" }}>DETAILS.</span>
                </h2>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-6 py-4 text-sm focus:outline-none transition-all"
                    style={{ fontFamily: "Georgia, serif", backgroundColor: "#fff", border: form.name ? "2px solid #0a0808" : "2px solid rgba(0,0,0,0.12)", color: "#0a0808" }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}>
                    Phone Number <span style={{ color: "#b48c8c", fontSize: "0.55rem" }}>* 10 digits required</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit number (any country)"
                    value={form.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    maxLength={15}
                    className="w-full px-6 py-4 text-sm focus:outline-none transition-all"
                    style={{
                      fontFamily: "Georgia, serif",
                      backgroundColor: "#fff",
                      border: fieldErrors.phone ? "2px solid #c0392b" : form.phone && !fieldErrors.phone ? "2px solid #1a7a1a" : "2px solid rgba(0,0,0,0.12)",
                      color: "#0a0808",
                    }}
                  />
                  {fieldErrors.phone && (
                    <p className="mt-2 text-xs flex items-center gap-1" style={{ fontFamily: "Georgia, serif", color: "#c0392b" }}>
                      <span>⚠</span> {fieldErrors.phone}
                    </p>
                  )}
                  {form.phone && !fieldErrors.phone && (
                    <p className="mt-2 text-xs flex items-center gap-1" style={{ fontFamily: "Georgia, serif", color: "#1a7a1a" }}>
                      <span>✓</span> Valid phone number
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}>
                    Email Address <span style={{ color: "#999", fontSize: "0.55rem" }}>(optional — needed for email confirmation)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    value={form.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className="w-full px-6 py-4 text-sm focus:outline-none transition-all"
                    style={{
                      fontFamily: "Georgia, serif",
                      backgroundColor: "#fff",
                      border: fieldErrors.email ? "2px solid #c0392b" : form.email && !fieldErrors.email ? "2px solid #1a7a1a" : "2px solid rgba(0,0,0,0.12)",
                      color: "#0a0808",
                    }}
                  />
                  {fieldErrors.email && (
                    <p className="mt-2 text-xs flex items-center gap-1" style={{ fontFamily: "Georgia, serif", color: "#c0392b" }}>
                      <span>⚠</span> {fieldErrors.email}
                    </p>
                  )}
                  {form.email && !fieldErrors.email && (
                    <p className="mt-2 text-xs flex items-center gap-1" style={{ fontFamily: "Georgia, serif", color: "#1a7a1a" }}>
                      <span>✓</span> Valid email address
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#666", letterSpacing: "0.15em" }}
                  >
                    Notes <span style={{ color: "#bbb", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    placeholder="Anything we should know? Inspiration, outfit colour, specific requests..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={4}
                    className="w-full px-6 py-4 text-sm focus:outline-none transition-all resize-none"
                    style={{
                      fontFamily: "Georgia, serif",
                      backgroundColor: "#fff",
                      border: "2px solid rgba(0,0,0,0.12)",
                      color: "#0a0808",
                    }}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-8 py-5 font-black uppercase text-xs tracking-widest border cursor-pointer"
                  style={{ borderColor: "rgba(0,0,0,0.15)", color: "#666", fontFamily: "'Arial Black', Arial, sans-serif" }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleStep2Next}
                  className="flex-1 flex items-center justify-between px-10 py-5 font-black uppercase text-base tracking-widest transition-all"
                  style={{
                    backgroundColor: isStep2Valid() ? "#0a0808" : "rgba(0,0,0,0.1)",
                    color: isStep2Valid() ? "#c9a96e" : "#bbb",
                    fontFamily: "'Arial Black', Arial, sans-serif",
                    cursor: isStep2Valid() ? "pointer" : "not-allowed",
                  }}
                >
                  <span>Next — Review &amp; Confirm</span>
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Confirm ── */}
          {step === 3 && (
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-8" style={{ backgroundColor: "#c9a96e" }} />
                  <span className="uppercase text-xs tracking-[0.35em]" style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}>Step 4 of 4</span>
                </div>
                <h2
                  className="font-black uppercase leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "#0a0808", lineHeight: 0.95 }}
                >
                  CONFIRM
                  <br /><span style={{ color: "#c9a96e" }}>YOUR SLOT.</span>
                </h2>
              </div>

              {/* Summary card */}
              <div
                className="mb-10 p-8"
                style={{ backgroundColor: "#0a0808", border: "2px solid rgba(201,169,110,0.2)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#c9a96e", letterSpacing: "0.2em" }}>
                  Booking Summary
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "Service", value: serviceData?.label },
                    { label: "Duration", value: serviceData?.duration },
                    { label: "Date", value: selectedDate },
                    { label: "Time", value: selectedTime },
                    { label: "Name", value: form.name },
                    { label: "Phone", value: form.phone },
                    ...(form.email ? [{ label: "Email", value: form.email }] : []),
                    ...(selectedAddons.length > 0 ? [{ label: "Add-ons", value: selectedAddons.join(", ") }] : []),
                    ...(form.notes ? [{ label: "Notes", value: form.notes }] : []),
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "0.55rem", color: "#666", letterSpacing: "0.18em" }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-bold" style={{ fontFamily: "Georgia, serif", color: "#fff" }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}>
                  <p className="text-xs italic" style={{ fontFamily: "Georgia, serif", color: "#666" }}>
                    We'll confirm your appointment via SMS or email. Appointment-only — private, single-seat studio.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-8 py-5 font-black uppercase text-xs tracking-widest border"
                  style={{ borderColor: "rgba(0,0,0,0.15)", color: "#666", fontFamily: "'Arial Black', Arial, sans-serif" }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-between px-10 py-6 font-black uppercase text-base tracking-widest transition-all hover:brightness-110 hover:scale-[1.01]"
                  style={{ backgroundColor: isSubmitting ? "#a88a50" : "#c9a96e", color: "#000", fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.12em", cursor: isSubmitting ? "not-allowed" : "pointer" }}
                >
                  <span>{isSubmitting ? "Sending..." : "Confirm Booking"}</span>
                  <span className="text-2xl">{isSubmitting ? "⏳" : "→"}</span>
                </button>
              </div>

              {submitError && (
                <p className="mt-4 text-sm text-center" style={{ fontFamily: "Georgia, serif", color: "#c0392b" }}>
                  {submitError}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══ TRUST STRIP ═══════════════════════ */}
      <section className="w-full" style={{ backgroundColor: "#0a0808" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔒", label: "Private Studio", sub: "One client at a time" },
              { icon: "⏱", label: "No Waiting", sub: "Appointment-only" },
              { icon: "✦", label: "1-on-1 Service", sub: "Full attention" },
              { icon: "📍", label: "Dahisar East", sub: "Mumbai, MH 400068" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col gap-2">
                <span className="text-2xl">{b.icon}</span>
                <p className="text-white font-black uppercase text-sm" style={{ fontFamily: "'Arial Black', Arial, sans-serif", letterSpacing: "0.05em" }}>{b.label}</p>
                <p className="text-xs" style={{ fontFamily: "Georgia, serif", color: "#666" }}>{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}