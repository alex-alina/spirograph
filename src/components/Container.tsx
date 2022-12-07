import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.25em;
`;

export default function Container(children: ReactNode) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}
