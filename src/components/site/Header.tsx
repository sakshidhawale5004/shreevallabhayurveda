import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.asset.json";

const treatments = [
  { to: "/treatments/heart", label: "Heart / Diabetes / BP" },
  { to: "/treatments/stroke", label: "Stroke / Paralysis" },
  { to: "/treatments/weight-loss", label: "Weight Loss" },
  { to: "/treatments/hair", label: "Hair Loss & Graying" },
  { to: "/treatments/thyroid", label: "Thyroid / Hormonal" },
  { to: "/treatments/infertility", label: "Infertility" },
  { to: "/treatments/beauty", label: "Beauty Enhancement" },
  { to: "/treatments/pre-pregnancy", label: "Pre-Pregnancy" },
  { to: "/treatments/arthritis", label: "Arthritis" },
  { to: "/treatments/obesity", label: "Obesity" },
];

const panchaKarma = [
  { to: "/panchakarma/vaman", label: "Vaman" },
  { to: "/panchakarma/virechan", label: "Virechan" },
  { to: "/panchakarma/nassya", label: "Nassya" },
  { to: "/panchakarma/raktamoshan", label: "Raktamokshan" },
  { to: "/panchakarma/basti", label: "Basti" },
  { to: "/panchakarma/allied-karma", label: "Allied-Karma" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/garbhasanskar", label: "Garbhasanskar" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/videos", label: "Videos" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  const [panchOpen, setPanchOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/60">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      <div className="bg-gold text-[#0a192f] overflow-hidden py-1.5 whitespace-nowrap text-xs font-semibold tracking-wide border-b border-white/20">
        <div className="inline-block animate-scroll pr-8">
          Mumbai and Navi Mumbai's First need based *therapeutic Ayurved Hospital Paralysis * Weight loss program * Parkinson's disease * Kidney failure * Chronic acidity * piles * fissure * fistula etc
        </div>
      </div>
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-page flex justify-between py-2">
          <span className="hidden sm:inline">Authentic Ayurveda & Panchakarma · Since 10,000+ patients treated</span>
          <a href="tel:+918652621285" className="inline-flex items-center gap-1.5 font-medium">
            <Phone className="h-3.5 w-3.5" /> +91 8652 621 285
          </a>
        </div>
      </div>
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Shree Vallabh Ayurveda" className="h-[72px] w-auto drop-shadow-sm" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.slice(0, 2).map((n) => (
            <Link key={n.to} to={n.to} className="px-3 py-2 text-sm font-medium hover:text-primary transition" activeProps={{ className: "text-primary" }}>{n.label}</Link>
          ))}
          <div className="relative" onMouseEnter={() => setTreatOpen(true)} onMouseLeave={() => setTreatOpen(false)}>
            <button className="px-3 py-2 text-sm font-medium hover:text-primary transition">Treatments ▾</button>
            {treatOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72">
                <div className="card-3d p-2 border border-border bg-background/95 backdrop-blur-md">
                  {treatments.map((t) => (
                    <Link key={t.to} to={t.to} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition">{t.label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setPanchOpen(true)} onMouseLeave={() => setPanchOpen(false)}>
            <Link to="/panchakarma" className="px-3 py-2 text-sm font-medium hover:text-primary transition block">Panchakarma ▾</Link>
            {panchOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48">
                <div className="card-3d p-2 border border-border bg-background/95 backdrop-blur-md">
                  {panchaKarma.map((t) => (
                    <Link key={t.to} to={t.to as any} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition">{t.label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.slice(2).map((n) => (
            <Link key={n.to} to={n.to} className="px-3 py-2 text-sm font-medium hover:text-primary transition" activeProps={{ className: "text-primary" }}>{n.label}</Link>
          ))}
          <Link to="/contact" className="btn-gold ml-2 text-sm">Book Appointment</Link>
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="py-2" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
            <details className="py-2">
              <summary className="cursor-pointer font-medium">Treatments</summary>
              <div className="pl-4 flex flex-col gap-1 mt-2">
                {treatments.map((t) => (
                  <Link key={t.to} to={t.to} className="py-1.5 text-sm" onClick={() => setOpen(false)}>{t.label}</Link>
                ))}
              </div>
            </details>
            <details className="py-2">
              <summary className="cursor-pointer font-medium">
                <Link to="/panchakarma" onClick={() => setOpen(false)}>Panchakarma</Link>
              </summary>
              <div className="pl-4 flex flex-col gap-1 mt-2">
                {panchaKarma.map((t) => (
                  <Link key={t.to} to={t.to as any} className="py-1.5 text-sm" onClick={() => setOpen(false)}>{t.label}</Link>
                ))}
              </div>
            </details>
            <Link to="/contact" className="btn-gold mt-2" onClick={() => setOpen(false)}>Book Appointment</Link>
          </div>
        </div>
      )}
    </header>
  );
}
