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
        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-2">More Information</p>
            <h2 className="font-display text-4xl text-foreground mb-6 leading-tight">Ardhachikitsa — The Half Treatment</h2>
            <p className="mb-6 font-medium text-foreground/80">
              It is the procedure of therapeutic enema. It is considered to be one of the most important Panchkarma procedures because it can correctly control and eliminate the Vata dosha. 
            </p>
            <p className="mb-6">
              According to Ayurvedic belief, Vata plays a major role in the pathogenesis of a disease, hence Basti treatment can be used for almost all diseases. It is termed as <strong>"ardhachikitsa"</strong> (half of all treatments). 
            </p>
            <p>
              <strong>Varsha rutu</strong> (the period between July to September) is the classical period for detoxification of your body through Basti. Depending on the type and quantity of medicines, the number of sittings, and the mode of administration, Basti has many types and sub-types.
            </p>
          </div>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20 shadow-xl">
          <h3 className="font-display text-4xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-10 w-10" />
            Indications
          </h3>
          <p className="mb-8 text-xl text-muted-foreground">Basti can treat each and every disease. Common indications include:</p>
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
            <img src="/newimages/basti1.jpg" alt="Basti Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/basti2.jpg" alt="Basti Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/basti.jpg" alt="Basti Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
