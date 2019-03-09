import styled from "../../styled";

const StyledHamburgerBar = styled.div`
  display: block;
  height: 3px;
  width: 30px;
  background: #374346;
  margin: 7px auto;
`;
export const TopBar = styled(StyledHamburgerBar)`
  transition: all 0.7s ease;
`;
export const MiddleBar = styled(StyledHamburgerBar)`
  transition: all 0.7s ease;
`;
export const BottomBar = styled(StyledHamburgerBar)`
  transition: all 0.7s ease;
`;