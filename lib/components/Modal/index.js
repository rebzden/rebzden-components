import React from "react";
import ReactDOM from "react-dom";
import styledTyped from "../../styled";
import { topDown } from '../../styles/animations/movement';
const ModalBackground = styledTyped.div `
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
const ModalContent = styledTyped.div `
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
export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleBackgroundClick = (event) => {
            console.log(event.target == this.background.current);
            if (event.target == this.background.current) {
                this.props.onClose();
            }
        };
        this.root = document.getElementsByTagName("body")[0];
        this.el = document.createElement("div");
        this.background = React.createRef();
    }
    componentDidMount() {
        this.root.appendChild(this.el);
        this.root.addEventListener("click", this.handleBackgroundClick);
    }
    componentWillUnmount() {
        this.root.removeChild(this.el);
        this.root.removeEventListener("click", this.handleBackgroundClick);
    }
    render() {
        console.log(this.props);
        const { onClose, open } = this.props;
        return ReactDOM.createPortal(React.createElement(ModalBackground, { ref: this.background, onClick: onClose, open: open },
            React.createElement(ModalContent, null, this.props.children)), this.el);
    }
}
//# sourceMappingURL=index.js.map