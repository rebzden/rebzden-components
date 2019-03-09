import styled, { css } from "../../styled";
import React from "react";
import { TopBar, MiddleBar, BottomBar } from './bar';
interface Props {
  open: boolean;
}
const Wrapper = styled.div`
  text-align: center;
  height: auto;
  z-index: 100;
`;

const Container = styled.div`
  width: auto;
  margin: 0 auto;
`;

const CloseContainer = styled(Container)`
  ${TopBar} {
    transform: translateY(10px) rotateZ(45deg);
  }
  ${MiddleBar} {
    width: 0;
  }
  ${BottomBar} {
    transform: translateY(-10px) rotateZ(-45deg);
  }
`;

const AnimatedHamburgerContainer = styled(Container)<Props>`
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

const AnimatedArrowContainer = styled(Container)<Props>`
  ${TopBar} {
    ${props =>
      props.open
        ? css`
            transform: translateY(15px) translateX(-8px) rotateZ(45deg);
            width: 15px;
          `
        : ""}
  }
  ${BottomBar} {
    ${props =>
      props.open
        ? css`
            transform: translateY(-15px) translateX(-8px) rotateZ(-45deg);
            width: 15px;
          `
        : ""}
  }
`;

export const HamburgerIcon = ({ ...rest }): JSX.Element => (
  <Wrapper {...rest}>
    <Container>
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </Container>
  </Wrapper>
);

export const CloseIcon = ({ ...rest }): JSX.Element => (
  <Wrapper {...rest}>
    <CloseContainer>
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </CloseContainer>
  </Wrapper>
);

export const Hamburger = ({ open, ...rest }: Props): JSX.Element => (
  <Wrapper {...rest}>
    <AnimatedHamburgerContainer open={open}>
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </AnimatedHamburgerContainer>
  </Wrapper>
);

export const Arrow = ({ open, ...rest }: Props): JSX.Element => (
  <Wrapper {...rest}>
    <AnimatedArrowContainer open={open}>
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </AnimatedArrowContainer>
  </Wrapper>
);
