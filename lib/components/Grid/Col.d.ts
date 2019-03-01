interface ColSetting {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
    hidden?: boolean;
}
interface ColProps extends ColSetting {
    xs?: number | ColSetting;
    sm?: number | ColSetting;
    md?: number | ColSetting;
    lg?: number | ColSetting;
    xl?: number | ColSetting;
    xxl?: number | ColSetting;
    xsBreak?: number;
    smBreak?: number;
    mdBreak?: number;
    lgBreak?: number;
    xlBreak?: number;
    xxlBreak?: number;
}
export declare const Col: import("styled-components").StyledComponent<"div", import("../../presets/theme").Theme, ColProps, never>;
export {};
