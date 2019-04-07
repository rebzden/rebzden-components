interface RowProps {
    flex?: boolean;
    justify?: JustifyType;
    align?: AlignType;
    wrap?: FlexWrap;
    direction?: FlexDirection;
}
declare type AlignType = "space-around" | "flex-start" | "center" | "flex-end";
declare type FlexWrap = "wrap" | "wrap-reverse";
declare type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
declare type JustifyType = "space-between" | "space-around" | "flex-start" | "center" | "flex-end";
export declare const Row: import("styled-components").StyledComponent<"div", import("../../../presets/theme").Theme, RowProps, never>;
export {};
