import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import bg from "@/assets/bg_1.asset.json";

const videos = [
  { id: "-7zTfavSQYw", title: "Dr. Bhanushali on Ayurveda" },
  { id: "0uqVQ9RO2xE", title: "Panchakarma Explained" },
  { id: "yeG9a0SKdZ8", title: "Clinic Introduction" },
  { id: "PGTLSU0o1Uc", title: "Patient Journey" },
  { id: "wko8M29tkvg", title: "Ayurvedic Lifestyle Tips" },
  { id: "xI4h8xajoKI", title: "Diet & Doshas" },
  { id: "5WsQhRw1REk", title: "TV Interview with Dr. Bhanushali" },
];

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Dr. Bhanushali's Ayurveda TV & Talks" },
      { name: "description", content: "Watch TV interviews, patient journeys and Ayurveda lifestyle talks by Dr. Swapnil Bhanushali." },
      { property: "og:title", content: "Videos & Media" },
      { property: "og:description", content: "TV interviews, Panchakarma explainers, patient stories and more." },
    ],
  }),
  component: Videos,
});

function Videos() {
  return (
    <Layout>
      <PageHero eyebrow="Media" title="Videos, Interviews & Talks" subtitle="Insights from Dr. Bhanushali — Ayurveda for modern life, patient journeys and classical Panchakarma explained." image="/newimages/hero-videos.jpg" />
      <section className="container-page py-20 grid md:grid-cols-2 gap-8">
        {videos.map((v, i) => (
          <motion.div key={v.id + i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }} className="card-3d overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl">{v.title}</h3>
            </div>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}
