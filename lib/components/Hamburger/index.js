import * as tslib_1 from "tslib";
import styled, { css } from "../../styled";
import React from "react";
import { TopBar, MiddleBar, BottomBar } from './bar';
const Wrapper = styled.div `
  text-align: center;
  height: auto;
  z-index: 100;
`;
const Container = styled.div `
  width: auto;
  margin: 0 auto;
`;
const CloseContainer = styled(Container) `
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
const AnimatedHamburgerContainer = styled(Container) `
  ${TopBar} {
    ${props => props.open
    ? css `
            transform: translateY(10px) rotateZ(45deg);
          `
    : ""}
  }
  ${MiddleBar} {
    ${props => (props.open ? "width: 0;" : "")}
  }
  ${BottomBar} {
    ${props => props.open
    ? css `
            transform: translateY(-10px) rotateZ(-45deg);
          `
    : ""}
  }
`;
const AnimatedArrowContainer = styled(Container) `
  ${TopBar} {
    ${props => props.open
    ? css `
            transform: translateY(15px) translateX(-8px) rotateZ(45deg);
            width: 15px;
          `
    : ""}
  }
  ${BottomBar} {
    ${props => props.open
    ? css `
            transform: translateY(-15px) translateX(-8px) rotateZ(-45deg);
            width: 15px;
          `
    : ""}
  }
`;
export const HamburgerIcon = (_a) => {
    var rest = tslib_1.__rest(_a, []);
    return (React.createElement(Wrapper, Object.assign({}, rest),
        React.createElement(Container, null,
            React.createElement(TopBar, null),
            React.createElement(MiddleBar, null),
            React.createElement(BottomBar, null))));
};
export const CloseIcon = (_a) => {
    var rest = tslib_1.__rest(_a, []);
    return (React.createElement(Wrapper, Object.assign({}, rest),
        React.createElement(CloseContainer, null,
            React.createElement(TopBar, null),
            React.createElement(MiddleBar, null),
            React.createElement(BottomBar, null))));
};
export const Hamburger = (_a) => {
    var { open } = _a, rest = tslib_1.__rest(_a, ["open"]);
    return (React.createElement(Wrapper, Object.assign({}, rest),
        React.createElement(AnimatedHamburgerContainer, { open: open },
            React.createElement(TopBar, null),
            React.createElement(MiddleBar, null),
            React.createElement(BottomBar, null))));
};
export const Arrow = (_a) => {
    var { open } = _a, rest = tslib_1.__rest(_a, ["open"]);
    return (React.createElement(Wrapper, Object.assign({}, rest),
        React.createElement(AnimatedArrowContainer, { open: open },
            React.createElement(TopBar, null),
            React.createElement(MiddleBar, null),
            React.createElement(BottomBar, null))));
};
//# sourceMappingURL=index.js.map