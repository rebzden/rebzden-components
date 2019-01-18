import React from "react";
import ReactDOM from "react-dom";
import styledTyped from "../../styled";
import { topDown } from '../../styles/animations/movement';

interface ModalProps {
  open: boolean;
}
const ModalBackground = styledTyped.div<ModalProps>`
    ${props => !props.open && "display:none"}
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;
const ModalContent = styledTyped.div`
    position: relative;
    background-color: #fefefe;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: ${topDown};
    animation-duration: 0.2s;
    margin: 15% auto;
    padding: 20px;
`;
interface Props {
  onClose: () => void;
  open: boolean;
}
export class Modal extends React.Component<Props> {
  el: HTMLDivElement;
  root: HTMLBodyElement;
  background: React.RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.root = document.getElementsByTagName("body")[0];
    this.el = document.createElement("div");
    this.background = React.createRef();
  }
  componentDidMount() {
    this.root.appendChild(this.el);
    this.root.addEventListener("click", this.handleBackgroundClick);
  }
  handleBackgroundClick = (event: MouseEvent) => {
    if (event.target === this.background.current) {
      this.props.onClose();
      event.stopPropagation();
    }
  };
  componentWillUnmount() {
    this.root.removeChild(this.el);
    this.root.removeEventListener("click", this.handleBackgroundClick);
  }
  render() {
    const { open } = this.props;
    return ReactDOM.createPortal(
      <ModalBackground ref={this.background} open={open}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackground>,
      this.el
    );
  }
}
