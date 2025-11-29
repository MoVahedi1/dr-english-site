'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/lib/i18n/context';

const languages = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    direction: 'ltr',
  },
  {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    flag: '🇮🇷',
    direction: 'rtl',
  },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: 'en' | 'fa') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {currentLanguage?.flag} {currentLanguage?.nativeName}
        </span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 z-50"
          >
            <Card className="w-64 border shadow-lg">
              <CardContent className="p-2">
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code as 'en' | 'fa')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary/80 transition-colors text-left ${
                        language === lang.code ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{lang.flag}</span>
                        <div>
                          <div className="font-medium">{lang.nativeName}</div>
                          <div className="text-sm text-muted-foreground">{lang.name}</div>
                        </div>
                      </div>
                      {language === lang.code && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </div>
  );
}