// src/components/Article.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HairCare from '../assets/HaiCare.png';
import { Link } from 'react-router-dom';

// Dummy data for simulation
const dummyData = {
  beauty: [
    {
      title: "Amla & Lemon Paste: Strengthen Your Hair and Delay Greying",
      excerpt: "A natural remedy to fortify hair follicles and prevent premature greying.",
      content: `Purpose: Strengthens hair follicles, prevents hair loss, and delays premature greying.

Ingredients:
2 tablespoons Amla powder
2 tablespoons Lemon juice

Preparation:
Mix amla powder with lemon juice to form a smooth paste.

Application:
Apply the paste evenly on the scalp.
Leave it on for about 30 minutes.
Rinse thoroughly with lukewarm water and a mild shampoo.`,
      category: "Hair Care",
      subCategory: "Amla & Lemon Paste",
      tags: ["Hair Strength", "Anti-Greying", "Natural Remedy"]
    },
    {
      title: "Aloe Vera Gel Application for Smooth and Shiny Hair",
      excerpt: "Nourish your scalp and boost hair growth with fresh aloe vera gel.",
      content: `Purpose: Nourishes the scalp, boosts hair growth, and acts as a natural conditioner for smooth and shiny hair.

Ingredients:
1 fresh Aloe Vera leaf

Preparation:
Extract fresh aloe vera gel from the leaf.
Blend it for a smoother consistency (optional).

Application:
Apply the gel directly to the scalp and hair.
Leave it on for about 45 minutes.
Rinse thoroughly with lukewarm water.`,
      category: "Hair Care",
      subCategory: "Aloe Vera Gel Application",
      tags: ["Hair Growth", "Nourishment", "Natural Conditioner"]
    },
    {
      title: "Curry Leaves & Coconut Oil Treatment for Hair Growth",
      excerpt: "Promote strong hair roots and reduce hair fall with this natural treatment.",
      content: `Purpose: Strengthens hair roots, promotes growth, and significantly reduces hair fall.

Ingredients:
A handful of fresh Curry Leaves
1 cup Coconut Oil

Preparation:
Roast curry leaves in a pan until crisp.
Add the roasted leaves to coconut oil and boil until it turns dark.
Let the oil cool down and strain it.

Application:
Massage the oil onto the scalp and hair.
Leave it on for at least 1 hour.
Wash off with a mild shampoo.`,
      category: "Hair Care",
      subCategory: "Curry Leaves & Coconut Oil Treatment",
      tags: ["Hair Growth", "Hair Fall Reduction", "Natural Treatment"]
    },
    {
      title: "Onion Juice & Honey Hair Mask for Stronger Hair",
      excerpt: "Boost collagen production and strengthen hair roots naturally.",
      content: `Purpose: Boosts collagen production, strengthens hair roots, and promotes healthy hair growth.

Ingredients:
1 medium Onion
1 tablespoon Honey

Preparation:
Blend one onion into a smooth paste.
Mix in 1 tablespoon of honey.

Application:
Massage the mixture gently onto the scalp.
Leave it on for 30 minutes.
Rinse thoroughly with a mild shampoo.`,
      category: "Hair Care",
      subCategory: "Onion Juice & Honey Hair Mask",
      tags: ["Hair Growth", "Collagen Boost", "Hair Strength"]
    },
    {
      title: "Fenugreek (Methi) & Coconut Oil Hair Mask for Nourishment",
      excerpt: "Nourish your scalp and prevent hair fall with fenugreek and coconut oil.",
      content: `Purpose: Strengthens hair, prevents hair fall, and nourishes the scalp with essential nutrients.

Ingredients:
2 tablespoons Ground Fenugreek Seeds
2 tablespoons Coconut Oil

Preparation:
Grind fenugreek seeds into a fine powder.
Mix with coconut oil to form a smooth paste.

Application:
Apply the paste to the scalp and hair.
Leave it on for 30-45 minutes.
Wash off with lukewarm water and a mild shampoo.`,
      category: "Hair Care",
      subCategory: "Fenugreek & Coconut Oil Hair Mask",
      tags: ["Hair Nourishment", "Hair Fall Prevention", "Natural Remedy"]
    },
    {
      title: "Amla, Shikakai & Coconut Oil Treatment for Hair Growth",
      excerpt: "Promote hair growth and reduce hair fall with this potent natural blend.",
      content: `Purpose: Strengthens hair roots, promotes growth, and reduces hair fall.

Ingredients:
Amla (rich in Vitamin C & antioxidants)
Shikakai (strengthens roots)
Coconut Oil (deep nourishment)

Preparation:
Mix powdered or fresh amla and shikakai with warm coconut oil.
Let the mixture cool to lukewarm temperature.

Usage:
Gently massage onto scalp and through hair.
Leave overnight or for at least 1 hour.
Wash hair with mild shampoo and lukewarm or cold water.`,
      category: "Hair Care",
      subCategory: "Amla, Shikakai & Coconut Oil Treatment",
      tags: ["Hair Growth", "Hair Fall Reduction", "Natural Treatment"]
    },
    {
      title: "Neem Leaves Remedy for a Detoxified Scalp",
      excerpt: "Combat dandruff and relieve itching with neem leaves and curd.",
      content: `Purpose: Detoxifies scalp, relieves itching, and combats dandruff.

Ingredients:
Neem leaves, curd

Preparation:
Boil neem leaves in water or mix neem leaves paste with curd.

Usage:
Apply to scalp, leave for 15-20 minutes, then rinse with warm water.`,
      category: "Hair Care",
      subCategory: "Neem Leaves Remedy",
      tags: ["Dandruff", "Scalp Detox", "Natural Remedy"]
    },
    {
      title: "Fenugreek (Methi) Seed Mask for Dandruff Removal",
      excerpt: "Remove dandruff flakes and nourish your scalp with fenugreek seed mask.",
      content: `Purpose: Removes dandruff flakes and nourishes the scalp.

Ingredients:
Fenugreek seeds, curd, Triphala churn

Preparation:
Soak fenugreek seeds overnight, then grind into a paste.
Mix the paste with curd and 1 teaspoon Triphala churn.

Usage:
Apply the mask to the scalp.
Leave it on for one hour.
Wash with a mild shampoo.`,
      category: "Hair Care",
      subCategory: "Fenugreek Seed Mask",
      tags: ["Dandruff Removal", "Scalp Nourishment", "Natural Remedy"]
    },
    {
      title: "Aloe Vera and Castor Oil Mask for Soothing Irritated Scalp",
      excerpt: "Soothe irritation and deeply moisturize your scalp with aloe vera and castor oil.",
      content: `Purpose: Soothes irritation, moisturizes deeply, and reduces dandruff.

Ingredients:
Aloe vera gel, castor oil

Preparation:
Mix one cup aloe vera gel with 2 tablespoons castor oil.

Usage:
Apply the mixture to the scalp.
Leave it on overnight or for two hours before washing; use weekly.`,
      category: "Hair Care",
      subCategory: "Aloe Vera and Castor Oil Mask",
      tags: ["Scalp Soothing", "Moisturizing", "Dandruff Reduction"]
    },
    {
      title: "Amla and Tulsi Hair Mask for Antibacterial Benefits",
      excerpt: "Fight dandruff and boost hair health with an amla and tulsi hair mask.",
      content: `Purpose: Removes dandruff, offers antibacterial benefits, and provides vitamins for hair health.

Ingredients:
Amla powder, tulsi leaves, water

Preparation:
Mix 2 tablespoons amla powder with 2 tablespoons ground tulsi leaves.
Add water to form a paste.

Usage:
Apply the paste to the scalp.
Leave it on for 30 minutes.
Rinse with a mild shampoo.`,
      category: "Hair Care",
      subCategory: "Amla and Tulsi Hair Mask",
      tags: ["Dandruff Removal", "Antibacterial", "Hair Health"]
    }
  ],
  skinCare: [
    {
      title: "Natural DIY Face-Lift: Tight, Firm & Younger Skin in 7 Days",
      excerpt: "Achieve tighter, firmer skin and reduce pigmentation with this 7-day face-lift routine.",
      content: `Purpose:
Tightens, firms, and hydrates the skin.
Reduces pigmentation and acne.
Boosts skin elasticity and collagen production.

Ingredients:
- Flax Seeds (rich in fatty acids; firms and nourishes skin)
- Lemon Peel (high in Vitamin C and citric acid; evens skin tone, reduces pigmentation and acne)
- Rose Water (natural toner, suitable for all skin types)

Preparation:
1. Slightly roast 2 tablespoons flax seeds to remove moisture; cool and grind into fine powder.
2. Strain the powder to separate thick peels.
3. Peel a fresh lemon, soak the peels overnight in rose water (or plain water), then grind into a smooth paste.
4. Mix 2 tablespoons of flax seed powder with the lemon peel paste gradually until smooth.

Usage Steps:
1. Wash your face with a mild cleanser and apply rose water or your preferred toner.
2. Apply the flax seed and lemon peel paste evenly in an upward motion.
3. Lie down flat (preferably without a pillow) to benefit from gravity and allow the mask to dry.
4. Optionally, spray rose water occasionally during the process.
5. Before rinsing, gently massage your face in upward strokes.
6. Rinse thoroughly with lukewarm or cold water and pat dry.
7. Finish by applying rose water toner to seal pores and enhance firmness.

Frequency:
Apply daily for 7 consecutive days, then every 2-3 days for maintenance.

Recommendations:
Suitable for normal skin; sensitive skin types should perform a patch test. Fresh preparation yields the best results.`,
      category: "Skin Care",
      subCategory: "DIY Face-Lift",
      tags: ["Face Lift", "Tight Skin", "Natural Remedy"]
    },
    {
      title: "7-Day Glass Skin Challenge: Get Flawless, Radiant Skin Naturally",
      excerpt: "Achieve smooth, radiant, glass-like skin with this 7-day challenge that reduces pigmentation and revitalizes your complexion.",
      content: `Purpose:
Achieves radiant, smooth, glass-like skin.
Reduces pigmentation, dark spots, and uneven skin tone.
Nourishes and revitalizes the skin for a youthful glow.

Ingredients:
- Gram Flour (Besan) – deep cleanses and gently exfoliates.
- Kasturi Turmeric – reduces pigmentation and brightens skin.
- Curd (Yogurt) – a natural cleanser that hydrates and softens.
- Honey – moisturizes and heals skin naturally.

Preparation:
1. Take 1 spoon of gram flour.
2. Add 1/4 spoon of Kasturi turmeric (or a pinch of regular turmeric).
3. Mix in 1 spoon of thick curd.
4. Add 1/2 spoon of honey, mixing to form a smooth paste.

Usage Steps:
1. Cleanse your face and neck thoroughly.
2. Apply a thin layer in circular motions, focusing on areas with pigmentation.
3. Apply a second, thicker layer evenly (avoid the delicate eye area).
4. Allow the mask to partially dry (skin should remain flexible).
5. Gently rinse off with minimal water and pat dry.
6. Apply toner and moisturizer to seal in hydration.

Frequency:
Repeat daily for 7 consecutive days.

Recommendations:
Suitable for most skin types; those with sensitive skin should conduct a patch test first.`,
      category: "Skin Care",
      subCategory: "Glass Skin Challenge",
      tags: ["Radiant Skin", "Glass Skin", "7-Day Challenge"]
    }
  ]
};

const hairTags = [
  "All",
  "Basic Hair Care",
  "Hair Fall",
  "Dandruff",
  "Hair Growth",
  "Anti-Greying",
  "Natural Remedies",
  "Scalp Care",
  "Moisturizing",
];

function Article() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      // Access dummy data based on the category parameter (convert to lower case)
      const data = dummyData[category.toLowerCase()] || [];
      setArticles(data);
    }, 500); // 500ms delay to simulate network request
  }, [category]);

  return (

    <>

      <div data-theme="caramellatte">
        <div className="hero bg-base-200 max-w-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={HairCare}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Get the Hair You Love</h1>
              <p className="py-6">
                Simple Remedies for Everyday Healthy Hair
              </p>

            </div>
          </div>
        </div>
      </div>
      <div data-theme="dim">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            padding: "20px"

          }}
        >
          <div className="badge badge-outline badge-xl badge-info    " style={{ padding: "0.5rem 1rem" }}>
            All
          </div>
          <div className="badge badge-dash badge-warning badge-xl " style={{ padding: "0.5rem 1rem" }}>
            Basic Hair Care
          </div>
          <div className="badge badge-dash badge-accent badge-xl" style={{ padding: "0.5rem 1rem" }}>
            Hair Fall
          </div>
          <div className="badge badge-dash badge-warning badge-xl" style={{ padding: "0.5rem 1rem" }}>
            Dandruff
          </div>
          <div className="badge badge-dash badge-info badge-xl" style={{ padding: "0.5rem 1rem" }}>
            Hair Growth
          </div>
          <div className="badge badge-dash badge-success badge-xl" style={{ padding: "0.5rem 1rem" }}>
            Anti-Greying
          </div>
          <div className="badge badge-dash badge-warning badge-xl" style={{ padding: "0.5rem 1rem" }}>
            Natural Remedies
          </div>
          <div className="badge badge-dash badge-error badge-xl" style={{ padding: "0.5rem 1rem" }}>
            Scalp Care
          </div>
        </div>



      </div>
<div data-theme="light">
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-2 p-3">

 
        {articles.map((article, index) => (
          <div data-theme="valentine">
          <ul className="list bg-base-100 rounded-box shadow-md">
            {/* Heading or Subheading */}
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
              <div className="badge badge-secondary">{article.tags[0]}</div>
            </li>
            <li className="list-row">
              {/* Thumbnail Image */}
              <div>
                <img
                  className="size-20 rounded-box"
                  src={HairCare}
                  alt="Hair Mask"
                />
              </div>
              {/* Title & Subtitle */}
              <div>
                <div className="card-title text-l font-bold">{article.title}</div>
                <div className="text-gray-700">{article.excerpt}</div>
                {/* <p className="list-col-wrap text-xs">
                                 Explore 20 DIY hair masks packed with natural ingredients to revitalize and nourish your hair.
                                 Perfect for tackling dryness, split ends, and more.
                               </p> */}
              </div>
              {/* Description */}

              {/* Action Buttons (example icons) */}
              <Link to="/ReadMoreArticle" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>


            </li>
          </ul>
          </div>
        ))}
      </div>
</div>
      

    </>

  );
}

export default Article;
