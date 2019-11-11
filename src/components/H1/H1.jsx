/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import StyledH1 from './H1.style';

export default function H1(props) {
  const { children } = props;

  return (
    <StyledH1>
      {children}
    </StyledH1>
  );
}

H1.propTypes = {
  children: PropTypes.string.isRequired,
};
