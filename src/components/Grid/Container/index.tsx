import styled, { css } from "../../../styled";

interface ContainerProps {
  size: number | "auto" | "initial" | "inherit";
  unit?: "px" | "%" | "vh" | "pt" | "cm";
}

const StyledContainer = styled.div<ContainerProps>`
  margin-left: ${({size,unit}) =>
    typeof size === "number" ? size + (unit || "px") : size};
  margin-right: ${({size,unit}) =>
    typeof size === "number" ? size + (unit || "px") : size};
`;

export const Container = StyledContainer;
