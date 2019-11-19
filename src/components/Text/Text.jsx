/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import StyledText from './Text.style';

export default function Text(props) {
  const { children, center, margin } = props;

  return (
    <StyledText
      center={center}
      margin={margin}
    >
      {children}
    </StyledText>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  center: PropTypes.bool,
  margin: PropTypes.string,
};
