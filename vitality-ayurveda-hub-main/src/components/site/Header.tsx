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

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/videos", label: "Videos" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/60">
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
          <img src={logo.url} alt="Shree Vallabh Ayurveda" className="h-14 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.slice(0, 2).map((n) => (
            <Link key={n.to} to={n.to} className="px-3 py-2 text-sm font-medium hover:text-primary transition" activeProps={{ className: "text-primary" }}>{n.label}</Link>
          ))}
          <div className="relative" onMouseEnter={() => setTreatOpen(true)} onMouseLeave={() => setTreatOpen(false)}>
            <button className="px-3 py-2 text-sm font-medium hover:text-primary transition">Treatments ▾</button>
            {treatOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72">
                <div className="card-3d p-2 border border-border">
                  {treatments.map((t) => (
                    <Link key={t.to} to={t.to} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition">{t.label}</Link>
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
            <Link to="/contact" className="btn-gold mt-2" onClick={() => setOpen(false)}>Book Appointment</Link>
          </div>
        </div>
      )}
    </header>
  );
}
