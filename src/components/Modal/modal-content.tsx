import { topDown, bottomUp } from "../../styles/animations/movement";
import styled from "../../styled";
import { ModalState } from ".";

interface Props {
  change: ModalState;
}
export const ModalContent = styled.div<Props>`
  position: relative;
  width: 80%;
  animation-name: ${props => (props.change == "opening" ? topDown : bottomUp)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  padding: 20px;
`;
