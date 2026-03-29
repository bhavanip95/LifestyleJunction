import React from "react";

const Footer = ()=>(
    <>
     <div data-theme="luxury" className="py-4 px-4 md:px-8 lg:px-16">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm mb-2 md:mb-0">
        &copy; 2025 Lifestyle Junction. All rights reserved.
      </p>
      <div className="space-x-4">
        {/* Social icons (placeholders) */}
        <a href="#twitter" className="hover:text-primary">
          <svg
            className="inline-block w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Twitter Icon */}
            <path d="M24 4.557...z" />
          </svg>
        </a>
        <a href="#facebook" className="hover:text-primary">
          <svg
            className="inline-block w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Facebook Icon */}
            <path d="M22.675 0h-21.35C0.6 0..." />
          </svg>
        </a>
        <a href="#instagram" className="hover:text-primary">
          <svg
            className="inline-block w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Instagram Icon */}
            <path d="M12 2.163c3.2 0..." />
          </svg>
        </a>
      </div>
    </div>
  </div></>
   

);
export default Footer