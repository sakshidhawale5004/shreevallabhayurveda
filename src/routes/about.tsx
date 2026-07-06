import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Users, Heart } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import doctor from "@/assets/13LAST_PAGE.asset.json";
import bg from "@/assets/bg_1.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Swapnil Bhanushali — Shree Vallabh Ayurveda" },
      { name: "description", content: "Dr. Swapnil Bhanushali directs Shree Vallabh Ayurveda & Panchakarma clinic in Navi Mumbai — authentic classical Ayurveda serving 10,000+ patients." },
      { property: "og:title", content: "About Dr. Swapnil Bhanushali" },
      { property: "og:description", content: "Meet the doctor behind Shree Vallabh Ayurveda & Panchakarma." },
      { property: "og:image", content: "/assets/product-15.jpg.jpeg" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero eyebrow="About" title="Dr. Swapnil Bhanushali" subtitle="Director of Dr. Bhanushali's Shree Vallabh Ayurveda & Panchakarma — an authentic clinic devoted to root-cause healing." image={bg.url} />

      <section className="container-page py-20 grid lg:grid-cols-5 gap-14 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
          <Card3D><img src="/assets/product-15.jpg.jpeg" alt="Dr. Swapnil Bhanushali" className="w-full aspect-[4/5] object-cover" /></Card3D>
        </motion.div>
        <div className="lg:col-span-3">
          <p className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">All About Dr. Bhanushali</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2 leading-tight">A dedicated life in service of authentic Ayurveda.</h2>
          <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>Dr Swapnil Bhanushali is the director of the Dr Bhanushali’s Shree Vallabh Ayurveda and Panchakarma clinic; an authentic Ayurveda and Panchakarma clinic devoted to helping the patients and families with the optimum use of Ayurveda and Panchakarma to address the root cause of the disease. Dr Bhanushali’s Shree Vallabh Ayurveda clinic is the leading provider of true health and sustainable health service based on proven principles of Ayurveda..</p>
            <p>The clinic’s patient portfolio includes more than <strong className="text-foreground">10000 patients</strong>. The complete dedicated team of Dr Swapnil Bhanushali and his Panchakarma therapist is duty bound towards patients; to carry out panchakarma adequately.</p>
            <blockquote className="border-l-4 border-gold pl-5 italic text-foreground">
              Our mission is to “Maintain the health of healthy individual and treat the diseased individual with Ayurveda to regain the true health”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h3 className="font-display text-3xl mb-8">Complete body rejuvenation through Panchakarma</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { t: "Vaman", d: "(induced vomiting)" },
            { t: "Virechana", d: "(induced Purgation)" },
            { t: "Basti", d: "(medicated enema)" },
            { t: "Nasya", d: "(Nasal administration)" },
            { t: "Raktamokshan", d: "(blood letting)" },
          ].map((p) => (
            <Card3D key={p.t} className="p-6">
              <CheckCircle2 className="h-6 w-6 text-gold mb-3" />
              <div className="font-display text-xl">{p.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{p.d}</div>
            </Card3D>
          ))}
        </div>
      </section>

      <section className="container-page py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: GraduationCap, t: "Classical Training", d: "Rigorous Ayurveda education grounded in Charaka, Sushruta and Ashtanga Hridaya." },
          { icon: Users, t: "Team of Therapists", d: "A dedicated team of traditionally trained Panchakarma therapists for authentic delivery." },
          { icon: Heart, t: "Patient-First Ethic", d: "Every plan is customised. Progress is tracked with modern diagnostics for accountability." },
        ].map((c) => (
          <Card3D key={c.t} className="p-8">
            <c.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-2xl">{c.t}</h3>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
          </Card3D>
        ))}
      </section>
    </Layout>
  );
}
