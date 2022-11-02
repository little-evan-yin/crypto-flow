import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { LANGUAGE_ENUM } from "store/app";
import en_US from "./en_US.json";
import zh_CN from "./zh_CN.json";
import zh_HK from "./zh_HK.json";
export const LANG_LOCAL_KEY = 'LANG_LOCAL_KEY'
export const languageConfig = {
  en_US: {
    translation: en_US,
    name: "en_US",
    title: "EN",
  },
  zh_CN: {
    translation: zh_CN,
    name: "zh_CN",
    title: "中文",
  },
  zh_HK: {
    translation: zh_HK,
    name: "zh_HK",
    title: "繁体",
  },
};

i18n.use(initReactI18next).init({
  resources: languageConfig,
  lng: localStorage.getItem(LANG_LOCAL_KEY) || "en_US",
  interpolation: {
    escapeValue: false,
    prefix: "{",
    suffix: "}",
  },
});

export default i18n;
