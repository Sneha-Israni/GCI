import { useLanguage } from '../contexts/LanguageContext';

export function useTranslation() {
  const { translate, selectedLanguage, isTranslating } = useLanguage();

  // Helper function that can be used inline
  const t = (text: string): string => {
    return translate(text);
  };

  return {
    t,
    selectedLanguage,
    isTranslating,
  };
}
