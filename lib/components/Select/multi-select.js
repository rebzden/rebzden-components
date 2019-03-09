import styled from "../../styled";
import React from "react";
const OptionsContainer = styled.ul `
  margin-top: 15px;
  padding: 0;
  list-style: none;
`;
const OptionsItem = styled.li `
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 10px 40px 10px 0;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  position: relative;
`;
const OptionTitle = styled.div `
  font-size: 1em;
  color: #333;
`;
const OptionDescription = styled.div `
  font-size: 1em;
  color: #333;
`;
export class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(OptionsContainer, null,
            React.createElement("select", null,
                React.createElement("option", { value: "1" }, "hehehe"),
                React.createElement("option", { value: "2" }, "hehehe2"),
                React.createElement("option", { value: "3" }, "hehehe23")),
            React.createElement(OptionsItem, null,
                React.createElement("div", null,
                    React.createElement(OptionTitle, null,
                        React.createElement("span", null, "Hello"),
                        React.createElement("span", { className: "version" }, "Heello")),
                    React.createElement(OptionDescription, null,
                        React.createElement("span", null, "hasdhasdhasda"))))));
    }
}
//# sourceMappingURL=multi-select.js.map