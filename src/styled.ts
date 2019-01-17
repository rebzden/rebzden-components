import * as baseStyled from "styled-components";
import { ITheme } from "./presets/theme";

const {
  default: styledTyped,
  ThemeProvider,
  keyframes
} = baseStyled as baseStyled.ThemedStyledComponentsModule<ITheme>;

export { ThemeProvider, keyframes };
export default styledTyped;
