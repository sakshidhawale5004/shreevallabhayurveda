import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import { ArrowRight, Leaf, Activity, Stethoscope, HeartHandshake } from "lucide-react";
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

      {/* Intro Section */}
      <section className="container-page py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-5xl text-primary">Healing from the Root</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Shree Vallabh Ayurveda, we don't just treat symptoms; we identify and address the root cause of your ailment. Our specialised treatment programs combine ancient Ayurvedic wisdom, authentic Panchakarma detoxification, and modern diagnostics to bring your body back into its natural state of balance.
          </p>
          <div className="pt-4 flex justify-center gap-8 text-primary">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-gold" />
              </div>
              <span className="text-sm font-medium">Expert Diagnosis</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-gold" />
              </div>
              <span className="text-sm font-medium">Herbal Remedies</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Activity className="h-6 w-6 text-gold" />
              </div>
              <span className="text-sm font-medium">Panchakarma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="bg-primary/5 py-24">
        <div className="container-page">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary">Explore Our Programs</h2>
            <p className="mt-4 text-muted-foreground">Select a treatment below to learn more about our approach, expected benefits, and core therapies involved.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <Card3D key={t.slug} className="group bg-background shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden rounded-t-2xl">
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
                    className="mt-6 inline-flex items-center text-primary font-medium group-hover:text-gold transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-page py-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <HeartHandshake className="h-64 w-64 text-gold" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-gold">Ready to start your healing journey?</h2>
            <p className="mt-6 text-lg opacity-90 leading-relaxed">
              Every body is unique, and so is every disease. Book a consultation with Dr. Swapnil Bhanushali to receive a personalised diagnosis and treatment plan tailored specifically to your body constitution (Prakriti).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold px-8 py-4 text-lg">
                Book a Consultation
              </Link>
              <a href="tel:+918652621285" className="inline-flex items-center px-8 py-4 text-lg rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors">
                Call Seawoods Clinic
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
