import styled from "../../styled";

type JustifyType =
  | "space-between"
  | "space-around"
  | "flex-start"
  | "center"
  | "flex-end";
type AlignType = "space-around" | "flex-start" | "center" | "flex-end";
interface RowProps {
  flex?: boolean;
  justify?: JustifyType;
  align?: AlignType;
}
const flexStyles = (
  flex?: boolean,
  justify?: JustifyType,
  align?: AlignType
) => {
  return flex
    ? `
    flex-flow: row wrap;
    ${justify ? "justify-content:" + justify : ""}
    ${align ? "align-items:" + align : ""}
    &:before,
    &:after {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }
    `
    : "";
};
const StyledRow = styled.div<RowProps>`
  position: relative;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  zoom: 1;
  display: ${props => (props.flex ? "flex" : "block")};
  box-sizing: border-box;
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
  ${props => flexStyles(props.flex, props.justify, props.align)}
`;
export const Row = StyledRow;