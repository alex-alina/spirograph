import styled from 'styled-components';

const StyledSlider = styled.input.attrs(({ inputType }) => ({
  type: inputType || 'range',
}))`
  -webkit-appearance: none;
  -moz-appearance: none;

  border: 1px solid #888;
  border-radius: 50px;
  background-color: #888;
  width: 35%;
  height: 3px;
  outline:none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    background-color: #42a7f5;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    width: 22px;
    height: 22px;
    background-color: #42a7f5;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  &::-moz-focus-outer {
    border: 0;
  }
  `;

export default StyledSlider;
