import styled, { css } from "../../styled";
const colPercent = (col = 0) => col > 0 ? `${(col * 100) / 24}%;` : "0%";
const createMediaCss = (defaultBreak, resProp, resBreak) => css `
  @media (min-width: ${resBreak ? resBreak : defaultBreak}px) {
    ${getColProps(resProp)}
  }
`;
const getColProps = (setting) => `
  ${typeof setting === "number"
    ? `${setting ? `width: ${colPercent(setting)}` : ""}`
    : `
    ${parseColToStyle(setting)}
`}
`;
const parseColToStyle = (setting) => `
  ${setting.hidden ? "display:none;" : ""}
  ${setting.span ? "width:" + colPercent(setting.span) : ""}
  ${setting.order ? "order:" + setting.order : ""}
  ${setting.offset ? "margin-left:" + colPercent(setting.offset) : ""}
  ${setting.push ? "left:" + colPercent(setting.push) : ""}
  ${setting.pull ? "right:" + colPercent(setting.pull) : ""}
`;
const StyledCol = styled.div `
  float: left;
  position: relative;
  display: block;
  position: relative;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
  flex: 1 1 auto;
  ${props => getColProps(props)}
  ${props => getColProps(props)}
  ${props => (props.xs ? getColProps(props.xs) : "")}
  ${props => (props.sm ? createMediaCss(576, props.sm, props.smBreak) : "")}
  ${props => (props.md ? createMediaCss(768, props.md, props.lgBreak) : "")}
  ${props => (props.lg ? createMediaCss(992, props.lg, props.lgBreak) : "")}
  ${props => (props.xl ? createMediaCss(1200, props.xl, props.xlBreak) : "")}
  ${props => (props.xxl ? createMediaCss(1200, props.xxl, props.xxlBreak) : "")}
`;
export const Col = StyledCol;
//# sourceMappingURL=Col.js.map