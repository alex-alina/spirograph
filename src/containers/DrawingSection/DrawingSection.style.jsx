import style from 'styled-components';
import Container from '../../components/Container/Container';

export const WrapperContainer = style(Container)`
box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
margin-top: 130px;
overflow-x: hidden;

@media(min-width: 1254px) {
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
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CanvasContainer = style(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

export const StyledCanvas = style.canvas`
  border: 1px solid transparent;
  box-shadow: 
    0 0  0 2px rgb(255, 255, 255),
    0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 95vw;
  height: 95vw;

  @media(min-width: 1000px) {
    width: 65vh;
    height: 65vh;
  }
  @media(min-width: 1254px) {
    width: 75vh;
    height: 75vh;
  }
`;
