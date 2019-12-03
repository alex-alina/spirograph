/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './Container.style';

export default function Container(props) {
  const {
    children,
  } = props;

  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
