import heart from "@/assets/heart.asset.json";
import stroke from "@/assets/stroke.asset.json";
import weight from "@/assets/product-15.asset.json";
import hair from "@/assets/product-11.asset.json";
import thyroid from "@/assets/thyroid.asset.json";
import infer from "@/assets/infer.asset.json";
import beauty from "@/assets/product-9.asset.json";
import preg from "@/assets/product-4.asset.json";
import arth from "@/assets/product-13.asset.json";
import obs from "@/assets/heightloss.asset.json";

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  paragraphs: string[];
  benefits: string[];
  therapies: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "heart",
    title: "Heart Disease, Diabetes & Blood Pressure",
    short: "Root-cause Ayurvedic care for cardiac wellness and metabolic balance.",
    image: "/newimages/heart-disease.jpg",
    intro:
      "An unhealthy lifestyle with low physical activity and processed foods is the main cause of heart disease in India. Ayurveda addresses the root causes with diet, herbal preparations, therapies, yoga and pranayama.",
    paragraphs: [
      "This western lifestyle causes the build-up of cholesterol plaque in the arteries which restricts blood flow and causes or exacerbates heart disease.",
      "Ayurvedic treatments for heart health include specialized diet plans, herbal preparations, therapeutic practices, yoga and pranayama. These treatments help to control and even eliminate the causative factors of heart disease, ameliorating and often reversing the symptoms of this condition.",
      "Our protocols combine classical texts (Charaka, Sushruta) with modern diagnostics for measurable, sustainable improvement in HbA1c, lipid profile and blood pressure.",
    ],
    benefits: [
      "Lower LDL and improved HDL",
      "Better glycemic control (HbA1c)",
      "Reduced dependence on symptomatic medication",
      "Stronger cardiac output and stamina",
    ],
    therapies: ["Hridaya Basti", "Shirodhara", "Abhyanga", "Nadi Pariksha & Diet Plan", "Pranayama Coaching"],
  },
  {
    slug: "stroke",
    title: "Stroke & Paralysis Rehabilitation",
    short: "Panchakarma-led neurological recovery for hemiplegia and hemiparesis.",
    image: "/newimages/stroke.jpg",
    intro:
      "Paralysis is one of the most common disabilities following a stroke, usually on the side opposite to the brain damage. Ayurveda approaches recovery through nervous-system rejuvenation and targeted Panchakarma.",
    paragraphs: [
      "Types of stroke disabilities include paralysis and problems controlling movement, sensory disturbances, problems with language and memory, and emotional disturbances.",
      "In Ayurveda, the causative factors as well as the development of the disease are explained in a similar manner to Allopathy. However outcomes of treatment are often more successful with Ayurvedic medicines and therapies when compared to modern medicine alone.",
      "Programs are structured for 21-45 days combining daily therapy, oral medicines and physiotherapy support.",
    ],
    benefits: ["Improved motor control", "Reduced spasticity", "Better speech & cognition", "Emotional balance"],
    therapies: ["Sarvanga Abhyanga", "Pizhichil", "Shashtika Shali Pinda Sweda", "Nasya", "Basti Chikitsa"],
  },
  {
    slug: "weight-loss",
    title: "Weight Loss — Fat to Fit",
    short: "Mindful nutrition, herbal support and metabolic reset for sustainable results.",
    image: "/newimages/fat-loss.jpg",
    intro:
      "Ayurveda focuses on mindful nutrition, stress reduction and cultivation of a balanced lifestyle. Many people look to its dietary principles and natural remedies when they want to lose weight sustainably.",
    paragraphs: [
      "Our Fat-to-Fit program is fully customized to your prakriti (body constitution) and current imbalances.",
      "We combine ayurvedic eating practices, remedies and supplements with modern nutritional science for effective, long-lasting weight management without crash dieting.",
      "Each patient receives a body-composition tracker, weekly review and behavioural coaching.",
    ],
    benefits: ["Reduction in visceral fat", "Improved digestion (Agni)", "Better sleep & energy", "Long-term maintenance"],
    therapies: ["Udwarthanam", "Herbal Kizhi", "Detox Kashaya", "Yoga & Pranayama", "Personalised Meal Plan"],
  },
  {
    slug: "hair",
    title: "Hair Loss & Premature Graying",
    short: "Khalitya management: pacify Pitta, nourish follicles, restore density.",
    image: "/newimages/hair-loss.jpg",
    intro:
      "Hair loss is known as Khalitya in Ayurveda. Hair is a byproduct of bone formation; excess Pitta in the sebaceous gland or folliculitis can lead to hair loss and premature graying.",
    paragraphs: [
      "People with excess Pitta are likely to lose hair early in life or have prematurely thin/gray hair.",
      "Ayurvedic treatment of hair loss aims at pacification of Pitta through a customized diet and lifestyle regime along with medication.",
      "A combination of diet, herbs, oil massage, meditation, aromatherapy, breathing and yoga can be highly beneficial.",
    ],
    benefits: ["Reduced hair fall within 6-8 weeks", "New growth stimulation", "Delayed graying", "Stronger, glossier hair"],
    therapies: ["Shiro Abhyanga", "Shirodhara", "Nasya", "Bhringraj / Neelibhringadi oil regimen", "Diet correction"],
  },
  {
    slug: "thyroid",
    title: "Thyroid & Hormonal Management",
    short: "Ayurvedic balancing of endocrine function — hypo, hyper and PCOS support.",
    image: "/newimages/thyroid.jpg",
    intro:
      "Thyroid dysfunctions can be correlated to Kapha and Vata & Pitta doshas — involving Rasa and Medha dhatu and Sweda mala.",
    paragraphs: [
      "Pitta is responsible for all metabolic actions by the thyroid gland. While treating thyroid we choose either the organ or the function depending on the presenting problem.",
      "Location-wise it lies in Kapha sthana; associated presentations include Pandu (anaemia), Shoth (swelling) and Grahani (IBS).",
      "Our approach corrects the root metabolic imbalance so that lab values normalise gradually and safely.",
    ],
    benefits: ["Stabilised TSH & T3/T4", "Weight normalisation", "Better mood & energy", "Regular menstrual cycles"],
    therapies: ["Nasya", "Udwarthana", "Shirodhara", "Rasayana therapy", "Custom herbal formulations"],
  },
  {
    slug: "infertility",
    title: "Infertility Management",
    short: "Panchakarma-based purification for both partners with proven conception outcomes.",
    image: "/newimages/ayurveda.jpg",
    intro:
      "Ayurveda defines infertility as inability to conceive or carry a pregnancy to term. Ancient literature Atharvaveda extensively explores its treatment.",
    paragraphs: [
      "The problem of infertility is fairly common today and Ayurveda offers a safe, affordable, low-complication solution.",
      "Treatment begins with Shodhana (purification) of both partners followed by Rasayana (rejuvenation) and Vajikarana (reproductive tonics).",
      "Programs include cycle tracking, stress management and specialised uttara-basti when indicated.",
    ],
    benefits: ["Improved ovulation & sperm quality", "Balanced hormones", "Higher conception success", "Healthy pregnancy support"],
    therapies: ["Vaman & Virechana", "Uttara Basti", "Yoni Prakshalan", "Vajikarana Rasayana", "Fertility yoga"],
  },
  {
    slug: "beauty",
    title: "Beauty Enhancement",
    short: "Herbal skincare, glow therapies and holistic radiance from within.",
    image: "/newimages/beauty.jpg",
    intro:
      "Beauty Care in Ayurveda uses the purity of nature. Skin is the main canvas of beauty; herbal massage aids circulation of vital fluids for a natural glow.",
    paragraphs: [
      "The Beauty Care programme has wide global acceptance with hundreds of international visitors experiencing these treatments.",
      "Herbal face packs and personalised herbal massage form the backbone of the programme.",
      "Skin type analysis guides selection of oils, ubtans and internal Rasayana for lasting results.",
    ],
    benefits: ["Even skin tone", "Reduced pigmentation & acne", "Natural glow", "Anti-ageing support"],
    therapies: ["Mukha Abhyanga", "Herbal Face Pack", "Nasya", "Rakta-shodhana Kashaya", "Rasayana"],
  },
  {
    slug: "pre-pregnancy",
    title: "Pre-Pregnancy Purification (Garbha Sanskar)",
    short: "Cleanse both parents for a healthy, intelligent, strong-immunity offspring.",
    image: "/newimages/pre-pregnancy.jpg",
    intro:
      "Children are the greatest gift. Ayurveda not only helps conception but also healthy conception — 'Chotta Parivar, Sukhi Parivar' — with strong offspring.",
    paragraphs: [
      "Various Panchakarma procedures prior to conception purify the entire body. Just as a healthy seed bears healthy fruit, purification of both parents creates a more intelligent and immune child.",
      "The 3-6 month program covers diet, herbs, mind training, mantra chanting and physical preparation.",
    ],
    benefits: ["Optimised fertility", "Cleaner genetic environment", "Confident, calm pregnancy", "Stronger newborn immunity"],
    therapies: ["Snehana & Swedana", "Vaman / Virechana", "Basti", "Rasayana", "Garbha Sanskar counselling"],
  },
  {
    slug: "arthritis",
    title: "Arthritis (Sandhivata & Amavata)",
    short: "Joint regeneration through classical Panchakarma and targeted herbs.",
    image: "/newimages/arthritis.jpg",
    intro:
      "Arthritis is inflammation of joints leading to moderate to severe pain. Osteo-arthritis is the commonest, especially in post-menopausal women due to metabolic and hormonal changes.",
    paragraphs: [
      "Ayurvedic medicinal plants like Shatavari and Ashwagandha are highly effective for management — both preventive and therapeutic.",
      "Use of Panchakarma and an Ayurvedic diet is very useful in treating arthritis and slowing degeneration.",
      "Signature therapies like Janu Basti and Kati Basti deliver medicated oils directly to the affected joint.",
    ],
    benefits: ["Reduced joint pain & stiffness", "Improved mobility", "Slower cartilage degeneration", "Reduced pain-killer dependence"],
    therapies: ["Janu Basti / Kati Basti", "Pizhichil", "Elakizhi", "Basti Chikitsa", "Yoga for joints"],
  },
  {
    slug: "obesity",
    title: "Obesity (Sthaulya)",
    short: "Reset metabolism, reduce Medha dhatu excess and rebuild vitality.",
    image: "/newimages/obesity-finalimage.jpg",
    intro:
      "Healthy food leads to a healthy body and life. Fast-paced urban lifestyles have shifted eating habits toward fast foods, causing obesity along with sedentary living.",
    paragraphs: [
      "Change in eating habits along with lack of exercise is the foremost cause of obesity.",
      "Ayurveda addresses obesity as Medha dhatu excess treated through Lekhana (scraping) therapies, herbal Kashaya, and structured lifestyle correction.",
    ],
    benefits: ["Steady, healthy weight loss", "Lower inflammatory markers", "More energy & confidence", "Prevention of lifestyle diseases"],
    therapies: ["Udwarthana", "Herbal Kizhi", "Virechana", "Lekhana Basti", "Yoga & pranayama"],
  },
];

export const treatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);
