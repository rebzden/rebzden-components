import styled from "../../styled";
const flexStyles = (flex, justify, align) => {
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
const StyledRow = styled.div `
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
//# sourceMappingURL=Row.js.map