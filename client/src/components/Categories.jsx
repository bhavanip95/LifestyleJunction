import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { categoryConfig } from "../Config/CategoryConfig";

// ── Per-category colour tokens ────────────────────────────────────────────────
const COLOR_MAP = {
  beauty:   { accent: "text-pink-600",   chip: "bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100",   cta: "text-pink-500 hover:text-pink-700"   },
  food:     { accent: "text-emerald-600", chip: "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100", cta: "text-emerald-500 hover:text-emerald-700" },
  family:   { accent: "text-violet-600",  chip: "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100",  cta: "text-violet-500 hover:text-violet-700"  },
  wellness: { accent: "text-teal-600",    chip: "bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100",    cta: "text-teal-500 hover:text-teal-700"    },
  home:     { accent: "text-amber-600",   chip: "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100",   cta: "text-amber-500 hover:text-amber-700"   },
  arts:     { accent: "text-rose-600",    chip: "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100",    cta: "text-rose-500 hover:text-rose-700"    },
  finance:  { accent: "text-blue-600",    chip: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",    cta: "text-blue-500 hover:text-blue-700"    },
  travel:   { accent: "text-orange-600",  chip: "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100",  cta: "text-orange-500 hover:text-orange-700"  },
};

// ── Trending quick-links ───────────────────────────────────────────────────────
const TRENDING = [
  { label: "💆‍♀️ Hair Care",  to: "/articles/beauty/hair-care" },
  { label: "👶 Parenting",   to: "/articles/family/parenting" },
  { label: "🧘 Yoga",        to: "/articles/wellness/yoga" },
  { label: "💰 Savings",     to: "/articles/finance/savings" },
  { label: "🍛 Cuisines",    to: "/articles/food/regional-cuisines" },
  { label: "🪴 Gardening",   to: "/articles/wellness/gardening" },
  { label: "🎨 Rangoli",     to: "/articles/arts/rangoli" },
  { label: "✈️ Travel",      to: "/articles/travel/travel-ideas" },
];

// ── Bottom Sheet (mobile "+N more") ───────────────────────────────────────────
function BottomSheet({ category, colors, onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl p-6 max-h-[70vh] overflow-y-auto animate-slide-up">
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />
        <h3 className={`text-base font-bold mb-4 ${colors.accent}`}>{category.title}</h3>
        <div className="space-y-2">
          {category.subCategories.map((sub) => (
            <Link
              key={sub.key}
              to={`/articles/${category.key}/${sub.key}`}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${colors.chip}`}
            >
              {sub.icon && <span className="text-lg">{sub.icon}</span>}
              <span className="font-medium text-sm">{sub.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Category card ─────────────────────────────────────────────────────────────
function CategoryCard({ category }) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const colors = COLOR_MAP[category.key] || COLOR_MAP.beauty;
  const subs = category.subCategories;
  const shown = subs.slice(0, 2);
  const hiddenCount = subs.length - 2;

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
        {/* Image */}
        <img
          src={category.image}
          alt={category.title}
          className="h-36 w-full object-cover"
          loading="lazy"
          onError={(e) => { e.target.style.display = "none"; }}
        />

        {/* Body */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          {/* Title + description */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 leading-snug">{category.title}</h3>
            <p className="text-xs text-gray-400 mt-0.5 leading-relaxed line-clamp-2">{category.description}</p>
          </div>

          {/* Subcategory chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {shown.map((sub) => (
              <Link
                key={sub.key}
                to={`/articles/${category.key}/${sub.key}`}
                className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium border rounded-full transition-colors ${colors.chip}`}
              >
                {sub.icon && <span>{sub.icon}</span>}
                <span>{sub.title}</span>
              </Link>
            ))}
            {hiddenCount > 0 && (
              <button
                onClick={() => setSheetOpen(true)}
                className={`text-xs font-semibold ${colors.cta} transition-colors`}
              >
                +{hiddenCount} more →
              </button>
            )}
          </div>

          {/* Explore CTA */}
          <div className="mt-auto pt-1">
            <Link
              to={`/articles/${category.key}/${subs[0]?.key}`}
              className={`inline-flex items-center gap-1 text-sm font-semibold group ${colors.cta} transition-colors`}
            >
              Explore
              <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
            </Link>
          </div>
        </div>
      </div>

      {sheetOpen && (
        <BottomSheet category={category} colors={colors} onClose={() => setSheetOpen(false)} />
      )}
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Categories() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-6 px-4 md:px-8 lg:px-16">
        {/* Trending strip */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">🔥 Trending</p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {TRENDING.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-all shadow-sm whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.values(categoryConfig).map((category) => (
            <CategoryCard key={category.key} category={category} />
          ))}
        </div>
      </div>

      <Blog />
    </>
  );
}
