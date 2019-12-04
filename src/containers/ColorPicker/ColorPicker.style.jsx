import styled from 'styled-components';
import Button from '../../components/Button/Button';

export const StyledColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-bottom: 2%;
`;

export const StyledButton = styled(Button)`
  margin: 10px auto;
  width: 225px;
  &:hover {
    background-color: #2686d4;
  }
`;
