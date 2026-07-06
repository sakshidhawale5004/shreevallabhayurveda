import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Card3D } from "@/components/site/Card3D";
import { treatmentBySlug, treatments } from "@/lib/treatments";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const t = treatmentBySlug(params.slug);
    if (!t) throw notFound();
    return { treatment: t };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Treatment not found" }, { name: "robots", content: "noindex" }] };
    const t = loaderData.treatment;
    return {
      meta: [
        { title: `${t.title} — Shree Vallabh Ayurveda` },
        { name: "description", content: t.short },
        { property: "og:title", content: t.title },
        { property: "og:description", content: t.short },
        { property: "og:image", content: t.image },
        { property: "twitter:image", content: t.image },
      ],
    };
  },
  component: TreatmentPage,
  notFoundComponent: () => (
    <Layout>
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-4xl">Treatment not found</h1>
        <Link to="/" className="btn-primary mt-6 inline-flex">Back home</Link>
      </div>
    </Layout>
  ),
});

function TreatmentPage() {
  const { treatment: t } = Route.useLoaderData() as { treatment: import("@/lib/treatments").Treatment };
  const related = treatments.filter((x) => x.slug !== t.slug).slice(0, 3);
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={t.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Ayurvedic Programme</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">{t.title}</h1>
            <p className="mt-5 text-lg opacity-90">{t.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Book Consultation</Link>
              <a href="tel:+918652621285" className="inline-flex items-center px-6 py-3 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground/10 transition">Call the Doctor</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-page py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-xl leading-relaxed font-display italic text-primary">{t.intro}</p>
          {t.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-lg">{p}</p>
          ))}
        </div>
        <aside className="space-y-6">
          <Card3D className="p-6">
            <h3 className="font-display text-2xl flex items-center gap-2"><Sparkles className="h-5 w-5 text-gold" /> Expected Benefits</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {t.benefits.map((b) => (
                <li key={b} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {b}</li>
              ))}
            </ul>
          </Card3D>
          <Card3D className="p-6 bg-primary text-primary-foreground">
            <h3 className="font-display text-2xl text-gold">Core Therapies</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {t.therapies.map((th) => (
                <li key={th} className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" /> {th}</li>
              ))}
            </ul>
          </Card3D>
        </aside>
      </section>

      <section className="container-page py-16">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground p-10 md:p-14 relative overflow-hidden shadow-elegant">
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Ready to begin your {t.title.toLowerCase()} program?</h2>
              <p className="mt-3 opacity-85">A short assessment call helps us design the right protocol for you.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Link to="/contact" className="btn-gold">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <h3 className="font-display text-3xl mb-8">Explore other programs</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((r) => (
            <Card3D key={r.slug} className="group">
              <div className="h-48 overflow-hidden">
                <img src={r.image} alt={r.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl">{r.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.short}</p>
                <Link to="/treatments/$slug" params={{ slug: r.slug }} className="mt-3 inline-flex items-center text-primary font-medium text-sm">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </div>
            </Card3D>
          ))}
        </div>
      </section>
    </Layout>
  );
}
