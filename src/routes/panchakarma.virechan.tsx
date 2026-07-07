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
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold">About Virechan</p>
          <h2 className="font-display text-4xl text-foreground mb-6">Pitta Dosha Detoxification</h2>
          <p>
            Virechan is an Ayurvedic Panchkarma procedure of medicated purgation. It is a procedure for body detoxification through which <strong>Pitta dosha</strong> is eliminated from the body.
          </p>
          <p>
            <strong>Sharad rutu</strong> (the period between September to November) is a classical period for detoxification of your body through Virechan.
          </p>
          <h3 className="font-display text-2xl text-foreground mt-8 mb-4">Procedure Details</h3>
          <p>
            Virechan is the second major Panchkarma procedure in Ayurvedic medicine. It takes almost 15 days to accomplish and is divided into three parts: Pre-Procedure, Procedure, and Post-Procedure.
          </p>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20">
          <h3 className="font-display text-3xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-8 w-8" />
            Indications
          </h3>
          <p className="mb-6 text-muted-foreground">Virechan is highly effective for Intestinal Cleansing and General Detoxification alongside:</p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {uses.map((use) => (
              <li key={use} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground/80">{use}</span>
              </li>
            ))}
          </ul>
        </Card3D>
      </section>
    </Layout>
  );
}
