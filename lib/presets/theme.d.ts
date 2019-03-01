export interface Padding {
    none: string;
    small: string;
    medium: string;
    big: string;
}
export interface Color {
    primary: ColorScheme;
    secondary: ColorScheme;
    danger: ColorScheme;
}
export declare type ColorType = "primary" | "secondary" | "danger";
export interface ColorScheme {
    main: string;
    dark: string;
    light: string;
    text: string;
    background?: string;
}
export interface Theme {
    padding: Padding;
    color: Color;
}
