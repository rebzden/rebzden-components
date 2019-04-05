import styled from "../../styled";
import { ColorType } from '../../presets/theme';

export interface IButton {
  type?: ColorType;
}
const StyledButton = styled.button<IButton>`
  padding-bottom: ${props => props.theme.padding.none};
  padding-left: ${props => props.theme.padding.big};
  padding-right: ${props => props.theme.padding.big};
  padding-top: ${props => props.theme.padding.none};
  align-items: flex-start;
  background-color: ${props => props.theme.color.primary.main};
  background-image: none;
  border-radius: 4px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-width: 1px;
  border-color: ${props => props.theme.color.primary.main};
  border-style: solid;
  box-shadow: rgba(0, 0, 0, 0.043) 0px 2px 0px 0px;
  box-sizing: border-box;
  color: ${props => props.theme.color.primary.text};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  height: 40px;
  letter-spacing: normal;
  line-height: 23.984px;
  margin-bottom: 12px;
  margin-left: 0px;
  margin-right: 8px;
  margin-top: 0px;
  outline-color: ${props => props.theme.color.primary.main};
  outline-style: none;
  outline-width: 0px;
  overflow: visible;
  position: relative;
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: rgba(0, 0, 0, 0.12) 0px -1px 0px;
  text-size-adjust: 100%;
  text-transform: none;
  touch-action: manipulation;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  user-select: none;
  white-space: nowrap;
  word-spacing: 0px;
  &:active {
    outline: 0;
    color: #fff;
    top: 1px;
  }
`;
export const Button = StyledButton;
