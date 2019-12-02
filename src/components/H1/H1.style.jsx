import styled, { css } from 'styled-components';

const StyledH1 = styled.div`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.3em;
  font-weight: 400;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-style: italic;
  // margin-top: 1.3em;

  ${(props) => (props.margin ? css`
  margin: ${props.margin}em auto;
  ` : css`
  margin: 1em auto;   
  `)}
`;

export default StyledH1;
