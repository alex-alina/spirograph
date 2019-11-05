import React from 'react';
import PropTypes from 'prop-types';
// import StyledButton from './Button.style';

export default function Label(props) {
  const { htmlFor, children } = props;

  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>

  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
