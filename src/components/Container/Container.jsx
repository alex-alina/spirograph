import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './Container.style';


export default function Container(props) {
  const {
    children,
  } = props;

  return (
    <StyledContainer
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </StyledContainer>

  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
