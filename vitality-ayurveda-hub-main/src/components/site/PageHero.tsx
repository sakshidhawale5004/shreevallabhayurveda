import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        {image && (
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity" />
        )}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      </div>
      <div className="container-page py-24 md:py-32 text-primary-foreground relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {eyebrow && <p className="text-gold uppercase tracking-[0.25em] text-xs font-medium mb-4">{eyebrow}</p>}
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl opacity-85 text-lg">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">Book Consultation</Link>
            <a href="tel:+918652621285" className="inline-flex items-center px-6 py-3 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 transition">Call +91 8652 621 285</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
