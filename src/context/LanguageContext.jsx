import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

const SUPPORTED_LANGUAGES = ["en", "sw"];

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem("36cc-language");

    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }
  } catch {
    // Use English if browser storage is unavailable.
  }

  return "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getSavedLanguage);

  useEffect(() => {
    try {
      localStorage.setItem("36cc-language", language);
    } catch {
      // The website can still work without browser storage.
    }

    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (SUPPORTED_LANGUAGES.includes(newLanguage)) {
      setLanguage(newLanguage);
    }
  };

  const t = (translations) => {
    return translations[language] ?? translations.en ?? "";
  };

  const value = {
    language,
    changeLanguage,
    t,
    isEnglish: language === "en",
    isSwahili: language === "sw",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
