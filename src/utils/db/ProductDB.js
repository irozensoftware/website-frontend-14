import honey_1 from "/public/assets/images/product/honey (1).avif";
import honey_2 from "/public/assets/images/product/honey (2).avif";
import honey_3 from "/public/assets/images/product/honey (1).webp";
import honey_4 from "/public/assets/images/product/honey (2).webp";
import black_seed_oil from "/public/assets/images/product/black-seed-oil.jpg";
import moringa_Powder_1 from "/public/assets/images/product/Moringa Powder (1).webp";
import moringa_Powder_2 from "/public/assets/images/product/Moringa Powder (2).webp";
import moringa_Powder_3 from "/public/assets/images/product/Moringa Powder (3).webp";

import chia_seeds_1 from "/public/assets/images/product/chia-seed (1).avif";
import chia_seeds_2 from "/public/assets/images/product/chia-seed (1).webp";
import chia_seeds_3 from "/public/assets/images/product/chia-seed (2).avif";

import beetroot_powder_1 from "/public/assets/images/product/BeetrootPowder  (1).jpg";
import beetroot_powder_2 from "/public/assets/images/product/BeetrootPowder  (2).jpg";
import beetroot_powder_3 from "/public/assets/images/product/BeetrootPowder  (3).jpg";
import beetroot_powder_4 from "/public/assets/images/product/BeetrootPowder  (4).jpg";

import flax_seeds_1 from "/public/assets/images/product/Flax Seeds (4).jpg";
import flax_seeds_2 from "/public/assets/images/product/Flax Seeds (2).jpg";
import flax_seeds_3 from "/public/assets/images/product/Flax Seeds (3).jpg";
import flax_seeds_4 from "/public/assets/images/product/Flax Seeds (1).jpg";

import pumpkin_seeds_1 from "/public/assets/images/product/Pumpkin Seeds (1).jpg";
import pumpkin_seeds_2 from "/public/assets/images/product/Pumpkin Seeds (2).jpg";
import pumpkin_seeds_3 from "/public/assets/images/product/Pumpkin Seeds (3).jpg";

import Almonds_1 from "/public/assets/images/product/Almonds .jpg";
import Almonds_2 from "/public/assets/images/product/Almonds .webp";

import Walnuts_1 from "/public/assets/images/product/Walnuts.webp";
import Walnuts_3 from "/public/assets/images/product/Walnuts  (1).jpg";

import dry_figs_1 from "/public/assets/images/product/Dry Figs (2).webp";
import dry_figs_2 from "/public/assets/images/product/Dry Figs (1).webp";

import sunflower_seeds_1 from "/public/assets/images/product/Sunflower Seeds (1).jpg";
import sunflower_seeds_2 from "/public/assets/images/product/Sunflower Seeds (2).jpg";

import blockGarlic_1 from "/public/assets/images/product/Black Garlic (1).jpg";
import blockGarlic_2 from "/public/assets/images/product/Black Garlic (2).jpg";
import blockGarlic_3 from "/public/assets/images/product/Black Garlic (1).avif";

import MixedNuts_1 from "/public/assets/images/product/Mixed Nuts (2).jpg";
import MixedNuts_2 from "/public/assets/images/product/Mixed Nuts (1).webp";
import MixedNuts_3 from "/public/assets/images/product/Mixed Nuts (1).jpg";

export const products = [
  {
    id: 1,
    title: "Raw Organic Honey – Pure Natural Sweetener",
    slug: "raw-organic-honey",
    oldPrice: 1800,
    newPrice: 1250,
    discount: "-30%",
    description:
      "100% pure organic honey collected from natural beehives. Perfect for boosting immunity and replacing refined sugar in your diet.",
    images: [honey_1, honey_2, honey_3, honey_4],
  },
  {
    id: 2,
    title: "Black Seed Oil – Cold Pressed",
    slug: "black-seed-oil",
    oldPrice: 950,
    newPrice: 750,
    discount: "-21%",
    description:
      "Cold-pressed black seed oil, rich in antioxidants and essential fatty acids. Great for heart health and immune support.",
    images: [black_seed_oil, black_seed_oil, black_seed_oil, black_seed_oil],
  },
  {
    id: 3,
    title: "Moringa Powder – Superfood for Energy",
    slug: "moringa-powder",
    oldPrice: 1000,
    newPrice: 820,
    discount: "-18%",
    description:
      "Nutrient-rich moringa leaf powder filled with vitamins and minerals to boost energy, immunity, and metabolism.",
    images: [moringa_Powder_1, moringa_Powder_2, moringa_Powder_3],
  },
  {
    id: 4,
    title: "Chia Seeds – High Fiber Superfood",
    slug: "chia-seeds",
    oldPrice: 1200,
    newPrice: 890,
    discount: "-25%",
    description:
      "Loaded with omega-3, protein, and fiber. Chia seeds are perfect for smoothies, puddings, and weight control diets.",
    images: [chia_seeds_1, chia_seeds_2, chia_seeds_3],
  },
  {
    id: 5,
    title: "Beetroot Powder – Natural Blood Booster",
    slug: "beetroot-powder",
    oldPrice: 950,
    newPrice: 700,
    discount: "-26%",
    description:
      "A rich source of iron and natural nitrates, beetroot powder helps improve blood flow and boosts stamina naturally.",
    images: [
      beetroot_powder_1,
      beetroot_powder_2,
      beetroot_powder_3,
      beetroot_powder_4,
    ],
  },
  {
    id: 6,
    title: "Flax Seeds – Omega 3 & Fiber Rich",
    slug: "flax-seeds",
    oldPrice: 1000,
    newPrice: 800,
    discount: "-20%",
    description:
      "Crunchy flax seeds loaded with fiber and omega-3 fats. Great for heart health, digestion, and glowing skin.",
    images: [flax_seeds_1, flax_seeds_2, flax_seeds_3, flax_seeds_4],
  },
  {
    id: 7,
    title: "Pumpkin Seeds – Natural Protein Snack",
    slug: "pumpkin-seeds",
    oldPrice: 1150,
    newPrice: 950,
    discount: "-17%",
    description:
      "Roasted pumpkin seeds full of protein, iron, and magnesium. A healthy snack for any time of the day.",
    images: [pumpkin_seeds_3, pumpkin_seeds_1, pumpkin_seeds_2],
  },
  {
    id: 8,
    title: "Almonds – Premium Natural Nuts",
    slug: "almonds-natural",
    oldPrice: 1550,
    newPrice: 1250,
    discount: "-19%",
    description:
      "Premium quality natural almonds packed with healthy fats, protein, and antioxidants for brain and heart health.",
    images: [Almonds_1, Almonds_2],
  },
  {
    id: 9,
    title: "Walnuts – Natural Brain Food",
    slug: "walnuts",
    oldPrice: 1800,
    newPrice: 1450,
    discount: "-20%",
    description:
      "Fresh and crunchy walnuts rich in omega-3 and antioxidants. Perfect for improving memory and brain function.",
    images: [Walnuts_1, Walnuts_3],
  },
  {
    id: 10,
    title: "Dry Figs – Naturally Sweet & Healthy",
    slug: "dry-figs",
    oldPrice: 1300,
    newPrice: 950,
    discount: "-27%",
    description:
      "Soft and chewy dry figs packed with natural sugar, fiber, and calcium. Excellent for digestion and bone strength.",
    images: [dry_figs_1, dry_figs_2],
  },
  {
    id: 11,
    title: "Sunflower Seeds – Natural Vitamin E Source",
    slug: "sunflower-seeds",
    oldPrice: 1000,
    newPrice: 780,
    discount: "-22%",
    description:
      "Crunchy sunflower seeds full of vitamin E and protein. Helps in glowing skin and overall wellness.",
    images: [
      sunflower_seeds_1,
      sunflower_seeds_2,
      sunflower_seeds_1,
      sunflower_seeds_2,
    ],
  },
  {
    id: 12,
    title: "Black Garlic – Fermented Superfood",
    slug: "black-garlic",
    oldPrice: 1800,
    newPrice: 1350,
    discount: "-25%",
    description:
      "Fermented black garlic with a sweet, tangy flavor. Enhances immunity, heart health, and overall energy.",
    images: [blockGarlic_1, blockGarlic_2, blockGarlic_3],
  },
  {
    id: 13,
    title: "Mixed Nuts Combo – Premium Energy Pack",
    slug: "mixed-nuts-combo",
    oldPrice: 2000,
    newPrice: 1500,
    discount: "-25%",
    description:
      "A healthy mix of almonds, cashews, walnuts, and raisins. Ideal for snacks or gifting during festive seasons.",
    images: [
     MixedNuts_3,
     MixedNuts_2,
     MixedNuts_1
    ],
  },
  {
    id: 14,
    title: "Peanut Butter – 100% Natural & Sugar-Free",
    slug: "peanut-butter",
    oldPrice: 900,
    newPrice: 720,
    discount: "-20%",
    description:
      "Smooth and creamy peanut butter made from roasted peanuts only. No added sugar or preservatives.",
    images: [
      "https://falaqfood.com/wp-content/uploads/2024/10/peanut-butter-1.jpg",
      "https://falaqfood.com/wp-content/uploads/2024/10/peanut-butter-2.jpg",
      "https://falaqfood.com/wp-content/uploads/2024/10/peanut-butter-3.jpg",
    ],
  },
  {
    id: 15,
    title: "Coconut Oil – Cold Pressed Virgin",
    slug: "coconut-oil",
    oldPrice: 1250,
    newPrice: 980,
    discount: "-22%",
    description:
      "Cold-pressed virgin coconut oil perfect for cooking, skincare, and hair nourishment. 100% chemical-free.",
    images: [
      "https://falaqfood.com/wp-content/uploads/2024/10/coconut-oil-1.jpg",
      "https://falaqfood.com/wp-content/uploads/2024/10/coconut-oil-2.jpg",
      "https://falaqfood.com/wp-content/uploads/2024/10/coconut-oil-3.jpg",
      "https://falaqfood.com/wp-content/uploads/2024/10/coconut-oil-4.jpg",
    ],
  },
];
