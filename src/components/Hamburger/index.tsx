import styled, { css } from "../../styled";
import React from "react";
interface Props {
  open: boolean;
}
const StyledHamburger = styled.div`
  text-align: center;
  height: auto;
  z-index: 100;
`;

const StyledHamburgerBar = styled.div`
  display: block;
  height: 3px;
  width: 30px;
  background: #374346;
  margin: 7px auto;
`;
const TopBar = styled(StyledHamburgerBar)`
  transition: transform 0.7s ease;
`;
const MiddleBar = styled(StyledHamburgerBar)`
  transition: width 0.7s ease;
`;
const BottomBar = styled(StyledHamburgerBar)`
  transition: transform 0.7s ease;
`;
const HamburgerIcon = styled.div<Props>`
  width: auto;
  margin: 0 auto;
  ${TopBar} {
    ${props =>
      props.open
        ? css`
            transform: translateY(10px) rotateZ(45deg);
          `
        : ""}
  }
  ${MiddleBar} {
    ${props => (props.open ? "width: 0;" : "")}
  }
  ${BottomBar} {
    ${props =>
      props.open
        ? css`
            transform: translateY(-10px) rotateZ(-45deg);
          `
        : ""}
  }
`;
export const Hamburger = ({ open, ...rest }: Props): JSX.Element => (
  <StyledHamburger {...rest}>
    <HamburgerIcon open={open}>
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </HamburgerIcon>
  </StyledHamburger>
);
