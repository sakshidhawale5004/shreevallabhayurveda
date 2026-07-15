import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { HeartHandshake, Baby } from "lucide-react";

export const Route = createFileRoute("/garbhasanskar")({
  head: () => ({
    meta: [
      { title: "Ayurvedic Medicinal Garbhasanskar — Shree Vallabh Ayurveda" },
      { name: "description", content: "We believe and promote ayurvedic medicinal Garbhasanskar for a healthy baby and to help mothers enjoy an easy pregnancy." },
    ],
  }),
  component: Garbhasanskar,
});

function Garbhasanskar() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Specialty" 
        title="Garbhasanskar" 
        subtitle="Ayurvedic Medicinal Garbhasanskar for a healthy pregnancy and a divine child." 
        image="/newimages/minimal-abstract-background-with-shadow-tropical-palm-leaves-green-background.jpg" 
      />
      <section className="container-page py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold">About Garbhasanskar</p>
          <h2 className="font-display text-4xl text-foreground mb-6">A Complete Pregnancy Care Guideline</h2>
          <p>
            We promote and believe in Ayurvedic Garbhasanskar which helps especially the mother to enjoy a healthy motherhood & the child to grow healthy, intelligent, and active. 
          </p>
          <p>
            Garbhasanskar is a method that has been practiced for many generations to have a healthy child and a healthy motherhood. It is a time-tested formula we can trust upon. It is this nine months decisive period when maximum efforts are to be taken for the betterment of the offspring. 
          </p>
          <p>
            Today science has proved that the unborn baby can not only listen and feel but respond in its own way. <strong>60% of brain development occurs in the intrauterine period.</strong>
          </p>
          <p>
            Garbhasanskar means developing a civilized, cultured, decorative, purified impressible, sensitive but still physically, mentally, spiritually, and emotionally stable population.
          </p>
        </div>
        <div className="space-y-8">
          <Card3D className="p-8 md:p-10 bg-secondary/30 border-gold/20">
            <h3 className="font-display text-2xl mb-4 text-foreground flex items-center gap-3">
              <HeartHandshake className="text-gold h-8 w-8" />
              Benefits for the Mother
            </h3>
            <p className="text-muted-foreground">
              It assures a pregnancy without complications, helps to maintain the physical and mental well-being of the mother, prevents common pregnancy ailments, and facilitates a smooth and natural delivery.
            </p>
          </Card3D>

          <Card3D className="p-8 md:p-10 bg-secondary/30 border-gold/20">
            <h3 className="font-display text-2xl mb-4 text-foreground flex items-center gap-3">
              <Baby className="text-gold h-8 w-8" />
              Benefits for the Child
            </h3>
            <p className="text-muted-foreground">
              Ensures optimum growth and development of the fetus, enhances the child's immunity, intelligence, and emotional quotient (EQ) right from the womb.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="container-page pb-24">
        <h3 className="font-display text-4xl mb-10 text-center text-foreground">
          Treatment Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/GARBHASANKAR1.jpg" alt="Garbhasanskar Treatment" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/GARBHASANKAR2.jpg" alt="Garbhasanskar Therapy" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg card-3d">
            <img src="/newimages/GARBHASANKAR3.jpg" alt="Garbhasanskar Process" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
