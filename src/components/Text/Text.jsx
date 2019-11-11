/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import StyledText from './Text.style';

export default function Text(props) {
  const { children, center } = props;

  return (
    <StyledText
      center={center}
    >
      {children}
    </StyledText>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  center: PropTypes.bool,
};
