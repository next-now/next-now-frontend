import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translatable strings for this project.
// TODO: Move them into separate files or use other i18next backend plugins.
// https://www.i18next.com/how-to/add-or-load-translations
const resources = {
  de: {
    translation: {
      Home: 'Startseite',
      Welcome: 'Willkommen',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
