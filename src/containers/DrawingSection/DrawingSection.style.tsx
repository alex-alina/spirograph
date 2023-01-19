import style from 'styled-components';

interface CanvasStyle {
  backgroundColor?: string;
  resize?: boolean;
}

export const WrapperContainer = style.div`
  display: flex;
  padding: 0.25em;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-top: 110px;
  overflow-x: hidden;
  
  @media(min-width: 1254px) {
    flex-direction: row;
    justify-content: space-bewteen;
  }
`;

export const ButtonsContainer = style.div`
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
  margin-top: 1%;

  @media(min-width: 1254px) {
    width: 40%;
  }
`;

export const CommandsContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0.25em;

  @media(min-width: 1254px) {
    width: 60%;
  }
`;

export const ColorCommandsContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  padding: 0.25em;

  @media(min-width: 1254px) {
    width: 40%;
  }
`;

export const CanvasContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0.25em;

  @media(min-width: 1254px) {
    margin: 0;
  }
`;

export const StyledCanvas = style.canvas<CanvasStyle>`
  width: 95vw;
  height: 95vw;
  margin: 0 auto;
  border: 1px solid transparent;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 
    0 0  0 2px rgb(255, 255, 255),
    0.1em 0.1em 1em rgba(0, 0, 0, 0.1);

  @media(min-width: 1000px) {
    width: 65vh;
    height: 65vh;
  }
  
  @media(min-width: 1254px) {
    width: 78vh;
    height: 78vh;
  }
`;

export const SwitchContainer = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const StyledText = style.div`
  margin: 0.5em auto 1em;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8em;
  font-style: italic;
  color: #2fa4ed;
  
  @media(min-width: 700px) {
    font-size: 1.1em;
  }
`;
