import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('ml-lang') || 'fr'; } catch { return 'fr'; }
  });

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'fr' ? 'en' : 'fr';
      try { localStorage.setItem('ml-lang', next); } catch {}
      return next;
    });
  }, []);

  const t = useCallback((fr, en) => lang === 'fr' ? fr : en, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}