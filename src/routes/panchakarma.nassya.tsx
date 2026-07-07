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
        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-2">More Information</p>
            <h2 className="font-display text-4xl text-foreground mb-6 leading-tight">Urdhvanga Detoxification</h2>
            <p className="mb-6 font-medium text-foreground/80">
              It is one of the Panchkarma procedures mentioned in Ayurveda. It is a process by which drug is administered through the nostrils.
            </p>
            <p>
              This procedure detoxifies <strong>"urdhvanga"</strong> (body parts present above the shoulders). It can be done on a daily basis as well for the maintenance and unimpaired function of the urdhvanga.
            </p>
          </div>
          <div className="bg-secondary/40 p-8 rounded-2xl border border-gold/30 shadow-lg">
            <h3 className="font-display text-2xl text-foreground mb-4">Procedure Details</h3>
            <p className="text-foreground/80 font-medium">
              It also has a pre-procedure, procedure, and after-procedure. All procedures are typically done in a single sitting of one hour and provide rapid relief.
            </p>
          </div>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20 shadow-xl">
          <h3 className="font-display text-4xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-10 w-10" />
            Indications
          </h3>
          <p className="mb-8 text-xl text-muted-foreground">Nassya can be used in the treatment of all diseases occurring in the organs above the shoulders, including:</p>
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
            <img src="/newimages/nasya1.jpg" alt="Nassya Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/Nasya2.jpg" alt="Nassya Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/Nasya.jpg" alt="Nassya Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
