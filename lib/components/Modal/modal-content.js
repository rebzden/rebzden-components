import { topDown, bottomUp } from "../../styles/animations/movement";
import styled from "../../styled";
export const ModalContent = styled.div `
  position: relative;
  width: 80%;
  animation-name: ${props => (props.change == "opening" ? topDown : bottomUp)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  padding: 20px;
`;
//# sourceMappingURL=modal-content.js.map