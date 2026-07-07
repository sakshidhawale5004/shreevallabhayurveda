import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, HeartPulse, Sparkles, ShieldCheck, Star, ArrowRight, Award, Users, Clock } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Card3D } from "@/components/site/Card3D";
import { treatments } from "@/lib/treatments";
// Using Unsplash images for high-quality visuals instead of local assets

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Bhanushali's Shree Vallabh Ayurveda & Panchakarma — Navi Mumbai" },
      { name: "description", content: "Authentic classical Ayurveda and Panchakarma in Seawoods & Nerul, Navi Mumbai. Root-cause healing for heart, thyroid, stroke, infertility, arthritis and more." },
      { property: "og:title", content: "Dr. Bhanushali's Shree Vallabh Ayurveda" },
      { property: "og:description", content: "10,000+ patients healed through classical Panchakarma. Book your consultation today." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" },
    ],
  }),
  component: Home,
});

const panchakarmaTherapies = [
  { name: "Vaman", desc: "Induced therapeutic vomiting to expel Kapha toxins", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop" },
  { name: "Virechana", desc: "Medicated purgation for Pitta cleansing", img: "/newimages/virechan.webp" },
  { name: "Basti", desc: "Medicated enema — the queen of Panchakarma", img: "/newimages/basti.jpg" },
  { name: "Nasya", desc: "Nasal administration to clear head, neck, senses", img: "/newimages/Nasya.jpg" },
  { name: "Raktamokshana", desc: "Bloodletting for chronic skin & blood disorders", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1170&auto=format&fit=crop" },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" alt="" className="h-full w-full object-cover opacity-10 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="container-page text-primary-foreground relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.15)]">
                <Leaf className="h-4 w-4 text-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Authentic Panchakarma · Since Generations</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                Heal at the <em className="text-gold not-italic relative inline-block"><span className="relative z-10">Root.</span><svg className="absolute -bottom-2 w-full text-gold/30 h-3 left-0" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></em><br /> Live in <em className="text-gold not-italic drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]">True Health.</em>
              </h1>
              <p className="mt-6 text-lg md:text-xl opacity-90 leading-relaxed">
                Dr. Swapnil Bhanushali and his Panchakarma team have helped 10,000+ patients rediscover well-being through classical Ayurveda — where the disease is not just silenced, it is dissolved.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link to="/contact" className="btn-gold group text-base px-8 py-4 shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all border border-gold">
                  Book Appointment <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="inline-flex items-center px-8 py-4 rounded-full border-2 border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-all font-medium text-base shadow-lg">
                  Meet the Doctor
                </Link>
              </div>
              
              <div className="mt-14 grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                {[{icon: Users, n: "10,000+", l: "Patients Treated"}, {icon: Award, n: "15+", l: "Years Experience"}, {icon: Clock, n: "2", l: "Clinic Locations"}].map((s, i) => (
                  <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                    <s.icon className="h-7 w-7 text-gold mb-3 drop-shadow-md" />
                    <div className="font-display text-3xl font-bold">{s.n}</div>
                    <div className="text-xs opacity-70 uppercase tracking-widest mt-1">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative lg:h-[600px] flex items-center justify-center">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gold/20 blur-[120px] rounded-full mix-blend-screen" />
              
              {/* The main 3D Card */}
              <div className="relative z-10 w-full max-w-md mx-auto">
                <Card3D className="p-3 bg-white/5 border border-white/20 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden">
                  <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-inner">
                    <motion.img 
                      src="/assets/imageforherosection.png" 
                      alt="Ayurvedic Treatment" 
                      className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700 filter sepia-[1] saturate-[500%] hue-rotate-[-10deg] contrast-[120%] drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                      <div className="inline-block px-4 py-1.5 bg-gold text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-3 shadow-[0_0_15px_rgba(255,215,0,0.5)] pointer-events-auto">Premium Care</div>
                      <h3 className="text-white font-display text-3xl drop-shadow-lg">Classical Panchakarma</h3>
                      <p className="text-white/90 text-sm mt-2 font-medium">Authentic protocols for deep cellular healing.</p>
                    </div>
                  </div>
                </Card3D>
              </div>
              
              {/* Floating elements for extra 3D depth */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute -left-6 top-1/4 z-20 hidden md:block">
                <Card3D className="p-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center gap-4">
                  <div className="bg-gold p-3 rounded-xl text-primary shadow-lg"><Leaf className="h-6 w-6" /></div>
                  <div className="pr-3">
                    <div className="text-xs text-white/80 uppercase tracking-widest font-semibold">Natural Herbs</div>
                    <div className="font-bold text-white text-base">100% Organic</div>
                  </div>
                </Card3D>
              </motion.div>
              
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} className="absolute -right-8 bottom-1/3 z-20 hidden md:block">
                <Card3D className="p-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center gap-4">
                  <div className="bg-gold p-3 rounded-xl text-primary shadow-lg"><ShieldCheck className="h-6 w-6" /></div>
                  <div className="pr-3">
                    <div className="text-xs text-white/80 uppercase tracking-widest font-semibold">Certified</div>
                    <div className="font-bold text-white text-base">Expert Doctors</div>
                  </div>
                </Card3D>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-page py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: HeartPulse, title: "Root-Cause Healing", desc: "We treat the origin — not just symptoms. Sustainable outcomes with classical shastra." },
            { icon: Sparkles, title: "Authentic Panchakarma", desc: "Fully-equipped therapy rooms, traditionally trained therapists, medicated oils prepared in-house." },
            { icon: ShieldCheck, title: "Evidence-Backed", desc: "Modern diagnostics + classical protocols — measurable results your doctor can verify." },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card3D className="p-8 h-full">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 grid place-items-center mb-5 shadow-elegant">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="container-page py-24 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-3">About the Clinic</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Where the wisdom of the Vedas meets the rigour of modern practice.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Dr. Bhanushali's Shree Vallabh Ayurveda & Panchakarma is a fully authentic clinic devoted to helping patients and families use Ayurveda to address the true root of disease. Our mission — "Maintain the health of the healthy; treat the diseased with Ayurveda to regain true health."
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {["Vaman", "Virechana", "Basti", "Nasya", "Raktamokshana", "Rasayana"].map((p) => (
              <li key={p} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{p}</li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary mt-8">Read Doctor's Story</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
          <Card3D><img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" alt="" className="w-full h-56 object-cover" /></Card3D>
          <Card3D className="mt-8"><img src="/newimages/homepage.jpg" alt="" className="w-full h-56 object-cover" /></Card3D>
          <Card3D className="-mt-4"><img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" alt="" className="w-full h-56 object-cover" /></Card3D>
          <Card3D className="mt-4"><img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" alt="" className="w-full h-56 object-cover" /></Card3D>
        </motion.div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="container-page py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-3">Our Specialities</p>
          <h2 className="font-display text-4xl md:text-5xl">Signature Treatments</h2>
          <p className="mt-4 text-muted-foreground">Ten focused programs — each rooted in classical Ayurveda and refined by decades of clinical outcome.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <motion.div key={t.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}>
              <Card3D className="group h-full">
                <div className="relative h-52 overflow-hidden">
                  <img src={t.image} alt={t.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl leading-tight">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{t.short}</p>
                  <Link to="/treatments/$slug" params={{ slug: t.slug }} className="mt-4 inline-flex items-center text-primary font-medium text-sm group/link">
                    Explore treatment <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PANCHAKARMA */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="container-page relative">
          <div className="max-w-2xl mb-14">
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">The Five Actions</p>
            <h2 className="font-display text-4xl md:text-5xl">Panchakarma — Classical Detox & Rejuvenation</h2>
            <p className="mt-4 opacity-85">The complete body rejuvenation is done through five classical procedures. Each protocol is customised to your prakriti and disease stage.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {panchakarmaTherapies.map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover-lift hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <div className="font-display text-2xl text-gold">{p.name}</div>
                  <p className="text-xs opacity-90 mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL PREVIEW */}
      <section className="container-page py-24">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { n: "Ganesh Gokhale", q: "Dr. Bhanushali is an authentic ayurvedic practitioner. He doesn't only treat you — he explains the root causes and helps correct your lifestyle to balance vata, pitta and kapha." },
            { n: "Neelam Gheewala", q: "I've been diabetic for 25 years and tried everything. By far, Dr. Bhanushali's treatment is the most effective and soulful I've experienced." },
            { n: "Vishal Galhotra", q: "A genuine medical practitioner and above all a great human being. Understands your ailment promptly and prescribes the best-suited cure." },
          ].map((t) => (
            <Card3D key={t.n} className="p-8">
              <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <p className="text-lg leading-relaxed">"{t.q}"</p>
              <div className="mt-6 font-display text-xl text-primary">— {t.n}</div>
            </Card3D>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials" className="btn-primary">Read All Testimonials</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/70 text-primary-foreground p-10 md:p-16 relative overflow-hidden shadow-elegant">
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Begin your journey to true health.</h2>
              <p className="mt-4 opacity-85">Book a personalised consultation at our Seawoods or Nerul clinic. We'll assess your prakriti, current imbalances and design a program that fits your life.</p>
            </div>
            <div className="flex flex-col sm:flex-row md:justify-end gap-3">
              <Link to="/contact" className="btn-gold">Book Appointment</Link>
              <a href="tel:+918652621285" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 transition">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
