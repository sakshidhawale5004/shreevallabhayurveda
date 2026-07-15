import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import bg from "@/assets/bg_1.asset.json";

const testimonials = [
  { n: "Ganesh Gokhale", when: "a month ago", h: "Dr. Bhanushali is an authentic Ayurvedic practitioner.", q: "He doesn't treat you only but also explains the root causes. He also helps you correct your lifestyle and diet to balance vata, pitta and kapha." },
  { n: "Neelam Gheewala", when: "3 months ago", h: "A very thorough knowledge of Ayurveda.", q: "He keeps updating himself with more information as per the situations he sees around him. I have felt much better after getting treated. I am a diabetic of 25 years and have been treated by many doctors — by far I have found Dr. Bhanushali's treatment both effective and soulful. I highly recommend his treatment and advice." },
  { n: "Neeraj Chaporkar", when: "4 months ago", h: "Underwent पंचकर्म and immensely benefited.", q: "Dr. Bhanushali not only guides on medicines and precautions, he also guides on spiritual aspects. Keep up the good work doctor." },
  { n: "Sawanpaul Pathak", when: "14 months ago", h: "Very humble and a very good-hearted person.", q: "His treatment is the best and 100% curable." },
  { n: "Vishal Galhotra", when: "a month ago", h: "A genuine medical practitioner and a great human being.", q: "Understands your ailment promptly and prescribes the best-suited cure for your body. We had a satisfying experience in a week's time though other doctors made us run pillar to post for months together for the same ailment." },
  { n: "Rakhi Kansara", when: "a year ago", h: "Dr. Swapnil is a very nice doctor.", q: "He not only treats his patients with his medications but also does lots of research and finds out the best possible way to cure his patients. Through his health mantras, a person can find the best track for a happy and healthy life." },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials — Shree Vallabh Ayurveda" },
      { name: "description", content: "Real stories from patients healed at Dr. Bhanushali's Shree Vallabh Ayurveda & Panchakarma clinic in Navi Mumbai." },
      { property: "og:title", content: "Patient Testimonials" },
      { property: "og:description", content: "10,000+ patients trust Dr. Bhanushali. Read their stories." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <Layout>
      <PageHero eyebrow="Patient Voices" title="What our patients say" subtitle="Every recovery is a story of trust, dedication and authentic Ayurveda." image="/newimages/elevated-view-various-spa-products-grey-backdrop.jpg" />
      <section className="container-page py-20 grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}>
            <Card3D className="p-8 h-full">
              <Quote className="h-10 w-10 text-gold mb-3" />
              <div className="flex gap-1 mb-3">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <h3 className="font-display text-xl leading-snug">{t.h}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.q}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display text-lg text-primary">{t.n}</span>
                <span className="text-xs text-muted-foreground">{t.when}</span>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}
