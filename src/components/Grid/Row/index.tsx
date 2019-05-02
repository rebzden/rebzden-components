import styled, { css } from "../../../styled";

interface RowProps extends RowSettings{
  xs?: RowSettings;
  sm?: RowSettings;
  md?: RowSettings;
  lg?: RowSettings;
  xl?: RowSettings;
  xxl?: RowSettings;
  smBreak?: number;
  mdBreak?: number;
  lgBreak?: number;
  xlBreak?: number;
  xxlBreak?: number;
}

interface RowSettings {
  flex?: boolean;
  justify?: JustifyType;
  align?: AlignType;
  wrap?: FlexWrap;
  direction?: FlexDirection;
}

type AlignType = "space-around" | "flex-start" | "center" | "flex-end";
type FlexWrap = "wrap" | "wrap-reverse";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type JustifyType =
  | "space-between"
  | "space-around"
  | "flex-start"
  | "center"
  | "flex-end";

const getRowProps = (setting: RowSettings) => `
  ${setting.flex ? `display: flex;`: 'display: inline-block'}
  ${setting.direction ? `flex-direction: ${setting.direction}` : ""}
  ${setting.wrap ? `flex-wrap: ${setting.wrap}` : ""}
  ${setting.justify ? `justify-content: ${setting.justify}` : ""}
  ${setting.align ? `align-items: ${setting.align}` : ""}
  &:before,
  &:after {
    display: flex;
  }
`;

const createMediaCss = (
  defaultBreak: number,
  resProp: RowSettings,
  resBreak?: number
) => css`
  @media (min-width: ${resBreak ? resBreak : defaultBreak}px) {
    ${getRowProps(resProp)}
  }
`;


const StyledRow = styled.div<RowProps>`
  position: relative;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  zoom: 1;
  box-sizing: border-box;
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
  ${props => (props.xs ? getRowProps(props.xs) : getRowProps(props))}
  ${props => (props.sm ? createMediaCss(576, props.sm, props.smBreak) : "")}
  ${props => (props.md ? createMediaCss(768, props.md, props.lgBreak) : "")}
  ${props => (props.lg ? createMediaCss(992, props.lg, props.lgBreak) : "")}
  ${props => (props.xl ? createMediaCss(1200, props.xl, props.xlBreak) : "")}
  ${props => (props.xxl ? createMediaCss(1600, props.xxl, props.xxlBreak) : "")}
`;
export const Row = StyledRow;



