import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface TranslatedTextProps {
  text: string;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'button' | 'label';
  children?: never; // Prevent children
}

export function TranslatedText({ text, className = '', as: Component = 'span' }: TranslatedTextProps) {
  const { t } = useTranslation();
  
  return <Component className={className}>{t(text)}</Component>;
}

// Helper hook for translating message content
export function useTranslatedMessages<T extends { content: string }>(messages: T[]): T[] {
  const { t } = useTranslation();
  
  return React.useMemo(() => {
    return messages.map(msg => ({
      ...msg,
      content: t(msg.content),
    }));
  }, [messages, t]);
}
