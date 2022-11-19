import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface H2Props {
  children: ReactNode;
  center?: string;
  margin?: string;
}

const StyledH2 = styled.div<H2Props>`
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

export default function H2({children, center, margin}: H2Props) {

  return (
    <StyledH2
      center={center}
      margin={margin}
    >
      {children}
    </StyledH2>
  );
}
