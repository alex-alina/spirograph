import style from 'styled-components';

export const StyledHowTo = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  padding: 2%;
  margin: 4% auto;
  box-shadow: 
    0 0  0 2px rgb(255, 255, 255),
    0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
  
  @media(min-width: 700px) {
    width: 75%;
    padding: 2% 2% 2% 4%; 
  }
`;

export const StyledLink = style.a`
  color: #2fa4ed;
`;
