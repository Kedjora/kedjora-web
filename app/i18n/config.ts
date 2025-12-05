// ==================== I18N CONFIGURATION ====================

export const locales = ['id', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'id';

// Locale display names for UI
export const localeNames: Record<Locale, string> = {
  id: 'Indonesia',
  en: 'English',
};

// Locale flags/icons for UI (using emoji)
export const localeFlags: Record<Locale, string> = {
  id: '🇮🇩',
  en: '🇬🇧',
};

// HTML lang attribute values
export const localeHtmlLang: Record<Locale, string> = {
  id: 'id',
  en: 'en',
};

// Date locale for formatting
export const localeDateLocale: Record<Locale, string> = {
  id: 'id-ID',
  en: 'en-US',
};

/**
 * Check if a locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Get locale from Accept-Language header
 * Returns 'id' if Indonesian is detected, otherwise 'en'
 */
export function getLocaleFromHeaders(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [locale, q = '1'] = lang.trim().split(';q=');
      return { locale: locale.toLowerCase(), quality: parseFloat(q) };
    })
    .sort((a, b) => b.quality - a.quality);

  // Check if Indonesian is preferred
  for (const { locale } of languages) {
    if (locale.startsWith('id')) {
      return 'id';
    }
    if (locale.startsWith('en')) {
      return 'en';
    }
  }

  // Default to Indonesian for local users, English for others
  return defaultLocale;
}

