import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (
    props.primary || props.secondary ? '#fff' : '#f7f7f7'
  )};

  color: ${(props) => {
    let color = '#004c8c';

    if (props.primary) color = '#387002';
    if (props.secondary) color = '#bb4d00';
    if (props.disabled) color = '#b8b8b8';

    return color;
  }};

  border: ${(props) => {
    let borderColor = '#42a5f5';
    if (props.primary) borderColor = '#7cb342';
    if (props.secondary) borderColor = '#ffa726';
    if (props.disabled) borderColor = '#b8b8b8';

    return `1.7px solid ${borderColor}`;
  }};
  
  width: 8rem;
  min-width: 60px;
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  outline:none;
`;

export default StyledButton;
