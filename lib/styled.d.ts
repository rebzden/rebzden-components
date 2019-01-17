/// <reference types="react" />
import * as baseStyled from "styled-components";
import { ITheme } from "./presets/theme";
declare const styledTyped: baseStyled.ThemedBaseStyledInterface<ITheme>, ThemeProvider: import("react").ComponentClass<baseStyled.ThemeProviderProps<ITheme, ITheme>, any>, keyframes: (strings: TemplateStringsArray | baseStyled.CSSKeyframes, ...interpolations: baseStyled.SimpleInterpolation[]) => baseStyled.Keyframes;
export { ThemeProvider, keyframes };
export default styledTyped;
