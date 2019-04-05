import * as baseStyled from "styled-components";
import { Theme } from "./presets/theme";

const {
  default: styledTyped,
  ThemeProvider,
  keyframes,
  css
} = baseStyled as baseStyled.ThemedStyledComponentsModule<Theme>;

export { ThemeProvider, keyframes, css };
export default styledTyped;
