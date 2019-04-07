import styled from "../../../styled";
const mediaFromTo = (from, to) => `
  @media (min-width: ${from}px) and (max-width: ${to}px) {
    display:none;
  }
`;
const mediaFrom = (from) => `
  @media (min-width: ${from}px) {
    display:none;
  }
`;
const mediaTo = (to) => `
  @media (max-width: ${to}px) {
    display:none;
  }
`;
const StyledConceal = styled.div `
  ${props => props.breakpoints.map(({ from, to }) => {
    if (from && to) {
        return mediaFromTo(from, to);
    }
    else if (from) {
        return mediaFrom(from);
    }
    else if (to) {
        return mediaTo(to);
    }
    return "";
})}
`;
export const Conceal = StyledConceal;
//# sourceMappingURL=index.js.map