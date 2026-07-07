import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { motion } from "framer-motion";

export const Route = createFileRoute("/panchakarma/")({
  head: () => ({
    meta: [
      { title: "Panchakarma Therapies — Shree Vallabh Ayurveda" },
      { name: "description", content: "Explore the five classical purification therapies of Ayurveda: Vaman, Virechan, Basti, Nasya, and Raktamokshan." },
    ],
  }),
  component: Panchakarma,
});

const therapies = [
  { name: "VAMAN", image: "/newimages/vaman.png", to: "/panchakarma/vaman" },
  { name: "VIRECHAN", image: "/newimages/virechan.webp", to: "/panchakarma/virechan" },
  { name: "NASSYA", image: "/newimages/Nasya.jpg", to: "/panchakarma/nassya" },
  { name: "RAKTAMOSHAN", image: "/newimages/raktha.jpg", to: "/panchakarma/raktamoshan" },
  { name: "BASTI", image: "/newimages/basti.jpg", to: "/panchakarma/basti" },
];

function Panchakarma() {
  return (
    <Layout>
      <PageHero 
        eyebrow="Treatments" 
        title="Panchakarma" 
        subtitle="The five classical purification therapies of Ayurveda for complete detoxification and rejuvenation." 
        image="/newimages/basti.jpg" 
      />
      <section className="container-page py-24 min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="font-display text-4xl mb-16 text-center text-primary">Our Core Therapies</h2>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 max-w-5xl mx-auto">
          {therapies.map((therapy, i) => (
            <Link key={therapy.name} to={therapy.to as any} className="group flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-gold/30 group-hover:ring-gold group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
              >
                <img src={therapy.image} alt={therapy.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
              <h3 className="mt-6 text-xl font-display font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
                {therapy.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
