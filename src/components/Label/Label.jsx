import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './Label.style';

export default function Label(props) {
  const { htmlFor, children } = props;

  return (
    <StyledLabel htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
