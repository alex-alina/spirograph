/* eslint-disable react/jsx-props-no-spreading */
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
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
