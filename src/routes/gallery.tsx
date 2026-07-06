import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
const images = [
  { src: "/assets/category-2.jpg.jpeg", label: "Herb Pharmacy" },
  { src: "/assets/img.PNG.png", label: "Clinic Front" },
  { src: "/assets/img2.PNG.png", label: "Reception" },
  { src: "/assets/thyroid.jpg.jpeg", label: "Thyroid Care" },
  { src: "/assets/product-1.jpg.jpeg", label: "Herbal Medicine" },
  { src: "/assets/product-2.jpg.jpeg", label: "Ayurvedic Formulations" },
  { src: "/assets/product-3.jpg.jpeg", label: "Classical Churnas" },
  { src: "/assets/product-4.jpg.jpeg", label: "Wellness Kits" },
  { src: "/assets/product-5.jpg.jpeg", label: "Organic Herbs" },
  { src: "/assets/product-7.jpg.jpeg", label: "Immunity Boosters" },
  { src: "/assets/product-8.jpg.jpeg", label: "Panchakarma Supplies" },
  { src: "/assets/product-9.jpg.jpeg", label: "Natural Supplements" },
  { src: "/assets/product-10.jpg.jpeg", label: "Healing Balms" },
  { src: "/assets/product-11.jpg.jpeg", label: "Therapeutic Oils" },
  { src: "/assets/product-12.jpg.jpeg", label: "Ayurvedic Syrups" },
  { src: "/assets/product-13.jpg.jpeg", label: "Digestive Aids" },
  { src: "/assets/product-14.jpg.jpeg", label: "Skin & Hair Care" },
  { src: "/assets/product-15.jpg.jpeg", label: "Pain Relief Formulas" },
  { src: "/assets/product-16.jpg.jpeg", label: "Respiratory Health" },
  { src: "/assets/product-17.jpg.jpeg", label: "Stress Management" },
  { src: "/assets/product-18.jpg.jpeg", label: "Women's Health" },
  { src: "/assets/product-19.jpg.jpeg", label: "Men's Vitality" },
  { src: "/assets/product-20.jpg.jpeg", label: "Daily Wellness" }
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Shree Vallabh Ayurveda Clinic" },
      { name: "description", content: "Explore our Panchakarma therapy suites, herbal pharmacy and clinic environment across Seawoods and Nerul." },
      { property: "og:title", content: "Clinic Gallery" },
      { property: "og:description", content: "A visual tour of our authentic Ayurveda & Panchakarma facilities." },
      { property: "og:image", content: "/assets/category-1.jpg.jpeg" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <Layout>
      <PageHero eyebrow="Visual Tour" title="Inside our clinic" subtitle="Traditional therapy rooms, in-house medicated oils and a serene, healing environment." image="/newimages/hero-gallery.jpg" />
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
