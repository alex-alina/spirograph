import React from "react";
import PropTypes from "prop-types";
import StyledSlider from "./Slider.style";

export default function Slider(props) {
  const { min, max, step, name, value, onChange, className } = props;

  return (
    <StyledSlider
      type="range"
      name={name}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={className || "slider"}
    />
  );
}

Slider.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
