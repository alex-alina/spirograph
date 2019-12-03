import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledLabel,
  StyledSwitchContainer,
  StyledInput,
  StyledSwitchBody,
  StyledSwitchBtn,
} from './Switch.style';

export default function Switch(props) {
  const {
    checked,
    onChange,
  } = props;

  return (
    <StyledSwitchContainer>
      <StyledLabel>
        <StyledInput
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <StyledSwitchBody checked={checked}>
          <StyledSwitchBtn checked={checked} />
        </StyledSwitchBody>
      </StyledLabel>
    </StyledSwitchContainer>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
