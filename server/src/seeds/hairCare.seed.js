require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');
const Article = require('../models/article');

const hairCareArticles = [
  {
    title: "Amla & Coconut Oil Hair Mask for Hair Growth",
    excerpt: "Boost hair growth naturally with this powerful amla and coconut oil mask that strengthens roots and reduces hair fall.",
    category: "Beauty & Self-Care",
    subCategory: "Hair Care",
    tags: ["Hair Growth", "Natural DIY", "Shiny Hair"],
    difficulty: "Easy",
    prepTime: 10,
    totalTime: 40,
    costRange: "Under ₹100",
    ingredientsCount: 4,
    availability: "Easy to find",
    featuredImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
    content: {
      purpose: "Stimulate hair growth and reduce hair fall using natural ingredients.",
      ingredients: [
        { name: "Amla powder", quantity: "2 tbsp", cost: "₹10" },
        { name: "Coconut oil", quantity: "3 tbsp", cost: "₹20" },
        { name: "Castor oil", quantity: "1 tbsp", cost: "₹15" },
        { name: "Curry leaves", quantity: "10-12 leaves", cost: "₹5" },
      ],
      steps: [
        { stepNumber: 1, instruction: "Warm coconut oil and castor oil together in a bowl.", tip: "Do not overheat — just warm enough to mix well." },
        { stepNumber: 2, instruction: "Add amla powder and mix into a smooth paste.", tip: "Add a few drops of water if too thick." },
        { stepNumber: 3, instruction: "Crush curry leaves and mix into the paste." },
        { stepNumber: 4, instruction: "Apply to scalp and hair roots, massage for 5 minutes." },
        { stepNumber: 5, instruction: "Leave for 30 minutes, then wash with a mild shampoo." },
      ],
      tips: ["Use twice a week for best results.", "Warm the oil slightly before applying for better absorption."],
      warnings: ["Do a patch test if you have sensitive scalp."],
      results: "Visible reduction in hair fall within 3-4 weeks of regular use."
    },
    author: { name: "Lifestyle Junction", verified: true },
    status: "published",
    featured: true,
    beautyFields: {
      hairType: ["All hair types"],
      concern: ["Hair fall", "Hair growth"],
      frequency: "Twice a week",
      shelfLife: "Use fresh"
    }
  },
  {
    title: "Onion Juice Treatment to Stop Hair Fall",
    excerpt: "Onion juice is rich in sulphur which boosts collagen production and stops hair fall effectively within weeks.",
    category: "Beauty & Self-Care",
    subCategory: "Hair Care",
    tags: ["Hair Growth", "Dandruff Control", "Natural DIY"],
    difficulty: "Easy",
    prepTime: 15,
    totalTime: 45,
    costRange: "Under ₹50",
    ingredientsCount: 3,
    availability: "Easy to find",
    featuredImage: "https://images.unsplash.com/photo-1559181567-c3190ca9d3f8?w=600",
    content: {
      purpose: "Use the sulphur content in onion to strengthen hair follicles and stop hair fall.",
      ingredients: [
        { name: "Onion", quantity: "2 medium", cost: "₹10" },
        { name: "Lemon juice", quantity: "1 tsp", cost: "₹5" },
        { name: "Cotton ball", quantity: "2-3", cost: "₹5" },
      ],
      steps: [
        { stepNumber: 1, instruction: "Blend 2 onions and strain to extract juice." },
        { stepNumber: 2, instruction: "Add lemon juice to reduce the smell." },
        { stepNumber: 3, instruction: "Apply to scalp using a cotton ball, section by section." },
        { stepNumber: 4, instruction: "Leave for 30 minutes." },
        { stepNumber: 5, instruction: "Wash off with a mild shampoo." },
      ],
      tips: ["Apply at night to avoid the smell during the day.", "Use rose water instead of lemon if you prefer."],
      warnings: ["Avoid contact with eyes."],
      results: "Reduced hair fall and thicker hair in 4-6 weeks."
    },
    author: { name: "Lifestyle Junction", verified: true },
    status: "published",
    beautyFields: {
      hairType: ["All hair types"],
      concern: ["Hair fall"],
      frequency: "3 times a week",
      shelfLife: "Use fresh"
    }
  },
  {
    title: "Anti-Dandruff Tea Tree & Curd Hair Pack",
    excerpt: "Fight stubborn dandruff with this soothing curd and tea tree oil pack that cleanses the scalp and relieves itchiness.",
    category: "Beauty & Self-Care",
    subCategory: "Hair Care",
    tags: ["Dandruff Control", "Natural DIY", "Shiny Hair"],
    difficulty: "Easy",
    prepTime: 5,
    totalTime: 35,
    costRange: "Under ₹100",
    ingredientsCount: 3,
    availability: "Easy to find",
    featuredImage: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600",
    content: {
      purpose: "Eliminate dandruff and soothe itchy scalp using natural antifungal ingredients.",
      ingredients: [
        { name: "Curd (yogurt)", quantity: "4 tbsp", cost: "₹15" },
        { name: "Tea tree oil", quantity: "5 drops", cost: "₹30" },
        { name: "Lemon juice", quantity: "1 tsp", cost: "₹5" },
      ],
      steps: [
        { stepNumber: 1, instruction: "Mix curd, tea tree oil, and lemon juice in a bowl." },
        { stepNumber: 2, instruction: "Apply generously to scalp and hair." },
        { stepNumber: 3, instruction: "Leave for 30 minutes." },
        { stepNumber: 4, instruction: "Rinse with cool water and shampoo." },
      ],
      tips: ["Use cold curd for an extra soothing effect.", "Do not use hot water to rinse."],
      warnings: ["Tea tree oil is potent — do not apply undiluted directly."],
      results: "Dandruff-free scalp in 2-3 weeks."
    },
    author: { name: "Lifestyle Junction", verified: true },
    status: "published",
    beautyFields: {
      hairType: ["Oily", "Normal"],
      concern: ["Dandruff", "Itchy scalp"],
      frequency: "Twice a week",
      shelfLife: "Use fresh"
    }
  },
  {
    title: "Egg & Olive Oil Mask for Shiny Hair",
    excerpt: "Restore shine and softness to dull, frizzy hair with this protein-rich egg and olive oil hair mask.",
    category: "Beauty & Self-Care",
    subCategory: "Hair Care",
    tags: ["Shiny Hair", "Natural DIY", "Hair Growth"],
    difficulty: "Easy",
    prepTime: 5,
    totalTime: 35,
    costRange: "Under ₹50",
    ingredientsCount: 3,
    availability: "Easy to find",
    featuredImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600",
    content: {
      purpose: "Nourish hair with protein and healthy fats to restore shine and reduce frizz.",
      ingredients: [
        { name: "Egg", quantity: "1 whole", cost: "₹10" },
        { name: "Olive oil", quantity: "2 tbsp", cost: "₹20" },
        { name: "Honey", quantity: "1 tbsp", cost: "₹15" },
      ],
      steps: [
        { stepNumber: 1, instruction: "Beat egg well and mix with olive oil and honey." },
        { stepNumber: 2, instruction: "Apply from roots to tips." },
        { stepNumber: 3, instruction: "Cover with a shower cap and leave for 30 minutes." },
        { stepNumber: 4, instruction: "Rinse with cool water (never hot — it will cook the egg!).", tip: "Always use cool water." },
        { stepNumber: 5, instruction: "Shampoo as usual." },
      ],
      tips: ["Add a few drops of lavender oil for a pleasant scent.", "Use weekly for salon-like shine."],
      warnings: ["Rinse with cool water only to avoid egg smell."],
      results: "Soft, shiny, frizz-free hair after first use."
    },
    author: { name: "Lifestyle Junction", verified: true },
    status: "published",
    beautyFields: {
      hairType: ["Dry", "Frizzy", "All hair types"],
      concern: ["Dull hair", "Frizz"],
      frequency: "Once a week",
      shelfLife: "Use fresh"
    }
  },
  {
    title: "Henna & Coffee Pack to Cover Grey Hair Naturally",
    excerpt: "Cover grey hair and add deep colour naturally with this henna and coffee pack — no chemicals needed.",
    category: "Beauty & Self-Care",
    subCategory: "Hair Care",
    tags: ["Grey Hair Fix", "Natural DIY", "Hair Growth"],
    difficulty: "Medium",
    prepTime: 20,
    totalTime: 120,
    costRange: "Under ₹200",
    ingredientsCount: 5,
    availability: "Easy to find",
    featuredImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
    content: {
      purpose: "Naturally colour grey hair using henna boosted with coffee for a rich brown tone.",
      ingredients: [
        { name: "Henna powder", quantity: "4 tbsp", cost: "₹30" },
        { name: "Strong brewed coffee", quantity: "½ cup", cost: "₹10" },
        { name: "Amla powder", quantity: "1 tbsp", cost: "₹10" },
        { name: "Lemon juice", quantity: "1 tbsp", cost: "₹5" },
        { name: "Coconut oil", quantity: "1 tsp", cost: "₹5" },
      ],
      steps: [
        { stepNumber: 1, instruction: "Mix henna powder with warm brewed coffee to form a thick paste. Let it sit overnight." },
        { stepNumber: 2, instruction: "Next morning, add amla powder, lemon juice, and coconut oil." },
        { stepNumber: 3, instruction: "Apply to hair section by section using gloves." },
        { stepNumber: 4, instruction: "Cover hair with a plastic cap and leave for 1.5–2 hours." },
        { stepNumber: 5, instruction: "Rinse thoroughly with water (no shampoo on the same day)." },
      ],
      tips: ["Apply on dry hair for better colour uptake.", "Avoid shampooing for 24 hours after application."],
      warnings: ["Wear old clothes and gloves — henna stains.", "Do a strand test first."],
      results: "Grey hair covered with natural reddish-brown tone. Lasts 3-4 weeks."
    },
    author: { name: "Lifestyle Junction", verified: true },
    status: "published",
    beautyFields: {
      hairType: ["All hair types"],
      concern: ["Grey hair"],
      frequency: "Once a month",
      shelfLife: "Use within 12 hours of mixing"
    }
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // Remove existing hair care articles to avoid duplicates
    await Article.deleteMany({ subCategory: "Hair Care" });
    console.log('Cleared existing Hair Care articles');

    const inserted = [];
    for (const data of hairCareArticles) {
      const article = new Article(data);
      await article.save();
      inserted.push(article);
    }
    console.log(`✅ Seeded ${inserted.length} Hair Care articles successfully`);

    mongoose.disconnect();
  } catch (err) {
    console.error('Seed failed:', err.message);
    mongoose.disconnect();
    process.exit(1);
  }
}

seed();
