import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Card3D } from "./Card3D";

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      </div>
      <div className="container-page text-primary-foreground relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            {eyebrow && <p className="text-gold uppercase tracking-[0.25em] text-xs font-medium mb-4">{eyebrow}</p>}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">{title}</h1>
            {subtitle && <p className="mt-5 text-lg md:text-xl opacity-85 leading-relaxed">{subtitle}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Book Consultation</Link>
              <a href="tel:+918652621285" className="inline-flex items-center px-6 py-3 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 transition">Call +91 8652 621 285</a>
            </div>
          </motion.div>
          
          {image && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex items-center justify-center mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gold/20 blur-[120px] rounded-full mix-blend-screen" />
              <div className="relative z-10 w-full max-w-md mx-auto">
                <Card3D className="p-3 bg-white/5 border border-white/20 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden">
                  <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-inner">
                    <img src={image} alt={title} className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                  </div>
                </Card3D>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
