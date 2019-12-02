import styled, { css } from 'styled-components';

const StyledH2 = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  text-align: center;

  ${(props) => (props.margin ? css`
  margin: ${props.margin}em auto;
  ` : css`
  margin: 1em auto;   
  `)}
`;

export default StyledH2;
