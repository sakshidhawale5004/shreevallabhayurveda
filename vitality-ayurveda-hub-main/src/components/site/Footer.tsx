import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo.url} alt="Shree Vallabh Ayurveda" className="h-16 w-auto bg-background rounded-lg p-2 mb-4" />
          <p className="text-sm opacity-80">Dr. Bhanushali's Shree Vallabh Ayurveda & Panchakarma — authentic classical Ayurveda for root-cause healing.</p>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4 text-gold">Explore</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about">About Dr. Bhanushali</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4 text-gold">Treatments</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/treatments/heart">Heart / Diabetes / BP</Link></li>
            <li><Link to="/treatments/stroke">Stroke / Paralysis</Link></li>
            <li><Link to="/treatments/thyroid">Thyroid Management</Link></li>
            <li><Link to="/treatments/infertility">Infertility</Link></li>
            <li><Link to="/treatments/arthritis">Arthritis</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4 text-gold">Reach Us</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href="tel:+918652621285">+91 8652 621 285 (Seawoods)</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href="tel:+919225301077">+91 9225 301 077 (Nerul)</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><a href="mailto:swapnil@shreevallabhayurveda.com">swapnil@shreevallabhayurveda.com</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />Seawoods & Nerul, Navi Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-page py-5 text-xs opacity-70 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Dr. Bhanushali's Shree Vallabh Ayurveda. All rights reserved.</span>
          <span>Crafted with dedication to authentic Ayurveda.</span>
        </div>
      </div>
    </footer>
  );
}
