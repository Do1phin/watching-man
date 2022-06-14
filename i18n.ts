import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import * as translationsUA from './public/locales/ua/translations.json';
import * as translationsRU from './public/locales/ru/translations.json';

const resources: object = {
  ru: {
    translations: translationsRU,
  },
  ua: {
    translations: translationsUA,
  },
};

const fallBackLanguage = 'ua';

i18next
  .use(ChainedBackend)
  .use(BrowserLanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init(
    {
      cleanCode: true,
      compatibilityJSON: 'v3',
      debug: true,
      defaultNS: 'translations',
      detection: {},
      fallbackLng: fallBackLanguage,
      keySeparator: '.',
      lowerCaseLng: true,
      ns: ['translations'],
      resources: {
        ...resources,
      },
      supportedLngs: ['ua', 'ru'],
      // backend: {
      // backends: [
      //   BrowserLanguageDetector,
      //   HttpBackend,
      //   initReactI18next
      // ],
      // backendOptions: [{
      //   loadPath: "https://raw.githubusercontent.com/i18next/i18next-gitbook/master/locales/{{lng}}/{{ns}}.json",
      //   crossDomain: true
      // }]
      // },
    },
    function (err, t) {
      // init set content
      // updateContent();
      console.log('i18next init');
    },
  );
