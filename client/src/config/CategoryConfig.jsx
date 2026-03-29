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
        title: "Hair Care",
        subtitle: "Healthy hair made simple",
        image: "/images/subcategories/hair-care.jpg",
        tags: ["Dandruff Control", "Hair Growth", "Shiny Hair", "Natural DIY", "Grey Hair Fix"]
      },
      {
        key: "skin-care",
        title: "Skin Care",
        subtitle: "Daily care for glowing skin",
        image: "/images/subcategories/skin-care.jpg",
        tags: ["Glowing Skin", "Acne Control", "Anti-Aging", "Daily Routine", "Organic Glow"]
      },
      {
        key: "makeup",
        title: "Makeup",
        subtitle: "Easy everyday looks",
        image: "/images/subcategories/makeup.jpg",
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
        title: "Regional Cuisines",
        subtitle: "Flavors from every region",
        image: "/images/subcategories/regional-cuisines.jpg",
        tags: ["South Indian", "North Indian", "Street Food", "Festive Special", "Authentic"]
      },
      {
        key: "healthy-snacks",
        title: "Healthy Snacks",
        subtitle: "Quick & guilt-free",
        image: "/images/subcategories/healthy-snacks.jpg",
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
        title: "Baby Care",
        subtitle: "Safe & loving baby care tips",
        image: "/images/family/baby-care.jpg",
        tags: ["New Born Tips", "Safe Products", "Sleep Routine", "Feeding Guide", "Diapering"]
      },
      {
        key: "parenting",
        title: "Parenting",
        subtitle: "Raising kids with confidence",
        image: "/images/family/parenting.jpg",
        tags: ["Toddler Tips", "School Ready", "Positive Parenting", "Fun Activities", "Discipline"]
      },
      {
        key: "new-mom-support",
        title: "New Mom Support",
        subtitle: "Care after delivery",
        image: "/images/family/new-mom.jpg",
        tags: ["Postpartum Care", "Diet for Moms", "Recovery Tips", "Mental Peace", "Nursing Support"]
      },
      {
        key: "pregnancy-care",
        title: "Pregnancy Care",
        subtitle: "Care through every trimester",
        image: "/images/family/pregnancy.jpg",
        tags: ["Trimester Guide", "Healthy Diet", "Exercise Tips", "Safe Travel", "Hospital Bag"]
      },
      {
        key: "elderly-care",
        title: "Elderly Care",
        subtitle: "Support for aging parents",
        image: "/images/family/elderly.jpg",
        tags: ["Health Monitoring", "Easy Diet", "Joint Care", "Mental Health", "Safety Tips"]
      },
      {
        key: "relationships",
        title: "Relationship Advice",
        subtitle: "Stronger family bonds",
        image: "/images/family/relationships.jpg",
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
        title: "Yoga",
        subtitle: "Gentle practices for daily wellness",
        image: "/images/wellness/yoga.jpg",
        tags: ["Stress Relief", "Weight Loss", "Flexibility", "Morning Routine", "Pregnancy Yoga"]
      },
      {
        key: "home-remedies",
        title: "Home Remedies",
        subtitle: "Grandma-approved natural cures",
        image: "/images/wellness/remedies.jpg",
        tags: ["Cold & Flu", "Digestion", "Immunity Boost", "Natural Painkiller", "Skin Fix"]
      },
      {
        key: "mental-health",
        title: "Mental Health",
        subtitle: "Care for your mind",
        image: "/images/wellness/mental.jpg",
        tags: ["Meditation", "Anxiety Relief", "Sleep Better", "Journaling", "Self Love"]
      },
      {
        key: "immunity",
        title: "Immunity Care",
        subtitle: "Boost immunity naturally",
        image: "/images/wellness/immunity.jpg",
        tags: ["Herbal Tea", "Superfoods", "Seasonal Care", "Daily Habits", "Kids Immunity"]
      },
      {
        key: "gardening",
        title: "Gardening",
        subtitle: "Wellness through plants",
        image: "/images/wellness/gardening.jpg",
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
        title: "Home Organization",
        subtitle: "Simple storage solutions",
        image: "/images/home/organization.jpg",
        tags: ["Clutter Free", "Wardrobe Hack", "Small Space", "Aesthetic Home", "Daily Routine"]
      },
      {
        key: "cleaning-hacks",
        title: "Cleaning Hacks",
        subtitle: "Clean smarter, not harder",
        image: "/images/home/cleaning.jpg",
        tags: ["Time Savers", "Natural Cleaners", "Stain Removal", "Deep Cleaning", "Hygiene"]
      },
      {
        key: "storage-ideas",
        title: "Storage Ideas",
        subtitle: "Make space smarter",
        image: "/images/home/storage.jpg",
        tags: ["Hidden Storage", "Shelf Styling", "Multipurpose", "DIY Organizers", "Box Storage"]
      },
      {
        key: "kitchen-hacks",
        title: "Kitchen Hacks",
        subtitle: "Simplify daily cooking",
        image: "/images/home/kitchen.jpg",
        tags: ["Faster Cooking", "Meal Prep", "Fresh Storage", "Spice Secrets", "Utensil Care"]
      },
      {
        key: "minimal-living",
        title: "Minimal Living",
        subtitle: "Clutter-free life",
        image: "/images/home/minimal.jpg",
        tags: ["Simple Life", "Capsule Wardrobe", "Digital Detox", "Sustainable", "Mindful Buying"]
      },
      {
        key: "vastu-basics",
        title: "Vastu Basics",
        subtitle: "Positive home energy",
        image: "/images/home/vastu.jpg",
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
        title: "Rangoli Designs",
        subtitle: "Traditional floor art",
        image: "/images/arts/rangoli.jpg",
        tags: ["Festive Special", "Daily Patterns", "Border Design", "Flower Rangoli", "Beginner Friendly"]
      },
      {
        key: "mehendi",
        title: "Mehendi Designs",
        subtitle: "Beautiful hand art",
        image: "/images/arts/mehendi.jpg",
        tags: ["Bridal Special", "Simple Arabic", "Back Hand", "Finger Mehendi", "Festive Looks"]
      },
      {
        key: "crafts",
        title: "DIY Crafts",
        subtitle: "Creative handmade projects",
        image: "/images/arts/crafts.jpg",
        tags: ["Upcycling", "Wall Decor", "Gift Ideas", "Paper Craft", "Home Accent"]
      },
      {
        key: "kids-crafts",
        title: "Crafts for Kids",
        subtitle: "Fun learning activities",
        image: "/images/arts/kids-crafts.jpg",
        tags: ["School Project", "Sensory Play", "Holiday Crafts", "Easy Origami", "Recycled Art"]
      },
      {
        key: "blouse-designs",
        title: "Blouse Designs",
        subtitle: "Modern & classic styles",
        image: "/images/arts/blouse.jpg",
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
        title: "Savings Tips",
        subtitle: "Smart money habits",
        image: "/images/finance/savings.jpg",
        tags: ["Monthly Budget", "Emergency Fund", "Gold Investment", "Smart Shopping", "Tax Saving"]
      },
      {
        key: "government-schemes",
        title: "Government Schemes",
        subtitle: "Benefits & support",
        image: "/images/finance/schemes.jpg",
        tags: ["Women Schemes", "Senior Citizen", "Education Loan", "Housing Subsidy", "Farm Support"]
      },
      {
        key: "budget-planning",
        title: "Budget Planning",
        subtitle: "Plan & track expenses",
        image: "/images/finance/budget.jpg",
        tags: ["Family Expense", "Savings Goal", "Debt Free", "Tracking Apps", "Holiday Budget"]
      },
      {
        key: "side-hustles",
        title: "Side Hustles",
        subtitle: "Extra income ideas",
        image: "/images/finance/hustle.jpg",
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
        title: "Travel Ideas",
        subtitle: "Inspiration for trips",
        image: "/images/travel/ideas.jpg",
        tags: ["Weekend Trip", "Solo Travel", "Family Vacation", "Budget Travel", "Road Trip"]
      },
      {
        key: "pilgrimage",
        title: "Pilgrimage Trips",
        subtitle: "Spiritual journeys",
        image: "/images/travel/pilgrimage.jpg",
        tags: ["Sacred Sites", "Temple Guide", "Travel Tips", "Spiritual Journey", "Group Tour"]
      },
      {
        key: "festivals-traditions",
        title: "Festivals & Traditions",
        subtitle: "Celebrate Indian culture",
        image: "/images/travel/festivals.jpg",
        tags: ["Puja Vidhi", "Traditional Food", "Cultural Facts", "Home Decor", "Dressing Up"]
      },
      {
        key: "vrat-fasting",
        title: "Vrat & Fasting",
        subtitle: "Traditional practices",
        image: "/images/travel/fasting.jpg",
        tags: ["Vrat Recipes", "Fasting Rules", "Energy Food", "Sabudana Special", "Rituals"]
      },
    ],
  },
};