import * as React from 'react';
import styled from 'styled-components'
const StyledButton = styled.button`
  color: ${props => props.theme.main};

`

export const Button = () => {
    return <StyledButton>Hello</StyledButton>
}
export default StyledButton;