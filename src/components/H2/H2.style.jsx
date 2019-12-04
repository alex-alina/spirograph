import styled, { css } from 'styled-components';

const StyledH2 = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-align: center;
  width: 90%

  ${(props) => (props.margin ? css`
  margin: ${props.margin}em auto;
  ` : css`
  margin: 1em auto;   
  `)}

  @media(min-width: 700px) {
    font-size: 1.3em;
    width: 100%;
  }
`;

export default StyledH2;
