
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryConfig } from "../Config/CategoryConfig";
import TagList from "./TagList";

const STOP_WORDS = new Set([
  "and",
  "or",
  "the",
  "a",
  "an",
  "for",
  "to",
  "of",
  "with",
  "your",
  "every",
  "daily",
  "easy",
  "simple",
  "smart",
  "tips",
  "guide",
  "ideas",
]);

const deriveTags = (sub) => {
  const text = `${sub.title || ""} ${sub.subtitle || ""}`;
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));

  const unique = [];
  for (const t of tokens) {
    if (!unique.includes(t)) unique.push(t);
    if (unique.length >= 4) break;
  }

  return unique.map((t) => t.replace(/-/g, " "));
};

export default function Article() {
  const { category, subCategory } = useParams();
  const cfg = categoryConfig[category];
  const sub = cfg?.subCategories?.find((item) => item.key === subCategory);

  const tags = useMemo(() => {
    if (!sub) return [];
    if (Array.isArray(sub.tags) && sub.tags.length) return sub.tags;
    return deriveTags(sub);
  }, [sub]);

  if (!cfg || !sub) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Category not found</h1>
        <p className="text-base-content/70 mb-4">
          We could not find that subcategory yet. Please choose another topic.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Categories
        </Link>
      </div>
    );
  }

  const heroImage = sub.heroImage || sub.image || cfg.image;
  const heroTitle = sub.heroTitle || sub.title;
  const heroSubtitle = sub.heroSubtitle || sub.subtitle || cfg.description;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to={`/articles/${cfg.key}/${sub.key}`}>{cfg.title}</Link>
            </li>
            <li>{sub.title}</li>
          </ul>
        </div>
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-stretch">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">
              {heroTitle}
            </h1>
            <p className="text-base-content/70 text-lg mb-5">{heroSubtitle}</p>
            {tags.length ? (
              <TagList tags={tags} />
            ) : (
              <div className="text-base-content/60 text-sm">
                Tags coming soon.
              </div>
            )}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-base-200">
            <img
              src={heroImage}
              alt={heroTitle}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-base-300 pt-6 text-base-content/70">
        Article details will be added here.
      </div>
    </div>
  );
}

