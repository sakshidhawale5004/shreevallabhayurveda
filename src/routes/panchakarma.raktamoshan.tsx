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
        image="/newimages/rakstmohan.webp" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-2">More Information</p>
            <h2 className="font-display text-4xl text-foreground mb-6 leading-tight">Blood Detoxification</h2>
            <p className="mb-6 font-medium text-foreground/80">
              It is the procedure of blood-letting. In this procedure, we take out the impure blood due to which a person is suffering from a disease. Hence this procedure detoxifies <strong>raktadhatu</strong> (Blood).
            </p>
            <p className="mb-6">
              It is a really very helpful & effective procedure. Not more than 10 to 50 ml of blood is taken out at one sitting. 
            </p>
            <p>
              <strong>Sharad rutu</strong> (the period between September to November) is a classical period for detoxification of your body through Raktamokshan.
            </p>
          </div>
          <div className="bg-secondary/40 p-8 rounded-2xl border border-gold/30 shadow-lg">
            <h3 className="font-display text-2xl text-foreground mb-4">Procedure Details</h3>
            <p className="text-foreground/80 font-medium">
              The pre-procedure includes <strong>Aabhyantar Snehapan</strong> (taking Ghee or oil orally). The amount of snehapan defers from patient to patient. At times, a whole body massage may also be required.
            </p>
          </div>
        </div>
        <Card3D className="p-8 md:p-12 bg-secondary/30 border-gold/20 shadow-xl">
          <h3 className="font-display text-4xl mb-6 text-foreground flex items-center gap-3">
            <Stethoscope className="text-gold h-10 w-10" />
            Indications
          </h3>
          <p className="mb-8 text-xl text-muted-foreground">Raktamokshana can be used in the treatment of the following diseases:</p>
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
            <img src="/newimages/raktamokshana4.jpg" alt="Raktamokshan Leech Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/rk6.jpg" alt="Raktamokshan Leech Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/leech.jpg" alt="Raktamokshan Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/LEECH1.jpg" alt="Raktamokshan Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/leech2.jpg" alt="Raktamokshan Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
