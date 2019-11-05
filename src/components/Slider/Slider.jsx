import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import StyledSlider from './Slider.style';

export default function Slider(props) {
  const {
    min,
    max,
    step,
    list,
    name,
    value,
    onChange,
  } = props;

  return (
    <input
      type="range"
        // id="start"
      name={name}
      min={min}
      max={max}
      step={step}
      list={list}
      value={value}
      onChange={onChange}
      className="slider"
    />


  // <StyledSlider
  //   type="range"
  //   name={name}
  //   min={min}
  //   max={max}
  //   step={step}
  //   list={list}
  //   value={value}
  //   onChange={onChange}
  //   className="slider"
  // />
  );
}

Slider.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
