import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { CheckCircle2, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/panchakarma/basti")({
  head: () => ({
    meta: [
      { title: "Basti Treatment — Shree Vallabh Ayurveda" },
      { name: "description", content: "Basti treatment is one of the most important Panchkarma procedures for controlling and eliminating Vata dosha." },
    ],
  }),
  component: Basti,
});

const uses = [
  "Arthritis & Gout",
  "Cervical & Lumbar Spondylosis",
  "Rheumatoid Arthritis",
  "Paralysis & Parkinsonism",
  "Hyperactivity & Piles",
  "Jaundice & Diabetes",
  "Heart Disease & Hypertension",
  "Hyperlipidemia & Asthma",
  "Renal Disorders & Cancer",
  "Skin disorders like Pimples"
];

function Basti() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Panchakarma" 
        title="Basti" 
        subtitle="The profound therapeutic enema for controlling Vata dosha and addressing the root of all diseases." 
        image="/newimages/basti.jpg" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold">About Basti</p>
          <h2 className="font-display text-4xl text-foreground mb-6">Ardhachikitsa — The Half Treatment</h2>
          <p>
            It is the procedure of therapeutic enema. It is considered to be one of the most important Panchkarma procedures because it can correctly control and eliminate the Vata dosha. 
          </p>
          <p>
            According to Ayurvedic belief, Vata plays a major role in the pathogenesis of a disease, hence Basti treatment can be used for almost all diseases. It is termed as <strong>"ardhachikitsa"</strong> (half of all treatments). 
          </p>
          <p>
            <strong>Varsha rutu</strong> (the period between July to September) is the classical period for detoxification of your body through Basti. Depending on the type and quantity of medicines, the number of sittings, and the mode of administration, Basti has many types and sub-types.
          </p>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20">
          <h3 className="font-display text-3xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-8 w-8" />
            Indications
          </h3>
          <p className="mb-6 text-muted-foreground">Basti can treat each and every disease. Common indications include:</p>
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
