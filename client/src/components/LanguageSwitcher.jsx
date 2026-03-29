import React, { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "bn", label: "বাংলা" },
];

const LanguageSwitcher = () => {
  const [selected, setSelected] = useState("en");

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element_hidden"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    const langCode = e.target.value;
    setSelected(langCode);

    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Hidden Google Translate widget */}
      <div id="google_translate_element_hidden" className="hidden" />

      {/* Custom dropdown */}
      <select
        value={selected}
        onChange={handleChange}
        className="bg-transparent border border-gray-500 text-white text-sm rounded-lg px-3 py-1.5 cursor-pointer hover:border-white transition-colors duration-200 outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-gray-800 text-white">
            {lang.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageSwitcher;
