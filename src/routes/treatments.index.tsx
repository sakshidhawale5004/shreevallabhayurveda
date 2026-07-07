import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/lib/treatments";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Specialised Treatments — Shree Vallabh Ayurveda" },
      { name: "description", content: "Explore our specialised Ayurvedic treatments for Heart Disease, Stroke, Thyroid, Infertility, and Arthritis." },
    ],
  }),
  component: TreatmentsIndex,
});

function TreatmentsIndex() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Specialisations" 
        title="Our Specialised Treatments" 
        subtitle="Classical Ayurvedic protocols designed to address the root causes of chronic and lifestyle diseases." 
        image="/newimages/heart-disease.jpg" 
      />

      <section className="container-page py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t) => (
            <Card3D key={t.slug} className="group">
              <div className="h-56 overflow-hidden">
                <img 
                  src={t.image} 
                  alt={t.title} 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-primary">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{t.short}</p>
                <Link 
                  to={`/treatments/${t.slug}`}
                  className="mt-6 inline-flex items-center text-primary font-medium hover:text-gold transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Card3D>
          ))}
        </div>
      </section>
    </Layout>
  );
}
