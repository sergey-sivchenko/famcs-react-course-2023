import * as darkTheme from "./dark";
import * as lightTheme from "./light";

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const createTheme = (mode = "dark") => ({
  action: themes[mode].action,
  background: themes[mode].background,
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  divider: themes[mode].divider,
  mode,
  primary: themes[mode].primary,
  secondary: themes[mode].secondary,
  text: themes[mode].text,
});
