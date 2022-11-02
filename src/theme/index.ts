export enum THEME_MEDIA_ENUM {
  large = "@media screen and (min-width: 1200px)",
  medium = "@media screen and (max-width: 1199px)",
  small = "@media screen and (max-width: 767px)",
}
export const THEME_LOCAL_KEY = "THEME_LOCAL_KEY";
export function colors(darkMode = false) {
  return {
    primary: darkMode ? "#5233F5" : "#5233F5",
    bg1: darkMode ? "#131313" : "#ffffff",
    bg2: darkMode ? "#2E303D" : "#eaecef",
    bg3: darkMode ? "#181A21" : "#ffffff",
    bg4: darkMode ? "#131313" : "#fcfcfc",
    bg5: darkMode ? "#000000" : "#e7f1ee",
    bg6: darkMode ? "#131313" : "#e7f1ee",
    bg7: darkMode ? "#181A21" : "#fcfcfc",
    bg8: darkMode ? "#2D313C" : "#E9EBEE",
    color1: darkMode ? "#ffffff" : "#333",
    color2: darkMode ? "#777E90" : "#848e9c",
    color3: darkMode ? "#ffffff" : "#181A20",
    color4: darkMode ? "#59606E" : "#181A20",
    color5: darkMode ? "#B1B7C0" : "#181A20",
    color6: darkMode ? "#484D5A" : "#B7BBC4",
    select1: darkMode ? "#282B35" : "#F1F3F4",
    icon1: darkMode ? "#5B5F6E" : "#929AA5",
    icon2: darkMode ? "#59606E" : "#969CA9",
  };
}

export function theme(darkMode = false) {
  return {
    ...colors(darkMode),
  };
}
