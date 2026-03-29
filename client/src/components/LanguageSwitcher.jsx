import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    const addTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    if (!window.google) {
      addTranslateScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <div id="google_translate_element" className="ml-4"></div> // Adjust margin if needed
  );
};

export default LanguageSwitcher;
