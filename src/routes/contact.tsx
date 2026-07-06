import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Card3D } from "@/components/site/Card3D";
import bg from "@/assets/bg_1.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Shree Vallabh Ayurveda" },
      { name: "description", content: "Book your consultation at our Seawoods or Nerul clinic in Navi Mumbai. Call +91 8652 621 285." },
      { property: "og:title", content: "Contact & Book Appointment" },
      { property: "og:description", content: "Two clinic locations in Navi Mumbai. Book online or call." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow="Get in Touch" title="Book your consultation" subtitle="Two clinic locations across Navi Mumbai. Speak with our team to plan your personalised program." image={bg.url} />

      <section className="container-page py-20 grid lg:grid-cols-3 gap-6">
        <Card3D className="p-8">
          <h3 className="font-display text-2xl text-primary">Seawoods Clinic</h3>
          <p className="mt-2 text-muted-foreground text-sm">Shop no 12, Shree Radha Krishna CHS, Plot No 33, beside Central Bank of India, Sector 42A, Seawoods West, Navi Mumbai.</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href="tel:+918652621285" className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 8652 621 285</a>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Mon-Sat · 10am – 8pm</div>
          </div>
        </Card3D>
        <Card3D className="p-8">
          <h3 className="font-display text-2xl text-primary">Nerul Clinic</h3>
          <p className="mt-2 text-muted-foreground text-sm">First Floor, A-53, Sangharsh Society, Above City Medical, Opposite Sarsole Bus Depot, Nerul Sector 6, Navi Mumbai 400706.</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href="tel:+919225301077" className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 9225 301 077</a>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Mon-Sat · 10am – 8pm</div>
          </div>
        </Card3D>
        <Card3D className="p-8">
          <h3 className="font-display text-2xl text-primary">Reach us</h3>
          <div className="mt-4 space-y-3 text-sm">
            <a href="mailto:swapnil@shreevallabhayurveda.com" className="flex items-start gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /> swapnil@shreevallabhayurveda.com</a>
            <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Serving Navi Mumbai & Mumbai</div>
            <p className="text-muted-foreground text-xs mt-4">Prefer WhatsApp? Message our Seawoods number for a callback within business hours.</p>
          </div>
        </Card3D>
      </section>

      <section className="container-page pb-24 grid lg:grid-cols-2 gap-8">
        <motion.form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="card-3d p-8"
        >
          <h3 className="font-display text-3xl">Send an enquiry</h3>
          <p className="text-muted-foreground text-sm mt-1">We'll respond within one working day.</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <label className="block">
              <span className="text-sm font-medium">Full name</span>
              <input required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Phone</span>
              <input required type="tel" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </label>
          </div>
          <label className="block mt-4">
            <span className="text-sm font-medium">Email</span>
            <input type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </label>
          <label className="block mt-4">
            <span className="text-sm font-medium">Concern / Condition</span>
            <input className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Thyroid, arthritis, general wellness…" />
          </label>
          <label className="block mt-4">
            <span className="text-sm font-medium">Message</span>
            <textarea rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </label>
          <button className="btn-primary mt-6 w-full sm:w-auto">Send Enquiry</button>
          {sent && <p className="text-green-700 text-sm mt-4">Thank you! We'll reach out shortly.</p>}
        </motion.form>

        <div className="card-3d overflow-hidden min-h-[420px]">
          <iframe
            title="Clinic location"
            src="https://www.google.com/maps?q=Seawoods+Sector+42A+Navi+Mumbai&output=embed"
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
