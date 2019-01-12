import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { ITheme } from 'themes/theme';

const styled = baseStyled as ThemedStyledInterface<ITheme>;

export default styled;