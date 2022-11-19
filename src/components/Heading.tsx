import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.3em;
  font-weight: 400;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-style: italic;
`;



export default function Heading({ children }: any) {
  return <StyledHeading>{children}</StyledHeading>;
}

