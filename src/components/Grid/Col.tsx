import styled from "../../styled";

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

const StyledCol = styled.div<ColProps>`
  float: left;
  position: relative;
  display: block;
  position: relative;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
  flex: 1 1 auto;
  ${props => (props.hidden ? "display:none;" : "")}
  ${props => (props.span ? "width:" + colPercent(props.span) : "")}
  ${props => (props.order ? "order:" + props.order : "")}
  ${props => (props.offset ? "margin-left:" + colPercent(props.offset) : "")}
  ${props => (props.push ? "left:" + colPercent(props.push) : "")}
  ${props => (props.pull ? "right:" + colPercent(props.pull) : "")}
  ${props => (props.xs ? createMediaCss(368, props.xs, props.xsBreak) : "")}
  ${props => (props.sm ? createMediaCss(576, props.sm, props.smBreak) : "")}
  ${props => (props.md ? createMediaCss(768, props.md, props.lgBreak) : "")}
  ${props => (props.lg ? createMediaCss(992, props.lg, props.lgBreak) : "")}
  ${props => (props.xl ? createMediaCss(1200, props.xl, props.xlBreak) : "")}
  ${props => (props.xxl ? createMediaCss(1200, props.xxl, props.xxlBreak) : "")}
`;

const colPercent = (col: number = 0) => col > 0 ? `${(col * 100) / 24}%;` : "0%";

const createMediaCss = (
  defaultBreak: number,
  resProp: number | ColSetting,
  resBreak?: number
) => `
  @media (max-width: ${resBreak ? resBreak : defaultBreak}px) {
    ${
      typeof resProp === "number"
      ? `${resProp ? `width: ${colPercent(resProp)}` : ""}`
      : `
        ${resProp.hidden ? "display:none;" : ""}
        ${resProp.span ? `width: ${colPercent(resProp.span)}` : ""}
        ${resProp.order ? `order: ${resProp.order}` : ""}
        ${resProp.offset ? `margin-left:${colPercent(resProp.offset)}` : ""}
      `
    }
  }
`;

export const Col = StyledCol;