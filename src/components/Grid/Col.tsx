import styled from "../../styled";

interface ColProps {
    span: number;
    offset: number;
}
const StyledCol = styled.div<ColProps>`
  
`;
export const Col = StyledCol;
