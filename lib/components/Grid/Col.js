import styled from "../../styled";
const generateColOffset = (offset = 0) => {
    return offset > 0 ? `margin-left:${(offset * 100 / 24)}%` : "";
};
const StyledCol = styled.div `
    ${props => generateColOffset(props.offset)}
`;
export const Col = StyledCol;
//# sourceMappingURL=Col.js.map