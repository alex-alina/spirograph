import React from 'react';
import H2 from '../H2/H2';
import Text from '../Text/Text';
import { StyledHowTo, StyledLink } from './HowToSection.style';

export default function HowToTitle(props) {
  return (
    <div>
      <H2 margin="0.75">
        Draw lovely circular patterns using this
        {' '}
        <StyledLink
          href="https://en.wikipedia.org/wiki/Spirograph"
          target="_blank"
          rel="noopener noreferrer"
        >
        spirograph
        </StyledLink>
        {' '}
        app
      </H2>

      <StyledHowTo>
        <Text margin="0.2">
          1. Click Start to draw a new pattern
        </Text>

        <Text margin="0.2">
          2. Click Stop when you like the outcome
        </Text>

        <Text margin="0.2">
          3. Click Clear Canvas before trying a new pattern
        </Text>

        <Text margin="0.2">
          4. Repeat: play around with the commands below
        </Text>
      </StyledHowTo>
    </div>
  );
}
