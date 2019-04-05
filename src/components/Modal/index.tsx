import React from "react";
import ReactDOM from "react-dom";
import { ModalBackground } from "./modal-background";
import { ModalContent } from "./modal-content";

interface Props {
  onClose: () => void;
  open: boolean;
}
interface State {
  prevOpen: boolean;
  opening?: boolean;
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
      prevOpen: this.props.open
    };
  }
  componentDidMount() {
    this.root.appendChild(this.el);
    this.root.addEventListener("click", this.handleBackgroundClick);
  }
  handleBackgroundClick = (event: MouseEvent) => {
    if (event.target === this.background.current) {
      this.setState({
        opening: false
      });
      event.stopPropagation();
    }
  };
  animationEnd = (e: React.AnimationEvent) => {
    if (!this.state.opening) {
      this.props.onClose();
    }
  };
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    let opening = prevState.opening;
    if (!nextProps.open && prevState.prevOpen) {
      opening = false;
    } else if (nextProps.open && !prevState.prevOpen) {
      opening = true;
    }
    return {
      opening,
      prevOpen: nextProps.open
    };
  }
  componentWillUnmount() {
    this.root.removeChild(this.el);
    this.root.removeEventListener("click", this.handleBackgroundClick);
  }

  render() {
    const { open } = this.props;
    const { opening } = this.state;
    return ReactDOM.createPortal(
      open && (
        <ModalBackground
          ref={this.background}
          open={open}
          onAnimationEnd={this.animationEnd}
          opening={opening}
        >
          <ModalContent opening={opening}>{this.props.children}</ModalContent>
        </ModalBackground>
      ),
      this.el
    );
  }
}
