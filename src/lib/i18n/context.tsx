'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '@/lib/i18n/en.json';
import faTranslations from '@/lib/i18n/fa.json';

type Language = 'en' | 'fa';
type Translations = typeof enTranslations;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  en: enTranslations,
  fa: faTranslations,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found in current language
        value = translations['en'];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found anywhere
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const isRTL = language === 'fa';

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update document title based on language
    const titles: Record<Language, string> = {
      en: 'Dr. Dermatology & Aesthetic Centre',
      fa: 'مرکز درماتولوژی و زیبایی دکتر'
    };
    document.title = titles[language];
  }, [language, isRTL]);

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'fa'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const value: I18nContextType = {
    language,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Utility function for formatting numbers with locale
export function formatNumber(number: number, language: Language): string {
  return new Intl.NumberFormat(language === 'fa' ? 'fa-IR' : 'en-US').format(number);
}

// Utility function for formatting dates with locale
export function formatDate(date: Date, language: Language): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Intl.DateTimeFormat(
    language === 'fa' ? 'fa-IR' : 'en-US', 
    options
  ).format(date);
}

// Utility function for formatting currency with locale
export function formatCurrency(amount: number, language: Language): string {
  return new Intl.NumberFormat(
    language === 'fa' ? 'fa-IR' : 'en-US',
    {
      style: 'currency',
      currency: 'USD',
    }
  ).format(amount);
}