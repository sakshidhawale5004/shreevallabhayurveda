import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { CheckCircle2, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/panchakarma/raktamoshan")({
  head: () => ({
    meta: [
      { title: "Raktamokshan Treatment — Shree Vallabh Ayurveda" },
      { name: "description", content: "Raktamokshan is the procedure of blood-letting that detoxifies raktadhatu (Blood)." },
    ],
  }),
  component: Raktamoshan,
});

const uses = [
  "Skin diseases (All types)",
  "Psoriasis & Leukoderma",
  "Hyperlipidemia",
  "Heart Disease",
  "Acne & Pimples",
  "Gout",
  "Obesity",
  "Vertigo",
  "Herpes Infections",
  "General Detoxification"
];

function Raktamoshan() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Panchakarma" 
        title="Raktamokshan" 
        subtitle="Blood-letting therapy to detoxify Raktadhatu." 
        image="/newimages/raktha.jpg" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold">About Raktamokshan</p>
          <h2 className="font-display text-4xl text-foreground mb-6">Blood Detoxification</h2>
          <p>
            It is the procedure of blood-letting. In this procedure, we take out the impure blood due to which a person is suffering from a disease. Hence this procedure detoxifies <strong>raktadhatu</strong> (Blood).
          </p>
          <p>
            It is a really very helpful & effective procedure. Not more than 10 to 50 ml of blood is taken out at one sitting. 
          </p>
          <p>
            <strong>Sharad rutu</strong> (the period between September to November) is a classical period for detoxification of your body through Raktamokshan.
          </p>
          <h3 className="font-display text-2xl text-foreground mt-8 mb-4">Procedure Details</h3>
          <p>
            The pre-procedure includes <strong>Aabhyantar Snehapan</strong> (taking Ghee or oil orally). The amount of snehapan defers from patient to patient. At times, a whole body massage may also be required.
          </p>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20">
          <h3 className="font-display text-3xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-8 w-8" />
            Indications
          </h3>
          <p className="mb-6 text-muted-foreground">Raktamokshana can be used in the treatment of the following diseases:</p>
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
