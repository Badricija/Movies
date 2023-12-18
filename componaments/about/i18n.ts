import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './eng.json';
import translationLV from './lv.json';

interface TranslationResource {
  [namespace: string]: object;
}

interface Resources {
  [language: string]: TranslationResource;
}

const resources: Resources = {
  en: {
    translation: translationEN,
  },
  lv: {
    translation: translationLV,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
