import styled from "../../styled";
import React from "react";
const DropdownButton = styled.div `
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`;
const DropdownContent = styled.div `
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DropdownElement = styled.a `
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  :hover {
    background-color: #ddd;
  }
`;
const Dropdown = styled.div `
  position: relative;
  display: inline-block;
  :hover {
    ${DropdownContent} {
      display: block;
    }
    ${DropdownButton} {
      background-color: #3e8e41;
    }
  }
`;
export const SimpleSelect = () => {
    return (React.createElement(Dropdown, null,
        React.createElement(DropdownButton, null, "Dropdown"),
        React.createElement(DropdownContent, null,
            React.createElement(DropdownElement, { href: "#" }, "Link 1"),
            React.createElement(DropdownElement, { href: "#" }, "Link 2dasdadadasd asd asda das das dada"),
            React.createElement(DropdownElement, { href: "#" }, "Link 3"))));
};
//# sourceMappingURL=simple-select.js.map