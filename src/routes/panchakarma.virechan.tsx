import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { CheckCircle2, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/panchakarma/virechan")({
  head: () => ({
    meta: [
      { title: "Virechan Treatment — Shree Vallabh Ayurveda" },
      { name: "description", content: "Virechan is an ayurvedic panchkarma procedure of medicated purgation." },
    ],
  }),
  component: Virechan,
});

const uses = [
  "Hyperacidity & Indigestion",
  "Skin Diseases & Psoriasis",
  "Obesity & Hyperlipidemia",
  "Paralysis & Gout",
  "Allergies & Fever",
  "Diabetes & Tumors",
  "Worm infections & Herpes",
  "Headache & Migraine",
  "Heart & Liver Diseases",
  "P.C.O.D. & Urticaria"
];

function Virechan() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Panchakarma" 
        title="Virechan" 
        subtitle="Medicated purgation for Pitta dosha elimination." 
        image="/newimages/virechan.webp" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-2">More Information</p>
            <h2 className="font-display text-4xl text-foreground mb-6 leading-tight">Pitta Dosha Detoxification</h2>
            <p className="mb-6 font-medium text-foreground/80">
              Virechan is an Ayurvedic Panchkarma procedure of medicated purgation. It is a procedure for body detoxification through which <strong>Pitta dosha</strong> is eliminated from the body.
            </p>
            <p>
              <strong>Sharad rutu</strong> (the period between September to November) is a classical period for detoxification of your body through Virechan.
            </p>
          </div>
          <div className="bg-secondary/40 p-8 rounded-2xl border border-gold/30 shadow-lg">
            <h3 className="font-display text-2xl text-foreground mb-4">Procedure Details</h3>
            <p className="text-foreground/80 font-medium">
              Virechan is the second major Panchkarma procedure in Ayurvedic medicine. It takes almost 15 days to accomplish and is divided into three parts: Pre-Procedure, Procedure, and Post-Procedure.
            </p>
          </div>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20 shadow-xl">
          <h3 className="font-display text-4xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-10 w-10" />
            Indications
          </h3>
          <p className="mb-8 text-xl text-muted-foreground">Virechan is highly effective for Intestinal Cleansing and General Detoxification alongside:</p>
          <ul className="grid sm:grid-cols-1 gap-5 text-lg">
            {uses.map((use) => (
              <li key={use} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground/80 font-medium">{use}</span>
              </li>
            ))}
          </ul>
        </Card3D>
      </section>

      <section className="container-page pb-24">
        <h3 className="font-display text-4xl mb-10 text-center text-foreground">
          Treatment Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/virechan.webp" alt="Virechan Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/assets/category-2.jpg.jpeg" alt="Virechan Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/assets/product-4.jpg.jpeg" alt="Virechan Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
