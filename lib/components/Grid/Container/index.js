import styled from "../../../styled";
const StyledContainer = styled.div `
  margin-left: ${({ size, unit }) => typeof size === "number" ? size + (unit || "px") : size};
  margin-right: ${({ size, unit }) => typeof size === "number" ? size + (unit || "px") : size};
`;
export const Container = StyledContainer;
//# sourceMappingURL=index.js.map