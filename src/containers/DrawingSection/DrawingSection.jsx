/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import paper, { Path } from 'paper';
import { PhotoshopPicker } from 'react-color';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Text from '../../components/Text/Text';
import Slider from '../../components/Slider/Slider';
import H2 from '../../components/H2/H2';

import {
  CanvasContainer,
  StyledCanvas,
  ButtonsContainer,
  CommandsContainer,
  WrapperContainer,
} from './DrawingSection.style';
import Container from '../../components/Container/Container';


const DrawSection = () => {
  // const [background, setbackground] = useState('#fff');
  // const [lineColor, setLineColor] = useState('orange');
  let [referenceCircle, setReferenceCircle] = useState(null);
  let [movingCircle, setMovingCircle] = useState(null);

  // drawing point, placed anywhere inside the moving circle
  let [dot, setDot] = useState(null);

  // line segments that get drawed
  let [path, setPath] = useState(null);

  // guide circle's radius / change to let
  const [R, setR] = useState(null);

  // moving circle's radius  / change to let
  const [r, setSmallR] = useState(140);

  // guide circle' center (Cx, Cy)
  // const calculateX = paper.view.bounds.width - paper.view.bounds.center.x;
  let [Cx, setCx] = useState(null);
  let [Cy, setCy] = useState(null);

  // fraction of the moving circle's radius where the drawing point is placed
  // Ex: f = 0 the drawing point is in the center of the moving circle
  // Ex: f = 1 the drawing point is on the edge/outile of the moving circle
  // Ex: f = 0.5 drawing point is halfway between the center and outline
  // const f = 0.6;
  const [f, setF] = useState(0.1);

  //  the size of drawing step
  let [speed, setSpeed] = useState(5);

  // shows the reference circle and the moving circle
  let [isCirclesDisplayed, setDisplayCircles] = useState(false);

  let [isDisabledBegin, setDisableBegin] = useState(false);
  let [isDisabledClear, setDisableClear] = useState(true);


  useEffect(() => {
    const { window } = global;

    paper.install(window);
    paper.setup('myCanvas');
  }, []);

  // all objects in the functions below are instantiated once
  const lazyInstantiate = () => {
    if (movingCircle === null) {
      movingCircle = new Path.Circle({
        // intreaba-l pe adi de ce modificarea centrului nu are efecte
        center: [10, 10],
        radius: r,
        strokeColor: isCirclesDisplayed ? '#999' : 'transparent',
        strokeWidth: 1,
      });

      referenceCircle = new Path.Circle(paper.view.bounds.center, R);
      referenceCircle.strokeColor = isCirclesDisplayed ? '#999' : 'transparent';
      referenceCircle.strokeWidth = 1;
      const dotCenterX = Cx + R - r * (1 - f);

      dot = new Path.Circle({
        center: [dotCenterX, Cy],
        radius: 1,
        fillColor: 'black',
      });

      path = new Path();
      path.strokeColor = '#42a7f5';
      path.moveTo(dot.position);
    }
  };

  // draw() -> callback called every time a frame needs to be drawn by paperjs
  // @param event (paper.js replaces it with an 'event' argument that has multiple methods)
  const draw = (event) => {
    lazyInstantiate();

    paper.view.onResize = () => {
      referenceCircle.position = paper.view.center;
    };

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

  useEffect(() => {
    const calculateR = Math.round(paper.view.bounds.width - paper.view.bounds.center.x);
    const calculateCx = paper.view.bounds.center.x;
    const calculateCy = paper.view.bounds.center.y;

    setR(calculateR);
    setCx(calculateCx);
    setCy(calculateCy);
  }, [Cx, Cy, R]);

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
    setDisableClear(true);
    paper.setup('myCanvas');
  };

  const handleSpeed = (event) => {
    const { value } = event.target;
    setSpeed(value);
  };

  const handleMovePoint = (event) => {
    const { value } = event.target;
    setF(value);
  };

  const handleMovingCircleR = (event) => {
    const { value } = event.target;
    setSmallR(value);
  };

  const toggleDisplayCircles = (event) => {
    setDisplayCircles(!isCirclesDisplayed);
  };

  return (
    <WrapperContainer>
      <CanvasContainer>
        <ButtonsContainer>
          <Button
            type="button"
            onClick={handleStart}
            primary
            disabled={isDisabledBegin}
          >
        Start
          </Button>

          <Button
            type="button"
            onClick={handleStop}
            secondary
          >
        Stop
          </Button>

          <Button
            type="button"
            onClick={handleClear}
            disabled={isDisabledClear}
          >
        Clear
          </Button>
        </ButtonsContainer>

        <StyledCanvas id="myCanvas" resize />
      </CanvasContainer>

      <CommandsContainer>
        <Container>
          <H2>Change the parameters below and try a new pattern</H2>
        </Container>

        <Label htmlFor="speed">
          <Text>{`Speed: ${speed}`}</Text>
          <Slider
            name="speed"
            min="1"
            max="10"
            step="1"
            value={speed}
            onChange={handleSpeed}
            className="slider"
          />
        </Label>

        <Label htmlFor="f">
          <Text>{`Drawing point position: ${f}`}</Text>
          <Slider
            name="f"
            min="0"
            max="1"
            step="0.1"
            value={f}
            onChange={handleMovePoint}
            className="slider"
          />
        </Label>

        <Label htmlFor="r">
          <Text>{`Radius: ${r}`}</Text>
          <Slider
            name="r"
            min="50"
            max={R - 20}
            step="10"
            value={r}
            onChange={handleMovingCircleR}
            className="slider"
          />
        </Label>

        <Button
          type="button"
          onClick={toggleDisplayCircles}
        >
        Show Guiding Circles
        </Button>
      </CommandsContainer>
    </WrapperContainer>
  );
};

export default DrawSection;
