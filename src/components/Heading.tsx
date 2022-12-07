import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface HeadingProps {
  children: ReactNode;
  center?: string;
  margin?: string;
} 

const StyledHeading = styled.h1<HeadingProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.3em;
  font-weight: 400;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-style: italic;

  ${(props) => (props.margin ? css`
    margin: ${props.margin}em auto;
    ` : css`
    margin: 1em auto;   
  `)}
`;

export default function Heading({ children, margin }: HeadingProps) {
  return <StyledHeading margin={margin}>{children}</StyledHeading>;
}

