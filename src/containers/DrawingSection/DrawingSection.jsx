import React from 'react';
import paper from 'paper';
import draw from '../../utils/drawFunctions';
import Button from '../../components/Button/Button';
import {
  CanvasContainer,
  StyledCanvas,
  ButtonsContainer,
} from './DrawingSection.style';


const DrawSection = () => {
  // const [background, setbackground] = useState('#fff');
  // const [lineColor, setLineColor] = useState('orange');
  // const [CR, setCR] = useState(280);
  // const [cr, setCr] = useState(150);
  // const [Cx, setCx] = useState(300);
  // const [Cy, setCy] = useState(300);
  // const [f, setF] = useState(0.6);
  // const [speed, setSpeed] = useState(1);


  const { window } = global;

  window.onload = () => {
    paper.install(window);
    paper.setup('myCanvas');
    // paper.view.onFrame = draw;
  };

  const handleStart = () => {
    // paper.setup('myCanvas');
    // project.clear();

    // paper.project.activeLayer.removeChildren();
    paper.view.onFrame = draw;
  };

  const handleStop = () => {
    paper.view.onFrame = null;
  };

  // const handleClear = () => {
  //   project.clear();
  //   paper.setup('myCanvas');

  // }

  return (
    <CanvasContainer>
      <h1>Hello Draw</h1>
      <ButtonsContainer>
        <Button
          type="button"
          onClick={handleStart}
          primary
        >
        Start
        </Button>

        <Button
          type="button"
          onClick={handleStop}
          secondary
        >
        Pause
        </Button>

        <Button
          type="button"
          onClick={handleStop}
        >
        Clear
        </Button>
      </ButtonsContainer>

      <StyledCanvas id="myCanvas" />
      {/* <canvas id="myCanvas" resize="true" style={{ width: '600px', height: '600px' }} /> */}
    </CanvasContainer>
  );
};

export default DrawSection;
