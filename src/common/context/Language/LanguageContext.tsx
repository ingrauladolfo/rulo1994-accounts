import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import i18n from '../../../i18n';
import type { LanguageContextValue } from '../../interfaces/context/Language';

const LanguageContext = createContext<LanguageContextValue>({} as any);
export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Recupera idioma guardado o usa i18n.language
  const savedLang = localStorage.getItem('lang') as 'en' | 'es' | null;
  const [lang, setLang] = useState<'en' | 'es'>(savedLang || (i18n.language as 'en' | 'es'));

  const toggleLang = () => {
    const next = lang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
    setLang(next);
  };

  // Guarda el idioma seleccionado en localStorage y sincroniza i18n
  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
