import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryConfig } from "../config/CategoryConfig";
import ArticlePanel from "./ArticlePanel";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const COST_RANGES = ["Under ₹50", "Under ₹100", "Under ₹200", "Under ₹500"];

export default function Article() {
  const { category, subCategory } = useParams();
  const cfg = categoryConfig[category];
  const sub = cfg?.subCategories?.find((item) => item.key === subCategory);

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedCost, setSelectedCost] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [clickedId, setClickedId] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const tags = useMemo(() => {
    if (!sub) return [];
    return Array.isArray(sub.tags) && sub.tags.length ? sub.tags : [];
  }, [sub]);

  useEffect(() => {
    if (!sub) return;
    setLoading(true);

    const params = new URLSearchParams({
      category: cfg.title,
      subCategory: sub.title,
    });
    if (selectedTags.length) params.set("tags", selectedTags.join(","));
    if (selectedDifficulty) params.set("difficulty", selectedDifficulty);

    fetch(`${import.meta.env.VITE_API_URL}/api/articles?${params}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          let data = res.data;
          if (selectedCost) data = data.filter((a) => a.costRange === selectedCost);
          setArticles(data);
        }
      })
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, [sub, selectedTags, selectedDifficulty, selectedCost]);

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAll = () => {
    setSelectedTags([]);
    setSelectedDifficulty(null);
    setSelectedCost(null);
  };

  const handleCardClick = (article) => {
    setClickedId(article._id);
    setTimeout(() => {
      setExpandedArticle(article);
      setClickedId(null);
    }, 180);
  };

  const activeFiltersCount =
    selectedTags.length + (selectedDifficulty ? 1 : 0) + (selectedCost ? 1 : 0);

  if (!cfg || !sub) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Category not found</h1>
        <Link to="/" className="btn btn-primary">Back to Categories</Link>
      </div>
    );
  }

  const heroImage = sub.heroImage || sub.image || cfg.image;
  const heroTitle = sub.heroTitle || sub.title;
  const heroSubtitle = sub.heroSubtitle || sub.subtitle || cfg.description;

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Active filters */}
      {activeFiltersCount > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
              Active Filters
            </span>
            <button onClick={clearAll} className="text-xs text-pink-500 hover:underline">
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {selectedTags.map((t) => (
              <button
                key={t}
                onClick={() => handleTagClick(t)}
                className="px-2.5 py-1 rounded-full text-xs bg-pink-500 text-white flex items-center gap-1 hover:bg-pink-600"
              >
                {t} <span className="opacity-70">✕</span>
              </button>
            ))}
            {selectedDifficulty && (
              <button
                onClick={() => setSelectedDifficulty(null)}
                className="px-2.5 py-1 rounded-full text-xs bg-purple-500 text-white flex items-center gap-1 hover:bg-purple-600"
              >
                {selectedDifficulty} <span className="opacity-70">✕</span>
              </button>
            )}
            {selectedCost && (
              <button
                onClick={() => setSelectedCost(null)}
                className="px-2.5 py-1 rounded-full text-xs bg-green-500 text-white flex items-center gap-1 hover:bg-green-600"
              >
                {selectedCost} <span className="opacity-70">✕</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Topics / Tags */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-2">
          Topics
        </h3>
        <div className="flex flex-col gap-1">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                selectedTags.includes(tag)
                  ? "bg-pink-500 text-white font-semibold shadow-sm"
                  : "hover:bg-pink-50 text-base-content hover:text-pink-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-2">
          Difficulty
        </h3>
        <div className="flex flex-col gap-1">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty((prev) => (prev === d ? null : d))}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                selectedDifficulty === d
                  ? "bg-purple-500 text-white font-semibold shadow-sm"
                  : "hover:bg-purple-50 text-base-content hover:text-purple-700"
              }`}
            >
              {d === "Easy" ? "🟢" : d === "Medium" ? "🟡" : "🔴"} {d}
            </button>
          ))}
        </div>
      </div>

      {/* Cost Range */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-base-content/40 mb-2">
          Cost Range
        </h3>
        <div className="flex flex-col gap-1">
          {COST_RANGES.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCost((prev) => (prev === c ? null : c))}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                selectedCost === c
                  ? "bg-green-500 text-white font-semibold shadow-sm"
                  : "hover:bg-green-50 text-base-content hover:text-green-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li><Link to="/">Categories</Link></li>
          <li><Link to={`/articles/${cfg.key}/${sub.key}`}>{cfg.title}</Link></li>
          <li>{sub.title}</li>
        </ul>
      </div>

      {/* Hero */}
      <div
        className={`grid gap-6 items-stretch mb-8 ${
          heroImage && !imageError ? "md:grid-cols-[1.2fr_1fr]" : ""
        }`}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">{heroTitle}</h1>
          <p className="text-base-content/70 text-lg">{heroSubtitle}</p>
        </div>
        {heroImage && !imageError && (
          <div className="rounded-2xl overflow-hidden shadow-lg bg-base-200 max-h-72">
            <img
              src={heroImage}
              alt={heroTitle}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>

      {/* Mobile filter toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMobileFiltersOpen((v) => !v)}
          className="btn btn-outline btn-sm gap-2"
        >
          <span>⚙️</span> Filters
          {activeFiltersCount > 0 && (
            <span className="badge badge-sm bg-pink-500 text-white border-0">{activeFiltersCount}</span>
          )}
        </button>
        {mobileFiltersOpen && (
          <div className="mt-3 p-4 bg-base-200 rounded-xl border border-base-300">
            <FilterPanel />
          </div>
        )}
      </div>

      {/* Main layout */}
      <div className="border-t border-base-300 pt-6 flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-52 shrink-0">
          <div className="sticky top-4">
            <FilterPanel />
          </div>
        </aside>

        {/* Articles */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-semibold mb-5">
            {activeFiltersCount > 0
              ? `Results (${articles.length})`
              : `All ${sub.title} Articles`}
          </h2>

          {loading && (
            <div className="flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-pink-500" />
            </div>
          )}

          {!loading && articles.length === 0 && (
            <div className="text-center py-12 text-base-content/50">
              <p className="text-lg">No articles found.</p>
              <p className="text-sm mt-1">Try a different filter or check back soon!</p>
            </div>
          )}

          {!loading && articles.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <div
                  key={article._id}
                  onClick={() => handleCardClick(article)}
                  style={{ transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
                  className={`card bg-base-100 shadow-md overflow-hidden cursor-pointer select-none
                    ${clickedId === article._id
                      ? "scale-105 shadow-2xl ring-2 ring-pink-400"
                      : "hover:scale-[1.02] hover:shadow-xl"
                    }`}
                >
                  {article.featuredImage && (
                    <figure>
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  )}
                  <div className="card-body p-4">
                    <h3 className="card-title text-sm leading-snug">{article.title}</h3>
                    <p className="text-xs text-base-content/60 line-clamp-2 mt-0.5">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-base-content/40">
                      <span>👁 {article.views}</span>
                      <span>❤️ {article.likes}</span>
                      <span
                        className={`ml-auto font-semibold ${
                          article.difficulty === "Easy"
                            ? "text-green-500"
                            : article.difficulty === "Medium"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {article.difficulty}
                      </span>
                    </div>
                    <p className="text-xs text-pink-400 mt-1 font-medium">Tap to read →</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Detail Panel */}
      {expandedArticle && (
        <ArticlePanel
          article={expandedArticle}
          onClose={() => setExpandedArticle(null)}
        />
      )}
    </div>
  );
}
