import React, { useEffect, useState } from "react";

export default function ArticlePanel({ article, onClose }) {
  const [fullArticle, setFullArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    fetch(`${import.meta.env.VITE_API_URL}/api/articles/${article.slug}`)
      .then((res) => res.json())
      .then((res) => { if (res.success) setFullArticle(res.data); })
      .catch(() => setFullArticle(article))
      .finally(() => setLoading(false));

    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [article]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const data = fullArticle || article;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[56%] lg:w-[46%] bg-base-100 shadow-2xl z-50
          overflow-y-auto transition-transform duration-300 ease-out
          ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-base-100/95 backdrop-blur border-b border-base-300 px-5 py-3 flex items-center justify-between z-10">
          <div className="flex gap-2 flex-wrap">
            {data.tags?.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-pink-100 text-pink-700 border border-pink-200">
                {t}
              </span>
            ))}
          </div>
          <button onClick={handleClose} className="btn btn-ghost btn-sm btn-circle text-base">✕</button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <span className="loading loading-spinner loading-lg text-pink-500" />
          </div>
        ) : (
          <div className="px-6 py-5 space-y-6">
            {/* Featured Image */}
            {data.featuredImage && (
              <img
                src={data.featuredImage}
                alt={data.title}
                className="w-full h-52 object-cover rounded-xl shadow"
              />
            )}

            {/* Title & Meta */}
            <div>
              <h1 className="text-2xl font-bold mb-2 leading-snug">{data.title}</h1>
              <p className="text-base-content/70 text-sm">{data.excerpt}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-base-content/50">
                {data.difficulty && (
                  <span className={`font-medium ${data.difficulty === "Easy" ? "text-green-600" : data.difficulty === "Medium" ? "text-yellow-600" : "text-red-600"}`}>
                    📊 {data.difficulty}
                  </span>
                )}
                {data.totalTime && <span>⏱ {data.totalTime} min</span>}
                {data.costRange && <span>💰 {data.costRange}</span>}
                {data.ingredientsCount && <span>🧴 {data.ingredientsCount} ingredients</span>}
              </div>
            </div>

            {/* Purpose */}
            {data.content?.purpose && (
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                <h3 className="font-semibold text-pink-700 mb-1 text-sm uppercase tracking-wide">Purpose</h3>
                <p className="text-sm">{data.content.purpose}</p>
              </div>
            )}

            {/* Ingredients */}
            {data.content?.ingredients?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-3">🧴 Ingredients</h3>
                <ul className="divide-y divide-base-200">
                  {data.content.ingredients.map((ing, i) => (
                    <li key={i} className="flex justify-between items-center py-2">
                      <span className="font-medium text-sm">{ing.name}</span>
                      <div className="text-right text-sm text-base-content/60">
                        <span>{ing.quantity}</span>
                        {ing.cost && <span className="ml-3 text-green-600 font-medium">{ing.cost}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps */}
            {data.content?.steps?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-3">📋 Steps</h3>
                <ol className="space-y-4">
                  {data.content.steps.map((step) => (
                    <li key={step.stepNumber} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold">
                        {step.stepNumber}
                      </span>
                      <div>
                        <p className="text-sm">{step.instruction}</p>
                        {step.tip && (
                          <p className="text-xs text-yellow-600 mt-1">💡 {step.tip}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Tips */}
            {data.content?.tips?.length > 0 && (
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                <h3 className="font-semibold text-yellow-700 mb-2 text-sm">💡 Pro Tips</h3>
                <ul className="space-y-1">
                  {data.content.tips.map((tip, i) => (
                    <li key={i} className="text-sm flex gap-2"><span className="text-yellow-500">•</span>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warnings */}
            {data.content?.warnings?.length > 0 && (
              <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                <h3 className="font-semibold text-red-700 mb-2 text-sm">⚠️ Caution</h3>
                <ul className="space-y-1">
                  {data.content.warnings.map((w, i) => (
                    <li key={i} className="text-sm flex gap-2"><span className="text-red-400">•</span>{w}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {data.content?.results && (
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-green-700 mb-1 text-sm">✅ Expected Results</h3>
                <p className="text-sm">{data.content.results}</p>
              </div>
            )}

            {/* Beauty Metadata */}
            {data.beautyFields && (
              <div className="grid grid-cols-2 gap-3 text-sm">
                {data.beautyFields.hairType?.length > 0 && (
                  <div className="bg-base-200 rounded-xl p-3">
                    <p className="font-semibold text-xs uppercase text-base-content/40 mb-1">Hair Type</p>
                    <p>{data.beautyFields.hairType.join(", ")}</p>
                  </div>
                )}
                {data.beautyFields.concern?.length > 0 && (
                  <div className="bg-base-200 rounded-xl p-3">
                    <p className="font-semibold text-xs uppercase text-base-content/40 mb-1">Concern</p>
                    <p>{data.beautyFields.concern.join(", ")}</p>
                  </div>
                )}
                {data.beautyFields.frequency && (
                  <div className="bg-base-200 rounded-xl p-3">
                    <p className="font-semibold text-xs uppercase text-base-content/40 mb-1">Frequency</p>
                    <p>{data.beautyFields.frequency}</p>
                  </div>
                )}
                {data.beautyFields.shelfLife && (
                  <div className="bg-base-200 rounded-xl p-3">
                    <p className="font-semibold text-xs uppercase text-base-content/40 mb-1">Shelf Life</p>
                    <p>{data.beautyFields.shelfLife}</p>
                  </div>
                )}
              </div>
            )}

            <div className="pb-8" />
          </div>
        )}
      </div>
    </>
  );
}
