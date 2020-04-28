import theme from "./src/styles/theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  type DefaultTheme = ThemeInterface;
}
