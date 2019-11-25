import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import { StyledColorPicker, StyledButton } from './ColorPicker.style';

export default function ColorPicker(props) {
  const {
    text,
    onClick,
    color,
    handleChangeComplete,
    isVisible,
  } = props;

  return (
    <StyledColorPicker>
      <StyledButton
        onClick={onClick}
      >
        {text}
      </StyledButton>
      {isVisible
        ? (
          <ChromePicker
            disableAlpha
            color={color}
            onChangeComplete={handleChangeComplete}
          />
        )
        : null}
    </StyledColorPicker>

  );
}

ColorPicker.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleChangeComplete: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  color: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
