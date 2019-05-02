import styled, { css } from "../../../styled";
const getRowProps = (setting) => `
  ${setting.flex ? `display: flex;` : 'display: inline-block'}
  ${setting.direction ? `flex-direction: ${setting.direction}` : ""}
  ${setting.wrap ? `flex-wrap: ${setting.wrap}` : ""}
  ${setting.justify ? `justify-content: ${setting.justify}` : ""}
  ${setting.align ? `align-items: ${setting.align}` : ""}
  &:before,
  &:after {
    display: flex;
  }
`;
const createMediaCss = (defaultBreak, resProp, resBreak) => css `
  @media (min-width: ${resBreak ? resBreak : defaultBreak}px) {
    ${getRowProps(resProp)}
  }
`;
const StyledRow = styled.div `
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
//# sourceMappingURL=index.js.map