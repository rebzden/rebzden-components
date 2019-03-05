import styled from "../../styled";
import { fadeOut, fadeIn } from "styles/animations/appear";
export const ModalBackground = styled.div `
  opacity: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  animation-name: ${props => (props.change == "opening" ? fadeIn : fadeOut)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;
//# sourceMappingURL=modal-background.js.map