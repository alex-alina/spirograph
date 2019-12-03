import React from 'react';
import PropTypes from 'prop-types';
import StyledBanner from './Banner.style';

export default function Banner(props) {
  const { children } = props;

  return (
    <StyledBanner>
      {children}
    </StyledBanner>
  );
}

Banner.propTypes = {
  children: PropTypes.element.isRequired,
};
