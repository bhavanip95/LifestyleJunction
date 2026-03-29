import React from "react";

function TagList({ tags }) {
  // Possible badge color classes
  const badgeClasses = [
    "badge-primary",
    "badge-secondary",
    "badge-accent",
    "badge-neutral",
    "badge-info",
    "badge-success",
    "badge-warning",
    "badge-error",
  ];

  // Helper function to pick a random class
  const getRandomBadgeClass = () => {
    const randomIndex = Math.floor(Math.random() * badgeClasses.length);
    return badgeClasses[randomIndex];
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem", // space between badges
       
      }}
    >
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`badge badge-dash ${getRandomBadgeClass()}`}
          style={{
            padding: "0.5rem 1rem", // add some internal padding
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
export default TagList