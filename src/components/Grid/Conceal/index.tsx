import styled from "../../../styled";

interface ConcealItem {
  from?: number;
  to?: number;
}

interface ConcealProps {
  breakpoints: ConcealItem[];
}

const mediaFromTo = (from: number, to: number) => `
  @media (min-width: ${from}px) and (max-width: ${to}px) {
    display:none;
  }
`;
const mediaFrom = (from: number) => `
  @media (min-width: ${from}px) {
    display:none;
  }
`;
const mediaTo = (to: number) => `
  @media (max-width: ${to}px) {
    display:none;
  }
`;

const StyledConceal = styled.div<ConcealProps>`
  ${props =>
    props.breakpoints.map(({ from, to }) => {
      if (from && to) {
        return mediaFromTo(from, to);
      } else if (from) {
        return mediaFrom(from);
      } else if (to) {
        return mediaTo(to);
      }
      return "";
    })}
`;

export const Conceal = StyledConceal;
