import styled from "../../styled";
import React from "react";

const OptionsContainer = styled.ul`
  margin-top: 15px;
  padding: 0;
  list-style: none;
`;

const OptionsItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 10px 40px 10px 0;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  position: relative;
`;
const OptionTitle = styled.div`
  font-size: 1em;
  color: #333;
`;
const OptionDescription = styled.div`
  font-size: 1em;
  color: #333;
`;

export type ModalState = "opening" | "closing" | null;
interface Props {
  onClose: () => void;
  open: boolean;
}
interface State {
  prevOpen: boolean;
  change: ModalState;
}
export class MultiSelect extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OptionsContainer>
          <select>
              <option value="1">hehehe</option>
              <option value="2">hehehe2</option>
              <option value="3">hehehe23</option>
          </select>
        <OptionsItem>
          <div>
            <OptionTitle>
              <span>Hello</span>
              <span className="version">Heello</span>
            </OptionTitle>
            <OptionDescription>
              <span>hasdhasdhasda</span>
            </OptionDescription>
          </div>
        </OptionsItem>
      </OptionsContainer>
    );
  }
}
