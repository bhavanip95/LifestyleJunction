export const categoryConfig = {
  beauty: {
    key: "beauty",
    title: "Beauty & Self-Care",
    description: "Glow naturally with simple self-care routines.",
    image: "/Images/categories/beauty.jpg",
    route: "/articles/beauty",
    subCategories: [
      {
        key: "hair-care",
        icon: "💆‍♀️",
        title: "Hair Care",
        subtitle: "Healthy hair made simple",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
        tags: ["Dandruff Control", "Hair Growth", "Shiny Hair", "Natural DIY", "Grey Hair Fix"]
      },
      {
        key: "skin-care",
        icon: "✨",
        title: "Skin Care",
        subtitle: "Daily care for glowing skin",
        image: "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=800",
        tags: ["Glowing Skin", "Acne Control", "Anti-Aging", "Daily Routine", "Organic Glow"]
      },
      {
        key: "makeup",
        icon: "💄",
        title: "Makeup",
        subtitle: "Easy everyday looks",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
        tags: ["Office Look", "Party Ready", "Minimalist", "Beginner Friendly", "Bridal Tips"]
      },
    ],
  },

  food: {
    key: "food",
    title: "Food & Nutrition",
    description: "Cook smart, eat healthy & enjoy every bite.",
    image: "/Images/categories/food.jpg",
    route: "/articles/food",
    subCategories: [
      {
        key: "regional-cuisines",
        icon: "🍛",
        title: "Regional Cuisines",
        subtitle: "Flavors from every region",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
        tags: ["South Indian", "North Indian", "Street Food", "Festive Special", "Authentic"]
      },
      {
        key: "healthy-snacks",
        icon: "🥗",
        title: "Healthy Snacks",
        subtitle: "Quick & guilt-free",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
        tags: ["Low Calorie", "Kids Choice", "High Protein", "Quick Bites", "Roasted"]
      },
    ],
  },

  family: {
    key: "family",
    title: "Family & Lifestyle",
    description: "Everyday tips for a happy family life.",
    image: "/Images/categories/family.jpg",
    route: "/articles/family",
    subCategories: [
      {
        key: "baby-care",
        icon: "👶",
        title: "Baby Care",
        subtitle: "Safe & loving baby care tips",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800",
        tags: ["New Born Tips", "Safe Products", "Sleep Routine", "Feeding Guide", "Diapering"]
      },
      {
        key: "parenting",
        icon: "🧒",
        title: "Parenting",
        subtitle: "Raising kids with confidence",
        image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800",
        tags: ["Toddler Tips", "School Ready", "Positive Parenting", "Fun Activities", "Discipline"]
      },
      {
        key: "new-mom-support",
        icon: "🤱",
        title: "New Mom Support",
        subtitle: "Care after delivery",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800",
        tags: ["Postpartum Care", "Diet for Moms", "Recovery Tips", "Mental Peace", "Nursing Support"]
      },
      {
        key: "pregnancy-care",
        icon: "🤰",
        title: "Pregnancy Care",
        subtitle: "Care through every trimester",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        tags: ["Trimester Guide", "Healthy Diet", "Exercise Tips", "Safe Travel", "Hospital Bag"]
      },
      {
        key: "elderly-care",
        icon: "🧓",
        title: "Elderly Care",
        subtitle: "Support for aging parents",
        image: "https://images.unsplash.com/photo-1576765974980-02f2ca3b01a5?w=800",
        tags: ["Health Monitoring", "Easy Diet", "Joint Care", "Mental Health", "Safety Tips"]
      },
      {
        key: "relationships",
        icon: "🤝",
        title: "Relationship Advice",
        subtitle: "Stronger family bonds",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
        tags: ["Better Bonding", "Communication", "Trust Building", "Family Peace", "In-law Harmony"]
      },
    ],
  },

  wellness: {
    key: "wellness",
    title: "Health & Wellness",
    description: "Daily habits for better health & calm.",
    image: "/Images/categories/wellness.jpg",
    route: "/articles/wellness",
    subCategories: [
      {
        key: "yoga",
        icon: "🧘",
        title: "Yoga",
        subtitle: "Gentle practices for daily wellness",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
        tags: ["Stress Relief", "Weight Loss", "Flexibility", "Morning Routine", "Pregnancy Yoga"]
      },
      {
        key: "home-remedies",
        icon: "🌿",
        title: "Home Remedies",
        subtitle: "Grandma-approved natural cures",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
        tags: ["Cold & Flu", "Digestion", "Immunity Boost", "Natural Painkiller", "Skin Fix"]
      },
      {
        key: "mental-health",
        icon: "🧠",
        title: "Mental Health",
        subtitle: "Care for your mind",
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800",
        tags: ["Meditation", "Anxiety Relief", "Sleep Better", "Journaling", "Self Love"]
      },
      {
        key: "immunity",
        icon: "🛡️",
        title: "Immunity Care",
        subtitle: "Boost immunity naturally",
        image: "https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=800",
        tags: ["Herbal Tea", "Superfoods", "Seasonal Care", "Daily Habits", "Kids Immunity"]
      },
      {
        key: "gardening",
        icon: "🪴",
        title: "Gardening",
        subtitle: "Wellness through plants",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
        tags: ["Indoor Plants", "Kitchen Garden", "Flower Care", "Low Maintenance", "Organic"]
      },
    ],
  },

  home: {
    key: "home",
    title: "Home & Living",
    description: "Smart ideas for a better home.",
    image: "/Images/categories/community.jpg",
    route: "/articles/home",
    subCategories: [
      {
        key: "home-organization",
        icon: "🗂️",
        title: "Home Organization",
        subtitle: "Simple storage solutions",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        tags: ["Clutter Free", "Wardrobe Hack", "Small Space", "Aesthetic Home", "Daily Routine"]
      },
      {
        key: "cleaning-hacks",
        icon: "🧹",
        title: "Cleaning Hacks",
        subtitle: "Clean smarter, not harder",
        image: "https://images.unsplash.com/photo-1527515637462-cff94ebb4fdb?w=800",
        tags: ["Time Savers", "Natural Cleaners", "Stain Removal", "Deep Cleaning", "Hygiene"]
      },
      {
        key: "storage-ideas",
        icon: "📦",
        title: "Storage Ideas",
        subtitle: "Make space smarter",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
        tags: ["Hidden Storage", "Shelf Styling", "Multipurpose", "DIY Organizers", "Box Storage"]
      },
      {
        key: "kitchen-hacks",
        icon: "🍳",
        title: "Kitchen Hacks",
        subtitle: "Simplify daily cooking",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
        tags: ["Faster Cooking", "Meal Prep", "Fresh Storage", "Spice Secrets", "Utensil Care"]
      },
      {
        key: "minimal-living",
        icon: "🪷",
        title: "Minimal Living",
        subtitle: "Clutter-free life",
        image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800",
        tags: ["Simple Life", "Capsule Wardrobe", "Digital Detox", "Sustainable", "Mindful Buying"]
      },
      {
        key: "vastu-basics",
        icon: "🏠",
        title: "Vastu Basics",
        subtitle: "Positive home energy",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        tags: ["Entrance Vastu", "Kitchen Direction", "Bedroom Peace", "Wealth Flow", "Positive Vibes"]
      },
    ],
  },

  arts: {
    key: "arts",
    title: "Arts, Crafts & Fashion",
    description: "Create, design & express your style.",
    image: "/Images/categories/arts.jpg",
    route: "/articles/arts",
    subCategories: [
      {
        key: "rangoli",
        icon: "🎨",
        title: "Rangoli Designs",
        subtitle: "Traditional floor art",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800",
        tags: ["Festive Special", "Daily Patterns", "Border Design", "Flower Rangoli", "Beginner Friendly"]
      },
      {
        key: "mehendi",
        icon: "🖐️",
        title: "Mehendi Designs",
        subtitle: "Beautiful hand art",
        image: "https://images.unsplash.com/photo-1596003906949-67221c37965c?w=800",
        tags: ["Bridal Special", "Simple Arabic", "Back Hand", "Finger Mehendi", "Festive Looks"]
      },
      {
        key: "crafts",
        icon: "✂️",
        title: "DIY Crafts",
        subtitle: "Creative handmade projects",
        image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800",
        tags: ["Upcycling", "Wall Decor", "Gift Ideas", "Paper Craft", "Home Accent"]
      },
      {
        key: "kids-crafts",
        icon: "🖍️",
        title: "Crafts for Kids",
        subtitle: "Fun learning activities",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
        tags: ["School Project", "Sensory Play", "Holiday Crafts", "Easy Origami", "Recycled Art"]
      },
      {
        key: "blouse-designs",
        icon: "👗",
        title: "Blouse Designs",
        subtitle: "Modern & classic styles",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800",
        tags: ["Wedding Special", "Back Neck", "Modern Cut", "Elbow Length", "Cotton Saree Fix"]
      },
    ],
  },

  finance: {
    key: "finance",
    title: "Finance & Career",
    description: "Grow your money, skills & confidence.",
    image: "/Images/categories/finance.jpg",
    route: "/articles/finance",
    subCategories: [
      {
        key: "savings",
        icon: "💰",
        title: "Savings Tips",
        subtitle: "Smart money habits",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        tags: ["Monthly Budget", "Emergency Fund", "Gold Investment", "Smart Shopping", "Tax Saving"]
      },
      {
        key: "government-schemes",
        icon: "🏛️",
        title: "Government Schemes",
        subtitle: "Benefits & support",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
        tags: ["Women Schemes", "Senior Citizen", "Education Loan", "Housing Subsidy", "Farm Support"]
      },
      {
        key: "budget-planning",
        icon: "📊",
        title: "Budget Planning",
        subtitle: "Plan & track expenses",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
        tags: ["Family Expense", "Savings Goal", "Debt Free", "Tracking Apps", "Holiday Budget"]
      },
      {
        key: "side-hustles",
        icon: "💼",
        title: "Side Hustles",
        subtitle: "Extra income ideas",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800",
        tags: ["Home Business", "Freelancing", "Tutoring", "Content Creation", "Selling Crafts"]
      },
    ],
  },

  travel: {
    key: "travel",
    title: "Travel & Culture",
    description: "Explore places, festivals & traditions.",
    image: "/Images/categories/travel.jpg",
    route: "/articles/travel",
    subCategories: [
      {
        key: "travel-ideas",
        icon: "✈️",
        title: "Travel Ideas",
        subtitle: "Inspiration for trips",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
        tags: ["Weekend Trip", "Solo Travel", "Family Vacation", "Budget Travel", "Road Trip"]
      },
      {
        key: "pilgrimage",
        icon: "🛕",
        title: "Pilgrimage Trips",
        subtitle: "Spiritual journeys",
        image: "https://images.unsplash.com/photo-1545820988-8af73a0b6600?w=800",
        tags: ["Sacred Sites", "Temple Guide", "Travel Tips", "Spiritual Journey", "Group Tour"]
      },
      {
        key: "festivals-traditions",
        icon: "🪔",
        title: "Festivals & Traditions",
        subtitle: "Celebrate Indian culture",
        image: "https://images.unsplash.com/photo-1563492065-4f43b5b8b8ac?w=800",
        tags: ["Puja Vidhi", "Traditional Food", "Cultural Facts", "Home Decor", "Dressing Up"]
      },
      {
        key: "vrat-fasting",
        icon: "🙏",
        title: "Vrat & Fasting",
        subtitle: "Traditional practices",
        image: "https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=800",
        tags: ["Vrat Recipes", "Fasting Rules", "Energy Food", "Sabudana Special", "Rituals"]
      },
    ],
  },
};
