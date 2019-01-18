interface ColProps {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
    hidden?: boolean;
    xs?: number | ColProps;
    sm?: number | ColProps;
    md?: number | ColProps;
    lg?: number | ColProps;
    xl?: number | ColProps;
    xxl?: number | ColProps;
    xsBreak?: number;
    smBreak?: number;
    mdBreak?: number;
    lgBreak?: number;
    xlBreak?: number;
    xxlBreak?: number;
}
export declare const Col: import("styled-components").StyledComponent<"div", import("../../presets/theme").ITheme, ColProps, never>;
export {};
