import style from 'styled-components';
import Container from '../../components/Container/Container';

export const WrapperContainer = style(Container)`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-top: 100px;
  overflow-x: hidden;
  
  @media(min-width: 1254px) {
    flex-direction: row;
    justify-content: space-bewteen;
  }
`;

export const ButtonsContainer = style(Container)`
  display: flex;
  justify-content: flex-start; 
  padding: 0;
  margin-bottom: 1em; 
  
  @media(min-width: 700px) {
    justify-content: space-around;
  }
`;

export const StyledHowTo = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5%
  margin: 1% auto 2% auto;
  border: 0.5px solid #2fa4ed;
  box-shadow: 
    0 0  0 2px rgb(255, 255, 255),
    0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
`;

export const MainCommandsContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin-top: 2%;

  @media(min-width: 1254px) {
      width: 40%;
  }
`;

export const CommandsContainer = style(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media(min-width: 1254px) {
    width: 60%;
  }
`;

export const ColorCommandsContainer = style(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 100%;

  @media(min-width: 1254px) {
    width: 40%;
 }
`;

export const CanvasContainer = style(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  overflow-x: hidden;
  margin: 0 auto;

  @media(min-width: 1254px) {
    margin: 0;
 }
`;

export const StyledCanvas = style.canvas`
  border: 1px solid transparent;
  background-color: ${(props) => props.backgroundColor};

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

export const SwitchContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ColorPickerContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 0 1% 0;
`;

export const StyledContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media(min-width: 1254px) {
    flex-direction: row;
    justify-content: space-bewteen;
  }
`;
