import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import zh from './zh'
import en from './en'
i18n.use(LanguageDetector).init(
  {
    // we init with resources
    resources: {
      en,
      zh,
    },
    fallbackLng: 'zh',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: false,
      withRef: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err)
    t('key') // -> same as i18next.t
  },
)

export default i18n
