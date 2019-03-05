import React from "react";
import ReactDOM from "react-dom";
import { ModalBackground } from "./modal-background";
import { ModalContent } from "./modal-content";

export type ModalState = "opening" | "closing" | null;
interface Props {
  onClose: () => void;
  open: boolean;
}
interface State {
  prevOpen: boolean;
  change: ModalState;
}
export class Modal extends React.Component<Props, State> {
  el: HTMLDivElement;
  root: HTMLBodyElement;
  background: React.RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.root = document.getElementsByTagName("body")[0];
    this.el = document.createElement("div");
    this.background = React.createRef();
    this.state = {
      prevOpen: this.props.open,
      change: null
    };
  }
  componentDidMount() {
    this.root.appendChild(this.el);
    this.root.addEventListener("click", this.handleBackgroundClick);
  }
  handleBackgroundClick = (event: MouseEvent) => {
    if (event.target === this.background.current) {
      this.setState({
        change: "closing"
      });
      event.stopPropagation();
    }
  };
  animationEnd = (e: React.AnimationEvent) => {
    if (this.state.change == "closing") {
      this.props.onClose();
    }
  };
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    let change = prevState.change;
    if (!nextProps.open && prevState.prevOpen) {
      change = "closing";
    } else if (nextProps.open && !prevState.prevOpen) {
      change = "opening";
    }
    return {
      change,
      prevOpen: nextProps.open
    };
  }
  componentWillUnmount() {
    this.root.removeChild(this.el);
    this.root.removeEventListener("click", this.handleBackgroundClick);
  }

  render() {
    const { open } = this.props;
    const { change } = this.state;
    return ReactDOM.createPortal(
      open && (
        <ModalBackground
          ref={this.background}
          open={open}
          onAnimationEnd={this.animationEnd}
          change={change}
        >
          <ModalContent change={change}>{this.props.children}</ModalContent>
        </ModalBackground>
      ),
      this.el
    );
  }
}
