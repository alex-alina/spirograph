import style from 'styled-components';
import Container from '../../components/Container/Container';

export const WrapperContainer = style(Container)`
display: flex;
flex-direction: column;
justify-content: center;
// align-content: center;
width: 100%;
margin-top: 130px;

@media(min-width: 1100px) {
  flex-direction: row;
  justify-content: space-bewteen;
}
`;

export const ButtonsContainer = style(Container)`
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
  
`;

export const CommandsContainer = style(Container)`
  width: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CanvasContainer = style(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const StyledCanvas = style.canvas`
  border: 1px solid green;
  margin: 0 auto;
  width: 95vw;
  height: 95vw;

  @media(min-width: 1100px) {
    width: 70vh;
    height: 70vh;
  }
`;
