// #myCanvas {
//   border: 1px solid green;
// }

import style from 'styled-components';
import Container from '../../components/Container/Container';

export const ButtonsContainer = style(Container)`
  width: 700px;
  padding: 0;
`;

export const CanvasContainer = style(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 2% auto;
`;

export const StyledCanvas = style.canvas`
border: 1px solid green;
margin: 2% 0 2% 0;
width: 700px;
height: 700px;
min-width: 300px;
min-height: 300px
`;
