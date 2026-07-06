import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Card3D } from "./Card3D";

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 z-0">
        {image ? (
          <>
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            {/* Navy blue overlay */}
            <div className="absolute inset-0 bg-primary/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        )}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      </div>
      <div className="container-page text-primary-foreground relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {eyebrow && <p className="text-gold uppercase tracking-[0.25em] text-xs font-medium mb-4">{eyebrow}</p>}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">{title}</h1>
            {subtitle && <p className="mt-5 text-lg md:text-xl opacity-85 leading-relaxed">{subtitle}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Book Consultation</Link>
              <a href="tel:+918652621285" className="inline-flex items-center px-6 py-3 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 transition">Call +91 8652 621 285</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
