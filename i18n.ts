import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import * as translationsUA from './public/locales/ua/translations.json';
import * as translationsRU from './public/locales/ru/translations.json';

const resources: object = {
  ua: {
    translations: translationsUA,
  },
  ru: {
    translations: translationsRU,
  },
};

const fallBackLanguage: string = 'ua';

i18next
  .use(ChainedBackend)
  .use(BrowserLanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init(
    {
      compatibilityJSON: 'v3',
      fallbackLng: fallBackLanguage,
      supportedLngs: ['ua', 'ru'],
      lowerCaseLng: true,
      cleanCode: true,
      debug: true,
      detection: {},
      ns: ['translations'],
      defaultNS: 'translations',
      keySeparator: '.',
      resources: {
        ...resources,
      },
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
