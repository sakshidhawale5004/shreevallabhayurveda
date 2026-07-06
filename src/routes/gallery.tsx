import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import cat1 from "@/assets/category-1.asset.json";
import cat2 from "@/assets/category-2.asset.json";
import cat3 from "@/assets/category-3.asset.json";
import cat4 from "@/assets/category-4.asset.json";
import panchakarma from "@/assets/panchakarma.asset.json";
import pizhichil from "@/assets/pizhichil.asset.json";
import nasyam from "@/assets/nasyam.asset.json";
import vashti from "@/assets/vashti.asset.json";
import janubasti from "@/assets/3JANUBASTI.asset.json";
import spine from "@/assets/spine.asset.json";
import artboard1 from "@/assets/artboard-1.asset.json";
import artboard2 from "@/assets/artboard-2.asset.json";
import artboard3 from "@/assets/artboard-3.asset.json";
import last from "@/assets/13LAST_PAGE.asset.json";
import download from "@/assets/download.asset.json";
import bg from "@/assets/bg_1.asset.json";

const images = [
  { src: panchakarma.url, label: "Panchakarma Room" },
  { src: pizhichil.url, label: "Pizhichil Therapy" },
  { src: vashti.url, label: "Basti Chikitsa" },
  { src: nasyam.url, label: "Nasya Karma" },
  { src: janubasti.url, label: "Janu Basti" },
  { src: spine.url, label: "Spine Therapy" },
  { src: cat1.url, label: "Consultation Room" },
  { src: cat2.url, label: "Herb Pharmacy" },
  { src: cat3.url, label: "Waiting Lounge" },
  { src: cat4.url, label: "Therapy Suite" },
  { src: artboard1.url, label: "Clinic Highlights" },
  { src: artboard2.url, label: "Awards" },
  { src: artboard3.url, label: "Media Feature" },
  { src: last.url, label: "Dr. Bhanushali" },
  { src: download.url, label: "Team" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Shree Vallabh Ayurveda Clinic" },
      { name: "description", content: "Explore our Panchakarma therapy suites, herbal pharmacy and clinic environment across Seawoods and Nerul." },
      { property: "og:title", content: "Clinic Gallery" },
      { property: "og:description", content: "A visual tour of our authentic Ayurveda & Panchakarma facilities." },
      { property: "og:image", content: cat1.url },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <Layout>
      <PageHero eyebrow="Visual Tour" title="Inside our clinic" subtitle="Traditional therapy rooms, in-house medicated oils and a serene, healing environment." image={bg.url} />
      <section className="container-page py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <motion.figure key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.05 }} className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-3d">
              <img src={img.src} alt={img.label} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition">
                <span className="font-display text-lg">{img.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
