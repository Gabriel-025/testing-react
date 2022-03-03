import styled from 'styled-components';
import { OpenSans } from './GlobalStyles';

export const StyledApp = styled.div`
  ${OpenSans}
  height: 100%;
  * {
    font-family: 'Roboto', sans-serif;
    white-space:normal;
  }
  html,
  body,
  #container {
    height: 100%;
    width: 100%;
  }
`;
