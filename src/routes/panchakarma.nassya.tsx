import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { CheckCircle2, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/panchakarma/nassya")({
  head: () => ({
    meta: [
      { title: "Nassya Treatment — Shree Vallabh Ayurveda" },
      { name: "description", content: "Nasya Karma is an Ayurveda Panchkarma procedure by which drug is administered through the nostrils." },
    ],
  }),
  component: Nassya,
});

const uses = [
  "Cervical Spondylosis",
  "Migraine & Headache",
  "Dental pain",
  "Paralysis & Tremors",
  "Chronic cough & Cold",
  "Rhinitis & Sinusitis",
  "Asthma & Tonsillitis",
  "Skin Diseases & Psoriasis",
  "Eye, Ear & Throat disorders",
  "Hair Fall & Dandruff"
];

function Nassya() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Panchakarma" 
        title="Nassya" 
        subtitle="Nasal administration therapy for the organs above the shoulders." 
        image="/newimages/Nasya.jpg" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold">About Nassya</p>
          <h2 className="font-display text-4xl text-foreground mb-6">Urdhvanga Detoxification</h2>
          <p>
            It is one of the Panchkarma procedures mentioned in Ayurveda. It is a process by which drug is administered through the nostrils.
          </p>
          <p>
            This procedure detoxifies <strong>"urdhvanga"</strong> (body parts present above the shoulders). It can be done on a daily basis as well for the maintenance and unimpaired function of the urdhvanga.
          </p>
          <h3 className="font-display text-2xl text-foreground mt-8 mb-4">Procedure Details</h3>
          <p>
            It also has a pre-procedure, procedure, and after-procedure. All procedures are typically done in a single sitting of one hour and provide rapid relief.
          </p>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20">
          <h3 className="font-display text-3xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-8 w-8" />
            Indications
          </h3>
          <p className="mb-6 text-muted-foreground">Nassya can be used in the treatment of all diseases occurring in the organs above the shoulders, including:</p>
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
