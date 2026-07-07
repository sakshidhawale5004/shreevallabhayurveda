import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { CheckCircle2, Sparkles, Droplets, Heart } from "lucide-react";

export const Route = createFileRoute("/panchakarma/allied-karma")({
  head: () => ({
    meta: [
      { title: "Allied Karma Treatments — Shree Vallabh Ayurveda" },
      { name: "description", content: "Explore our specialized Allied Karma therapies including Shirodhara, Kati Basti, and Potli massage for holistic healing." },
    ],
  }),
  component: AlliedKarma,
});

const therapies = [
  { name: "Shirodhara", desc: "A continuous flow of warm herbal oil on the forehead, deeply relaxing the nervous system." },
  { name: "Kati Basti", desc: "Pooling of warm medicated oil over the lower back to relieve pain and stiffness." },
  { name: "Janu Basti", desc: "Specialized knee joint therapy using warm herbal oils to combat arthritis and pain." },
  { name: "Griva Basti", desc: "Neck therapy to treat cervical spondylosis and neck stiffness." },
  { name: "Patra Pinda Sweda (Potli)", desc: "Massage using heated herbal pouches to alleviate joint and muscle pain." },
  { name: "Netra Tarpana", desc: "Eye rejuvenation therapy using medicated ghee." }
];

function AlliedKarma() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Panchakarma" 
        title="Allied Karma" 
        subtitle="Specialized localized therapies to complement deep detoxification." 
        image="/newimages/ALLIEDKARMABGIMAGE.jpg" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-2">More Information</p>
            <h2 className="font-display text-4xl text-foreground mb-6 leading-tight">Holistic Healing Beyond the Five Karmas</h2>
            <p className="mb-6 font-medium text-foreground/80">
              While the five main Panchakarma procedures focus on total body detoxification, <strong className="text-primary">Allied Karmas</strong> (Upa-Karmas) are specialized, localized therapies designed to target specific areas of pain, stress, or imbalance.
            </p>
            <p>
              These therapies utilize the healing power of warm medicated oils, herbal powders, and steam to provide immediate relief from joint pain, neurological disorders, stress, and localized inflammation. They are often used as preparatory procedures or standalone treatments for maximum therapeutic benefit.
            </p>
          </div>
          
          <div className="bg-secondary/40 p-8 rounded-2xl border border-gold/30 shadow-lg">
            <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
              <Heart className="text-gold h-6 w-6" />
              Why Choose Allied Karma?
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3"><CheckCircle2 className="text-gold h-6 w-6 shrink-0" /> <span>Immediate relief from localized pain and stiffness.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-gold h-6 w-6 shrink-0" /> <span>Deep relaxation of the mind and nervous system.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-gold h-6 w-6 shrink-0" /> <span>Improves blood circulation and joint mobility.</span></li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="font-display text-4xl mb-6 text-foreground flex items-center gap-3">
            <Sparkles className="text-gold h-10 w-10" />
            Key Therapies
          </h3>
          <div className="grid gap-6">
            {therapies.map((therapy) => (
              <Card3D key={therapy.name} className="p-6 md:p-8 bg-background border-gold/20 hover:border-gold/50 transition-colors">
                <h4 className="font-display text-2xl text-primary mb-3 flex items-center gap-2">
                  <Droplets className="h-5 w-5" /> {therapy.name}
                </h4>
                <p className="text-lg text-muted-foreground">{therapy.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <h3 className="font-display text-4xl mb-10 text-center text-foreground">
          Treatment Gallery
        </h3>
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/ALLIEDKARMA.png" alt="Allied Karma Treatment" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
