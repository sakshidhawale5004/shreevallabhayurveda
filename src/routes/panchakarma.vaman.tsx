import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { CheckCircle2, Stethoscope, Droplets } from "lucide-react";

export const Route = createFileRoute("/panchakarma/vaman")({
  head: () => ({
    meta: [
      { title: "Vaman Treatment — Shree Vallabh Ayurveda" },
      { name: "description", content: "Vaman is an ayurvedic panchkarma procedure of therapeutic emesis to eliminate kapha dosha." },
    ],
  }),
  component: Vaman,
});

const uses = [
  "Chronic cough & Cold",
  "Rhinitis & Sinusitis",
  "Asthma & Tuberculosis",
  "Skin Diseases & Psoriasis",
  "Obesity & Hyperlipidemia",
  "Throat & Chest infections",
  "Tonsillitis & Urticaria",
  "Rheumatoid Arthritis",
  "Diabetes & Indigestion",
  "Allergic disorders & P.C.O.D."
];

function Vaman() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Panchakarma" 
        title="Vaman" 
        subtitle="Therapeutic emesis for Kapha dosha detoxification." 
        image="/newimages/vaman.jpg" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-2">More Information</p>
            <h2 className="font-display text-4xl text-foreground mb-6 leading-tight">Kapha Dosha Detoxification</h2>
            <p className="mb-6 font-medium text-foreground/80">
              Vaman is an Ayurvedic Panchkarma procedure of therapeutic emesis. It is a procedure of body detoxification, by which <strong>Kapha dosha</strong> is eliminated from the body.
            </p>
            <p>
              <strong>Vasant rutu</strong> (the period between February to April) is a classical period for detoxification of your body through Vamana.
            </p>
          </div>
          <div className="bg-secondary/40 p-8 rounded-2xl border border-gold/30 shadow-lg">
            <h3 className="font-display text-2xl text-foreground mb-4">Procedure Details</h3>
            <p className="text-foreground/80 font-medium">
              Vamana is one of the major Panchkarma procedures in the Ayurvedic system of medicine. It takes almost 15 days to accomplish and is divided into three parts: Pre-Procedure, Procedure, and Post-Procedure.
            </p>
          </div>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20 shadow-xl">
          <h3 className="font-display text-4xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-10 w-10" />
            Indications
          </h3>
          <p className="mb-8 text-xl text-muted-foreground">Vamana can be used in prophylactic treatment and for the following diseases:</p>
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
    </Layout>
  );
}
