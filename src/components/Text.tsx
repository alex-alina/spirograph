import styled, { css } from 'styled-components';
interface TextProps {
  children: string;
  center?: string;
  margin: string;
}

const StyledText = styled.div<TextProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8em;
  color: #000;
  text-align: ${(props) => (props.center) && 'center'};

${(props) => (props.margin ? css`
  margin: ${props.margin}em
  ` : css`
  margin: 0;   
`)}

@media(min-width: 700px) {
  font-size: 1em;
}
`;

export default function Text({center, children, margin}: TextProps) {

  return (
    <StyledText
      center={center}
      margin={margin}
    >
      {children}
    </StyledText>
  );
}
