import styled from "../../styled";

interface ColProps {
  span: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

const colPercent = (
  offset: number = 0
) => {
  return offset > 0 ? `${(offset * 100) / 24}%;` : "";
};

const StyledCol = styled.div<ColProps>`
  float: left;
  position: relative;
  display: block;
  flex: 0 0 auto;
  ${props => (props.order ? "order:" + props.order : "")}
  ${props => (props.offset? "margin-left:"+ colPercent(props.offset):"")}
  ${props => (props.offset? "left:"+ colPercent(props.push):"")}
  ${props => (props.offset? "right:"+ colPercent(props.pull):"")}
`;
export const Col = StyledCol;
