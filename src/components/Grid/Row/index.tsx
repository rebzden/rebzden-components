import styled, { css } from "../../../styled";

interface RowProps {
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

const flexStyles = css<RowProps>`
  display: flex;
  ${props => (props.direction ? `flex-direction: ${props.direction}` : "")};
  ${props => (props.wrap ? `flex-wrap: ${props.wrap}` : "")}
  ${props => (props.justify ? `justify-content: ${props.justify}` : "")}
  ${props => (props.align ? `align-items: ${props.align}` : "")}
  &:before,
  &:after {
    display: flex;
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
  //Conditionally append flex styles
  ${props => (props.flex ? flexStyles: "display: block")} 
`;
export const Row = StyledRow;



