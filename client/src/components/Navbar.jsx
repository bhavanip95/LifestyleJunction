import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <div data-theme="dracula">
      <header className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 border-b border-gray-800">
        
        {/* 3D Brand Name - Acts as the "Home" button */}
        <Link to="/" className="hover-3d text-3xl md:text-4xl font-bold tracking-tight">
          Lifestyle Junction
        </Link>

            <section  className="text-center mb-16 py-6  rounded-3xl shadow-xl">
                  <h1 className="text-3xl md:text-3xl font-bold mb-4">
                    Everything you need to...
                  </h1>
                  
                  {/* Rotation Container */}
                  <div className="text-rotate-container text-3xl md:text-3xl font-extrabold text-primary">
                    <div className="text-rotate-inner">
                      <div>🌿 GLOW</div>
                      <div>🍲 COOK</div>
                      <div>🧘 CALM</div>
                      <div>🎨 CREATE</div>
                      <div>💰 SAVE</div>
                      <div>✈️ TRAVEL</div>
                    </div>
                  </div>
        
                  <p className="mt-8 text-lg opacity-80 max-w-2xl mx-auto">
                    Your daily guide to a better, more creative, and organized lifestyle.
                  </p>
                </section>

    
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>

      </header>
    </div>
  );
};

export default Navbar;