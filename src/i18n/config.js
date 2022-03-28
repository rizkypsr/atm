import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  fallbackLng: "id",
  lng: "id",
  resources: {
    id: {
      translations: require("./locales/id/translations.json"),
    },
    en: {
      translations: require("./locales/en/translations.json"),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations'
})

i18n.languages = ['id', 'en'];

export default i18n;
