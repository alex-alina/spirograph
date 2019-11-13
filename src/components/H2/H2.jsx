/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import StyledH2 from './H2.style';

export default function H2(props) {
  const { children, center } = props;

  return (
    <StyledH2
      center={center}
    >
      {children}
    </StyledH2>
  );
}

H2.propTypes = {
  children: PropTypes.string.isRequired,
  center: PropTypes.bool,
};
