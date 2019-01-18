declare type JustifyType = "space-between" | "space-around" | "flex-start" | "center" | "flex-end";
declare type AlignType = "space-around" | "flex-start" | "center" | "flex-end";
interface RowProps {
    flex?: boolean;
    justify?: JustifyType;
    align?: AlignType;
}
export declare const Row: import("styled-components").StyledComponent<"div", import("../../presets/theme").ITheme, RowProps, never>;
export {};
