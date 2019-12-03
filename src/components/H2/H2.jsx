/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import StyledH2 from './H2.style';

export default function H2(props) {
  const { children, center, margin } = props;

  return (
    <StyledH2
      center={center}
      margin={margin}
    >
      {children}
    </StyledH2>
  );
}

H2.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  center: PropTypes.bool,
  margin: PropTypes.string,
};
