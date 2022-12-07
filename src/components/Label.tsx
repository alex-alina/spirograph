import styled from 'styled-components';
import { ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-bottom: 1em;
  div {
    padding: 1em 0;
  }
  .slider {
    width: 65%;
  }

  @media(min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-content: space-between;
    width: 80%;
    margin: 10px auto;
    
    div {
      margin-right: 10px;
      padding: 0;
      flex: 2;
    }
    .slider {
      flex: 3;
    }
  }
`;

export default function Label({ htmlFor, children }: LabelProps) {

  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
}
