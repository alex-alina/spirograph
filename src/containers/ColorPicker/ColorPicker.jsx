import { ChromePicker } from "react-color";
import styled from "styled-components";
import Button from "../../components/Button";

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

export default function ColorPicker({
  text,
  onClick,
  color,
  handleChangeComplete,
  isVisible,
}) {
  return (
    <StyledColorPicker>
      <StyledButton onClick={onClick}>{text}</StyledButton>

      {isVisible ? (
        <ChromePicker
          disableAlpha
          color={color}
          onChangeComplete={handleChangeComplete}
        />
      ) : null}
    </StyledColorPicker>
  );
}
