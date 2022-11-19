import H2 from "./H2";
import Text from "./Text";
import style from "styled-components";

export const StyledHowTo = style.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  padding: 2%;
  margin: 4% auto;
  box-shadow: 
    0 0  0 2px rgb(255, 255, 255),
    0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
  
  @media(min-width: 700px) {
    width: 75%;
    padding: 2% 2% 2% 4%; 
  }
`;

export const StyledLink = style.a`
  color: #2fa4ed;
`;

export default function HowToTitle() {
  return (
    <div>
      <H2>
        Draw lovely circular patterns using this{" "}
        <StyledLink
          href="https://en.wikipedia.org/wiki/Spirograph"
          target="_blank"
          rel="noopener noreferrer"
        >
          spirograph
        </StyledLink>{" "}
        app
      </H2>

      <StyledHowTo>
        <Text margin="0.2">1. Click Start to draw a new pattern</Text>

        <Text margin="0.2">2. Click Stop when you like the outcome</Text>

        <Text margin="0.2">
          3. Click Clear Canvas before trying a new pattern
        </Text>

        <Text margin="0.2">4. Repeat: play around with the commands below</Text>
      </StyledHowTo>
    </div>
  );
}
