import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en/translation';
import frTranslations from '../locales/fr/translation';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr-ca',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },

    react: {
      useSuspense: true,
    },

    // Définissez la langue par défaut
    lng: 'fr-ca',

    interpolation: {
      escapeValue: false // évite l'échappement automatique des valeurs traduites
    }
  });

i18n.addResourceBundle('en', 'translation', enTranslations);
i18n.addResourceBundle('fr', 'translation', frTranslations);

export default i18n;
