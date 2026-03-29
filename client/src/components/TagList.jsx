import React from "react";

function TagList({ tags, selectedTag, onTagClick }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        const isSelected = selectedTag === tag;
        return (
          <button
            key={index}
            onClick={() => onTagClick && onTagClick(isSelected ? null : tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer
              ${isSelected
                ? "bg-pink-500 text-white border-pink-500 shadow-md"
                : "bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:shadow-md"
              }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

export default TagList;
