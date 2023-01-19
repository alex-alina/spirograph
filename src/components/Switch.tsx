import styled, { css } from 'styled-components';

interface SwitchProps {
  checked: boolean;
  onChange: (event: any) => void;
}

interface SwitchStyle {
  checked: boolean;
}

const StyledLabel = styled.label`
  position: relative;
`;

const StyledSwitchContainer = styled.div`
  width: 70px;
  height: 30px;
`;

const StyledInput = styled.input.attrs(
  ({ inputType }: any) => ({
    type: inputType || 'checkbox',
  }),
)`
  position: absolute;
  width: 10px;
  height: 10px;
  outline: none;
  opacity: 0;
`;

const StyledSwitchBody = styled.div<SwitchStyle>`
  width: 60px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 999px;

  ${(props) => (props.checked === false ? css`
    background-color: #888;
  ` : css`
    background-color:  #42a7f5;
  `)}
`;

const StyledSwitchBtn = styled.div<SwitchStyle>`
  width: 15px;
  height: 15px;
  border: 2px solid #fff;
  border-radius: inherit;
  background-color: #fff;
  
  ${(props) => (props.checked === false ? css`
    float: left;
    margin: 4px 0 6px 4px;
    
    @media(min-width: 1254px) {
      margin: 3px 0 6px 4px;
    }
    ` : css`
    float: right;
    margin: 4px 4px 6px 0;

    @media(min-width: 1254px) {
      margin: 3px 4px 6px 0;
    }
  `)}
`;

export default function Switch({checked, onChange}:SwitchProps) {
  return (
    <StyledSwitchContainer>
      <StyledLabel>
        <StyledInput
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <StyledSwitchBody checked={checked}>
          <StyledSwitchBtn checked={checked} />
        </StyledSwitchBody>
      </StyledLabel>
    </StyledSwitchContainer>
  );
}