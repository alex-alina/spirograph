/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { ChromePicker } from 'react-color';
import PropTypes from 'prop-types';
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
      <StyledButton onClick={onClick}>
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
  color: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
