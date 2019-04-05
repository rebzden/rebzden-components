import styled from "../../styled";
import { leftRight, rightLeft } from '../../styles/animations/movement';
export const DrawerSlider = styled.div `
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  animation-name: ${props => (props.opening ? leftRight : rightLeft)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;
//# sourceMappingURL=drawer-slider.js.map