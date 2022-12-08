import styled from 'styled-components';

interface ButtonProps {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  onClick: (event:any) => void;
}

const StyledButton = styled.button<ButtonProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  
  width: auto;
  max-width: 400px;
  min-width: 100px;
  height: 36px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.05em;
  margin: 0.5em;
  padding: 0.15em 0.5em;
  border-radius: 50px;
  outline: none !important;
  
  @media(min-width: 700px) {
    font-size: 1em;
    min-width: 140px;
    margin: 1em 1em 1em 1em;
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

  &:hover {
    background-color: ${(props) => {
    let backgroundColor = '#2fa4ed';

    if (props.primary) backgroundColor = '#2686d4';
    if (props.secondary) backgroundColor = '#f58905';
    if (props.disabled) backgroundColor = '#7a7878';

    return backgroundColor;
  }};
  }

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

export default function Button({children, onClick, ...props}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
