import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { Card3D } from "@/components/site/Card3D";
import { ArrowRight, Sparkles, Heart, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/panchakarma/")({
  head: () => ({
    meta: [
      { title: "Panchakarma Therapies — Shree Vallabh Ayurveda" },
      { name: "description", content: "Explore the five classical purification therapies of Ayurveda: Vaman, Virechan, Basti, Nasya, and Raktamokshan." },
    ],
  }),
  component: Panchakarma,
});

const therapies = [
  { 
    name: "Vaman", 
    image: "/newimages/vaman.jpg", 
    to: "/panchakarma/vaman",
    desc: "Induced therapeutic vomiting to expel Kapha toxins from the body."
  },
  { 
    name: "Virechan", 
    image: "/newimages/virechan.webp", 
    to: "/panchakarma/virechan",
    desc: "Medicated purgation therapy for cleansing Pitta dosha and purifying blood."
  },
  { 
    name: "Nasya", 
    image: "/newimages/Nasya.jpg", 
    to: "/panchakarma/nassya",
    desc: "Nasal administration of medicated oils to clear the head, neck, and senses."
  },
  { 
    name: "Raktamokshan", 
    image: "/newimages/rakstmohan.webp", 
    to: "/panchakarma/raktamoshan",
    desc: "Blood-letting therapy to detoxify Raktadhatu and cure chronic skin disorders."
  },
  { 
    name: "Basti", 
    image: "/newimages/basti6.jpg", 
    to: "/panchakarma/basti",
    desc: "Medicated enema therapy, considered the mother of all Panchakarma treatments."
  },
  { 
    name: "Allied Karma", 
    image: "/assets/3JANUBASTI.jpg.jpeg", 
    to: "/panchakarma/allied-karma",
    desc: "Supportive therapies like Shirodhara, Kati Basti, and Janu Basti for localized relief."
  },
];

const benefits = [
  { icon: Sparkles, title: "Deep Detoxification", desc: "Removes deep-rooted stress and illness-causing toxins." },
  { icon: Heart, title: "Restores Balance", desc: "Balances the doshas (Vata, Pitta, Kapha) and improves health." },
  { icon: ShieldCheck, title: "Boosts Immunity", desc: "Strengthens the immune system and increases energy levels." },
];

function Panchakarma() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Treatments" 
        title="Panchakarma" 
        subtitle="The five classical purification therapies of Ayurveda for complete detoxification and rejuvenation." 
        image="/newimages/basti4.jpg" 
      />
      
      {/* Introduction Section */}
      <section className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">The Foundation of Health</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">What is Panchakarma?</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Panchakarma (meaning "Five Actions") is the ultimate mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance and well-being.
            </p>
            <p>
              According to Ayurveda, good health depends upon our capability to fully metabolize all aspects of life, assimilating that which nourishes and eliminating the rest. When we can't completely digest our food, experiences, and emotions, toxins accumulate in our bodily tissues, creating imbalance and disease.
            </p>
            <p>
              Panchakarma is an elegant cleansing process that releases stored toxins and restores the body's innate healing ability.
            </p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/newimages/ayurveda.jpg" alt="Ayurveda Healing" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-medium drop-shadow-md">Rejuvenate your mind, body, and soul through authentic classical therapies.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Why Panchakarma?</h2>
            <p className="mt-4 text-lg text-muted-foreground">The ultimate detox program for your mind and body.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card3D className="p-8 h-full bg-background border-gold/10 hover:border-gold/30 transition-colors">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <b.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display mb-3">{b.title}</h3>
                  <p className="text-muted-foreground">{b.desc}</p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies Grid */}
      <section className="container-page py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">Our Core Therapies</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">The Five Classical Actions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Each protocol is highly customized to your specific prakriti (body type) and doshic imbalances.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {therapies.map((therapy, i) => (
            <motion.div key={therapy.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={therapy.to as any} className="block group h-full">
                <Card3D className="h-full overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 flex flex-col">
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img src={therapy.image} alt={therapy.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-display text-white font-bold tracking-wide drop-shadow-md">
                        {therapy.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 bg-background flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {therapy.desc}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm group/link">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </Card3D>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container-page pb-24">
         <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <h2 className="font-display text-4xl md:text-5xl leading-tight relative z-10 max-w-3xl">Ready to rejuvenate your body and mind?</h2>
            <p className="mt-6 text-lg opacity-90 max-w-2xl relative z-10 mb-10">
              Book a consultation with Dr. Swapnil Bhanushali to discuss a personalized Panchakarma treatment plan for your specific health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
               <Link to="/contact" className="btn-gold px-8 py-4 text-lg">Book Consultation</Link>
               <a href="tel:+918652621285" className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-all font-medium text-lg">Call Us</a>
            </div>
         </div>
      </section>
    </Layout>
  );
}
