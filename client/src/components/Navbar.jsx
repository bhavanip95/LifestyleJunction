import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const WORDS = ["🌿 GLOW", "🍲 COOK", "🧘 CALM", "🎨 CREATE", "💰 SAVE", "✈️ TRAVEL"];

const Navbar = () => {
  return (
    <div data-theme="dracula">
      <header className="sticky top-0 z-30 flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 border-b border-gray-800">

        {/* Brand + rotating word — all on ONE line */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
            Lifestyle Junction
          </Link>

          <span className="text-gray-500 text-lg hidden sm:block">•</span>

          <div className="hidden sm:flex flex-col items-start overflow-hidden" style={{ height: "1.4em" }}>
            <div className="rotate-words text-base md:text-lg font-extrabold text-primary">
              {WORDS.map((w, i) => (
                <div key={i} style={{ height: "1.4em", display: "flex", alignItems: "center" }}>{w}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Language switcher */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>

      </header>
    </div>
  );
};

export default Navbar;
