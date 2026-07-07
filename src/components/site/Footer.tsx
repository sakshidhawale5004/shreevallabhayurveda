import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-24 grid gap-12 md:grid-cols-4">
        <div className="flex flex-col">
          <div>
            <img src={logo.url} alt="Shree Vallabh Ayurveda" className="h-20 w-auto bg-background rounded-lg p-2 mb-6" />
            <p className="text-base opacity-80 leading-relaxed">Dr. Bhanushali's Shree Vallabh Ayurveda & Panchakarma — authentic classical Ayurveda for root-cause healing.</p>
          </div>
          <div className="mt-8 flex gap-4">
            <motion.a whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} href="https://youtube.com/@drswapnilbhanushali?si=3UnlbM-xnEytw-Gs" target="_blank" rel="noreferrer" className="bg-primary-foreground/10 p-3 rounded-full hover:bg-gold hover:text-primary transition-colors shadow-sm">
              <Youtube className="h-6 w-6" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.instagram.com/swapnilayu?igsh=bml4bW5mdDd3a2xv" target="_blank" rel="noreferrer" className="bg-primary-foreground/10 p-3 rounded-full hover:bg-gold hover:text-primary transition-colors shadow-sm">
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.facebook.com/@drswapnilbhanushali/?hr=1&wtsid=rdr_0SlZ9deVT8mdci6kL" target="_blank" rel="noreferrer" className="bg-primary-foreground/10 p-3 rounded-full hover:bg-gold hover:text-primary transition-colors shadow-sm">
              <Facebook className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-2xl mb-6 text-gold">Explore</h4>
          <ul className="space-y-4 text-base opacity-90">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Dr. Bhanushali</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
            <li><Link to="/videos" className="hover:text-gold transition-colors">Videos</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-2xl mb-6 text-gold">Treatments</h4>
          <ul className="space-y-4 text-base opacity-90">
            <li><Link to="/treatments/heart" className="hover:text-gold transition-colors">Heart / Diabetes / BP</Link></li>
            <li><Link to="/treatments/stroke" className="hover:text-gold transition-colors">Stroke / Paralysis</Link></li>
            <li><Link to="/treatments/thyroid" className="hover:text-gold transition-colors">Thyroid Management</Link></li>
            <li><Link to="/treatments/infertility" className="hover:text-gold transition-colors">Infertility</Link></li>
            <li><Link to="/treatments/arthritis" className="hover:text-gold transition-colors">Arthritis</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-2xl mb-6 text-gold">Reach Us</h4>
          <ul className="space-y-4 text-base opacity-90">
            <li className="flex gap-3"><Phone className="h-5 w-5 mt-0.5 shrink-0" /><a href="tel:+918652621285" className="hover:text-gold transition-colors">+91 8652 621 285 (Seawoods)</a></li>
            <li className="flex gap-3"><Phone className="h-5 w-5 mt-0.5 shrink-0" /><a href="tel:+919225301077" className="hover:text-gold transition-colors">+91 9225 301 077 (Nerul)</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 mt-0.5 shrink-0" /><a href="mailto:swapnil@shreevallabhayurveda.com" className="hover:text-gold transition-colors">swapnil@shreevallabhayurveda.com</a></li>
            <li className="flex gap-3"><MapPin className="h-5 w-5 mt-0.5 shrink-0" />Seawoods & Nerul, Navi Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-8 text-sm opacity-80 flex flex-col sm:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} Dr. Bhanushali's Shree Vallabh Ayurveda. All rights reserved.</span>
          <span>Crafted with dedication to authentic Ayurveda.</span>
        </div>
      </div>
    </footer>
  );
}
