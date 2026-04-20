import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

// Language codes mapping for Sarvam AI
const SARVAM_LANGUAGE_CODES: { [key: string]: string } = {
  english: 'en-IN',
  hindi: 'hi-IN',
  tamil: 'ta-IN',
  kannada: 'kn-IN',
  malayalam: 'ml-IN',
  telugu: 'te-IN',
  bengali: 'bn-IN',
  marathi: 'mr-IN',
  gujarati: 'gu-IN',
  punjabi: 'pa-IN',
};

interface LanguageContextType {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  translate: (text: string) => string;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Global cache for translations
const translationCache: { [key: string]: { [lang: string]: string } } = {};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const [processingTrigger, setProcessingTrigger] = useState(0);
  
  // Track pending texts
  const pendingTextsRef = useRef<Set<string>>(new Set());
  const translationInProgressRef = useRef(false);
  const processTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Batch translation function using Sarvam AI
  const translateBatch = async (texts: string[], targetLang: string) => {
    if (targetLang === 'english') {
      // No translation needed for English
      const result: { [key: string]: string } = {};
      texts.forEach(text => {
        result[text] = text;
      });
      return result;
    }

    const langCode = SARVAM_LANGUAGE_CODES[targetLang];
    if (!langCode) {
      console.error('Unsupported language:', targetLang);
      return {};
    }

    const SARVAM_API_KEY = 'sk_0jfykjy6_zOqbvxIF3B9Qxa9NkzpyjAFn';
    const result: { [key: string]: string } = {};

    try {
      // Translate texts in batches of 5 to avoid overwhelming the API
      const batchSize = 5;
      for (let i = 0; i < texts.length; i += batchSize) {
        const batch = texts.slice(i, i + batchSize);
        
        // Check cache first
        const uncachedTexts = batch.filter(text => {
          if (translationCache[text] && translationCache[text][targetLang]) {
            result[text] = translationCache[text][targetLang];
            return false;
          }
          return true;
        });

        if (uncachedTexts.length === 0) continue;

        // Translate uncached texts
        const promises = uncachedTexts.map(async (text) => {
          try {
            const response = await fetch('https://api.sarvam.ai/translate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'api-subscription-key': SARVAM_API_KEY,
              },
              body: JSON.stringify({
                input: text,
                source_language_code: 'en-IN',
                target_language_code: langCode,
                speaker_gender: 'Male',
                mode: 'formal',
                model: 'mayura:v1',
                enable_preprocessing: true,
              }),
            });

            if (!response.ok) {
              console.error('Translation API error:', response.status);
              return { text, translation: text };
            }

            const data = await response.json();
            const translation = data.translated_text || text;

            // Cache the translation
            if (!translationCache[text]) {
              translationCache[text] = {};
            }
            translationCache[text][targetLang] = translation;

            return { text, translation };
          } catch (error) {
            console.error('Translation error for text:', text, error);
            return { text, translation: text };
          }
        });

        const results = await Promise.all(promises);
        results.forEach(({ text, translation }) => {
          result[text] = translation;
        });

        // Small delay between batches to avoid rate limiting
        if (i + batchSize < texts.length) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }

      return result;
    } catch (error) {
      console.error('Batch translation error:', error);
      // Return original texts as fallback
      const fallback: { [key: string]: string } = {};
      texts.forEach(text => {
        fallback[text] = text;
      });
      return fallback;
    }
  };

  // Process pending translations when triggered
  useEffect(() => {
    if (processingTrigger === 0) return;
    if (translationInProgressRef.current) return;
    if (pendingTextsRef.current.size === 0) return;
    if (selectedLanguage === 'english') return;

    const processPending = async () => {
      const textsToTranslate = Array.from(pendingTextsRef.current);
      pendingTextsRef.current.clear();
      translationInProgressRef.current = true;
      setIsTranslating(true);

      const newTranslations = await translateBatch(textsToTranslate, selectedLanguage);
      
      setTranslations(prev => ({
        ...prev,
        ...newTranslations,
      }));
      
      setIsTranslating(false);
      translationInProgressRef.current = false;
    };

    processPending();
  }, [processingTrigger, selectedLanguage]);

  // Reset translations when language changes
  useEffect(() => {
    setTranslations({});
    pendingTextsRef.current.clear();
    translationInProgressRef.current = false;
    setProcessingTrigger(0);
    
    // Clear any pending timeout
    if (processTimeoutRef.current) {
      clearTimeout(processTimeoutRef.current);
      processTimeoutRef.current = null;
    }
    
    // Pre-load translations from cache for the new language
    if (selectedLanguage !== 'english') {
      const cached: { [key: string]: string } = {};
      Object.keys(translationCache).forEach(text => {
        if (translationCache[text][selectedLanguage]) {
          cached[text] = translationCache[text][selectedLanguage];
        }
      });
      if (Object.keys(cached).length > 0) {
        setTranslations(cached);
      }
    }
  }, [selectedLanguage]);

  const translate = (text: string): string => {
    if (!text || text.trim() === '') return text;
    
    // Return immediately if English
    if (selectedLanguage === 'english') {
      return text;
    }

    // Check if translation exists in state
    if (translations[text]) {
      return translations[text];
    }

    // Check cache
    if (translationCache[text] && translationCache[text][selectedLanguage]) {
      return translationCache[text][selectedLanguage];
    }

    // Add to pending queue for translation
    const wasEmpty = pendingTextsRef.current.size === 0;
    pendingTextsRef.current.add(text);

    // Schedule translation processing with debounce
    if (processTimeoutRef.current) {
      clearTimeout(processTimeoutRef.current);
    }
    
    processTimeoutRef.current = setTimeout(() => {
      setProcessingTrigger(prev => prev + 1);
      processTimeoutRef.current = null;
    }, 300);

    // Return original text while waiting for translation
    return text;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        selectedLanguage, 
        setSelectedLanguage, 
        translate,
        isTranslating,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Convenience hook for just getting the translate function
export function useTranslation() {
  const { translate } = useLanguage();
  return { t: translate };
}