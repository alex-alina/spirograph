import styled from 'styled-components';

const StyledButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  
  width: auto;
  max-width: 250px;
  min-width: 80px;
  font-size: 1em;
  line-height: 1.5;
  margin:  2em 1em 1em 1em;
  padding: 1em, 3em;
  border-radius: 50px;
  outline:none;
  
  @media(min-width: 1000px) {
    font-size: 1.2em;
    min-width: 100px;
  }
  
  &::-moz-focus-inner {
    outline: none;
    border-color: transparent;
  }

  background-color: ${(props) => {
    let backgroundColor = '#2fa4ed';

    if (props.primary) backgroundColor = '#2fa4ed';
    if (props.secondary) backgroundColor = '#fca103';
    if (props.disabled) backgroundColor = '#999';

    return backgroundColor;
  }};

  color: ${(props) => {
    let color = '#fff';

    if (props.primary) color = '#fff';
    if (props.secondary) color = '#fff';
    if (props.disabled) color = '#fff';

    return color;
  }};

  border: ${(props) => {
    let borderColor = '#42a5f5';
    if (props.primary) borderColor = '#2fa4ed';
    if (props.secondary) borderColor = '#fca103';
    if (props.disabled) borderColor = '#999';

    return `1.6px solid ${borderColor}`;
  }};
`;

export default StyledButton;
