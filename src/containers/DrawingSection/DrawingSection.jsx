/* eslint-disable prefer-const */
import React, { useState } from 'react';
import paper, { Path } from 'paper';
import { PhotoshopPicker } from 'react-color';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import {
  CanvasContainer,
  StyledCanvas,
  ButtonsContainer,
  CommandsContainer,
  WrapperContainer,
} from './DrawingSection.style';

const DrawSection = () => {
  // const [background, setbackground] = useState('#fff');
  // const [lineColor, setLineColor] = useState('orange');

  let [movingCircle, setMovingCircle] = useState(null);

  // drawing point, placed anywhere inside the moving circle
  let [dot, setDot] = useState(null);

  // line segments that get drawed
  let [path, setPath] = useState(null);

  // guide circle's radius / change to let
  const [R, setR] = useState(280);

  // moving circle's radius  / change to let
  const [r, setSmallR] = useState(150);

  // guide circle' center (Cx, Cy)
  const [Cx, setCx] = useState(350);
  const [Cy, setCy] = useState(350);

  // fraction of the moving circle's radius where the drawing point is placed
  // Ex: f = 0 the drawing point is in the center of the moving circle
  // Ex: f = 1 the drawing point is on the edge/outile of the moving circle
  // Ex: f = 0.5 drawing point is halfway between the center and outline
  // const f = 0.6;
  const [f, setF] = useState(0.6);

  //  the size of drawing step
  const [speed, setSpeed] = useState(1);

  let [isDisabledBegin, setDisableBegin] = useState(false);
  let [isDisabledClear, setDisableClear] = useState(true);

  let [isCircleColored, setCircleColor] = useState('#fff');

  // all objects in the functions below are instantiated once,
  const lazyInstantiate = () => {
    if (movingCircle === null) {
      movingCircle = new Path.Circle({
        center: [10, 10],
        radius: r,
        strokeColor: isCircleColored,
        strokeWidth: 1,
      });

      // paperjs's engine works w/ side effects and stores the circle's reference
      // eslint-disable-next-line no-new
      new Path.Circle({
        center: [Cx, Cy],
        radius: R,
        strokeColor: isCircleColored,
        strokeWidth: 1,
      });

      const dotCenterX = Cx + R - r * (1 - f);
      dot = new Path.Circle({
        center: [dotCenterX, Cy],
        radius: 3,
        fillColor: 'transparent',
      });

      path = new Path();
      path.strokeColor = 'orange';
      path.moveTo(dot.position);
    }
  };

  // draw() -> callback called every time a frame needs to be drawn by paperjs
  // @param event (paper.js replaces it with an event argument that has multiple methods)
  const draw = (event) => {
    lazyInstantiate();
    const angle = event.time * speed;
    const positionX = Math.cos(angle) * (R - r) + Cx;
    const positionY = Math.sin(angle) * (R - r) + Cy;

    movingCircle.position.x = positionX;
    movingCircle.position.y = positionY;

    const smallAngle = -angle * (R / r);
    const pX = Math.cos(smallAngle) * r * f + positionX;
    const pY = Math.sin(smallAngle) * r * f + positionY;

    path.lineTo([pX, pY]);

    dot.position.x = pX;
    dot.position.y = pY;
  };

  const { window } = global;

  window.onload = () => {
    paper.install(window);
    paper.setup('myCanvas');
  };

  const handleStart = () => {
    paper.view.onFrame = draw;
    setDisableClear(true);
  };

  const handleStop = () => {
    setDisableBegin(true);
    setDisableClear(false);
    paper.view.onFrame = undefined;
  };

  const handleClear = () => {
    setDisableBegin(false);
    // paper.project.activeLayer.removeChildren();
    paper.setup('myCanvas');
  };


  return (
    <WrapperContainer>
      <CanvasContainer>
        <h1>Hello Draw</h1>
        <ButtonsContainer>
          <Button
            type="button"
            onClick={handleStart}
            primary
            disabled={isDisabledBegin}
          >
        Begin
          </Button>

          <Button
            type="button"
            onClick={handleStop}
            secondary
          >
        End
          </Button>

          <Button
            type="button"
            onClick={handleClear}
            disabled={isDisabledClear}
          >
        Clear
          </Button>
        </ButtonsContainer>

        <StyledCanvas id="myCanvas" />
      </CanvasContainer>
      <CommandsContainer>
        <h1>Some commands</h1>
      </CommandsContainer>
    </WrapperContainer>
  );
};

export default DrawSection;
