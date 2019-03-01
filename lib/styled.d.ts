/// <reference types="react" />
import * as baseStyled from "styled-components";
import { Theme } from "./presets/theme";
declare const styledTyped: baseStyled.ThemedBaseStyledInterface<Theme>, ThemeProvider: import("react").ComponentClass<baseStyled.ThemeProviderProps<Theme, Theme>, any>, keyframes: (strings: TemplateStringsArray | baseStyled.CSSKeyframes, ...interpolations: baseStyled.SimpleInterpolation[]) => baseStyled.Keyframes, css: baseStyled.BaseThemedCssFunction<Theme>;
export { ThemeProvider, keyframes, css };
export default styledTyped;
