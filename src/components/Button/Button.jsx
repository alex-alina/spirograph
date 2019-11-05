import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';


export default function Button(props) {
  const {
    children,
    onClick,
  } = props;

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </StyledButton>

  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // primary: PropTypes.bool.isRequired,
};
