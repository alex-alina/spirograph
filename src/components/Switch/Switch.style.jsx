import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledSwitchContainer = styled.div`
  width: 70px;
  height: 30px;
`;

export const StyledInput = styled.input.attrs(
  ({ inputType }) => ({
    type: inputType || 'checkbox',
  }),
)`
  position: absolute;
  width: 10px;
  height: 10px;
  outline: none;
  opacity: 0;
`;

export const StyledSwitchBody = styled.div`
  width: 70px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 999px;

  ${(props) => (props.checked === false ? css`
    background-color: #888;
  ` : css`
    background-color:  #42a7f5;
  `)}
`;

export const StyledSwitchBtn = styled.div`
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
