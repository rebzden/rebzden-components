import React from "react";
import ReactDOM from "react-dom";
import { DrawerSlider } from "./drawer-slider";

interface Props {
  onClose: () => void;
  open: boolean;
}
interface State {
  prevOpen: boolean;
  opening?: boolean;
}
export class Drawer extends React.Component<Props, State> {
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
    if(this.props.open){
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
    const { open, children } = this.props;
    const { opening } = this.state;
    return ReactDOM.createPortal(
      open && (
        <DrawerSlider
          ref={this.background}
          open={open}
          onAnimationEnd={this.animationEnd}
          opening={opening}
        >
          {children}
        </DrawerSlider>
      ),
      this.el
    );
  }
}
