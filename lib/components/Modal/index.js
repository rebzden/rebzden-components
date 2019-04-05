import React from "react";
import ReactDOM from "react-dom";
import { ModalBackground } from "./modal-background";
import { ModalContent } from "./modal-content";
export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleBackgroundClick = (event) => {
            if (event.target === this.background.current) {
                this.setState({
                    opening: false
                });
                event.stopPropagation();
            }
        };
        this.animationEnd = (e) => {
            if (!this.state.opening) {
                this.props.onClose();
            }
        };
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
    static getDerivedStateFromProps(nextProps, prevState) {
        let opening = prevState.opening;
        if (!nextProps.open && prevState.prevOpen) {
            opening = false;
        }
        else if (nextProps.open && !prevState.prevOpen) {
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
        return ReactDOM.createPortal(open && (React.createElement(ModalBackground, { ref: this.background, open: open, onAnimationEnd: this.animationEnd, opening: opening },
            React.createElement(ModalContent, { opening: opening }, this.props.children))), this.el);
    }
}
//# sourceMappingURL=index.js.map