import style from 'styled-components';

export const StyledHowTo = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  margin: 4% auto 2% auto;
  box-shadow: 
    0 0  0 2px rgb(255, 255, 255),
    0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
  
  @media(min-width: 700px) {
    width: 65%;
  }
  
  @media(min-width: 1200px) {
    width: 75%;
  }
`;

export const StyledLink = style.a`
  color: #2fa4ed;
`;
