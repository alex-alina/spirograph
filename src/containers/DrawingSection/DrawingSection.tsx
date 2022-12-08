import { useState, useEffect, useRef } from 'react';
import paper, { Path } from 'paper';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Text from '../../components/Text';
import Slider from '../../components/Slider/Slider';
import H2 from '../../components/H2';
import Switch from '../../components/Switch';
import calculateDash from '../../utils/utils';
import ColorPicker from '../ColorPicker/ColorPicker';
import CarouselDisplay from '../../components/CarouselDisplay';
import HowToSection from '../../components/HowToSection';

import {
  CanvasContainer,
  StyledCanvas,
  ButtonsContainer,
  CommandsContainer,
  WrapperContainer,
  SwitchContainer,
  ColorPickerContainer,
  StyledContainer,
  ColorCommandsContainer,
  MainCommandsContainer,
  StyledText,
} from './DrawingSection.style'

// will set moving circle's radius value based on screen size
const calculateResponsiveSmallR = () => {
  if (global.window.screen.width < 400) {
    return 70;
  }

  return 230;
};

const DrawSection = () => {
  // because: https://github.com/facebook/react/issues/14010
  let refState = useRef(
    {
      lineColor: '#42a7f5',
      lineWeight: 1,
      lineDash: 0,
      isCircleShown: false,
    },
  );

  let [canvasBackground, setCanvasBackground] = useState('#fff');
  let [lineColor, setLineColor] = useState('#42a7f5');
  let [lineWeight, setLineWeight] = useState(1);
  let [lineDash, setLineDash] = useState(0);

  let [referenceCircle] = useState<any>(null);
  let [movingCircle] = useState<any>(null);

  // reference aka guide circle's center (Cx, Cy)
  let [Cx, setCx] = useState(0);
  let [Cy, setCy] = useState(0);

  // guide circle's radius
  const [R, setR] = useState(0);

  // moving circle's radius
  const [r, setSmallR] = useState(calculateResponsiveSmallR());

  // fraction of the moving circle's radius where the drawing point is placed
  // Ex: f = 0 the drawing point is in the center of the moving circle
  // Ex: f = 1 the drawing point is on the edge/outile of the moving circle
  // Ex: f = 0.5 drawing point is halfway between the center and outline
  const [f, setF] = useState(0.6);

  // the size of drawing step
  let [speed, setSpeed] = useState<any>(5);

  // drawing point, placed anywhere inside the moving circle
  let [dot, setDot] = useState<any>(null);

  // line segments that get drawed
  let [path, setPath] = useState<any>(null);

  let [isDisabledBegin, setDisableBegin] = useState(false);
  let [isDisabledClear, setDisableClear] = useState(true);

  // displays the color pickers - aka CP
  let [isLineCPVisible, setLineCPVisibility] = useState(false);
  let [isCanvasCPVisible, setCanvasCPVisibility] = useState(false);

  // shows the reference circle and the moving circle (the spirograph mechanism)
  let [isCircleShown, setIsCircleShown] = useState(false);

  useEffect(() => {
    const { window } = global;

    paper.install(window);
    paper.setup('myCanvas');
  }, []);

  useEffect(() => {
    const calculateR = Math.round(paper.view.bounds.width - paper.view.bounds.center.x);
    const calculateCx = paper.view.bounds.center.x;
    const calculateCy = paper.view.bounds.center.y;

    setR(calculateR);
    setCx(calculateCx);
    setCy(calculateCy);
  }, [Cx, Cy, R]);

  // all objects in the functions below are instantiated once
  const lazyInstantiate = () => {
    if (movingCircle === null) {
      movingCircle = new Path.Circle({
        radius: r,
        strokeColor: refState.current.isCircleShown ? '#999' : 'transparent',
        strokeWidth: 1,
      });

      referenceCircle = new Path.Circle(paper.view.bounds.center, R);
      referenceCircle.strokeColor = refState.current.isCircleShown ? '#999' : 'transparent';
      referenceCircle.strokeWidth = 1;

      const dotCenterX = Cx + R - r * (1 - f);

      dot = new Path.Circle({
        center: [dotCenterX, Cy],
        radius: 1,
        fillColor: 'black',
      });

      path = new Path();
      path.strokeColor = refState.current.lineColor;
      path.strokeWidth = refState.current.lineWeight;
      path.dashArray = calculateDash(refState.current.lineDash);
      path.moveTo(dot.position);
    }
  };

  const updateLineStylesFromRef = () => {
    path.strokeColor = refState.current.lineColor;
    path.strokeWidth = refState.current.lineWeight;
    path.dashArray = calculateDash(refState.current.lineDash);
    referenceCircle.strokeColor = refState.current.isCircleShown ? '#999' : 'transparent';
    movingCircle.strokeColor = refState.current.isCircleShown ? '#999' : 'transparent';
  };

  // draw() -> callback called every time a frame needs to be drawn by paper.js
  // @param event (paper.js replaces it with an 'event' argument that has multiple methods)
  const draw = (event:any) => {
    lazyInstantiate();
    updateLineStylesFromRef();

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

  const handleStart = () => {
    paper.view.onFrame = draw;
    setDisableClear(true);
  };

  const handleStop = () => {
    setDisableBegin(true);
    setDisableClear(false);
    paper.view.onFrame = null;

  };

  const handleClear = () => {
    setDisableBegin(false);
    setDisableClear(true);
    paper.setup('myCanvas');
  };

  const handleSpeed = (event: any) => {
    const { value } = event.target;
    setSpeed(value);
  };

  const handleDrawingPoint = (event: any) => {
    const { value } = event.target;
    setF(value);
  };

  const handleMovingCircleR = (event: any) => {
    const { value } = event.target;
    setSmallR(value);
  };

  const handleLineWeight = (event: any) => {
    const { value } = event.target;
    setLineWeight(value);
    refState.current.lineWeight = value;
  };

  const handleLineDash = (event: any) => {
    const { value } = event.target;
    setLineDash(value);
    refState.current.lineDash = value;
  };

  const toggleShowCircles = (event: any) => {
    const isVisible = event.target.checked;
    setIsCircleShown(isVisible);
    refState.current.isCircleShown = isVisible;
  };

  const handleChangeBackground = (color: {hex: string}) => {
    setCanvasBackground(color.hex);
  };

  const handleChangeLineColor = (color: {hex: string}) => {
    const newColor = color.hex;
    setLineColor(newColor);
    refState.current.lineColor = newColor;
  };

  const handleShowLineCP = () => {
    setLineCPVisibility(!isLineCPVisible);
  };

  const handleShowCanvasCP = () => {
    setCanvasCPVisibility(!isCanvasCPVisible);
  };

  return (
    <WrapperContainer>
      <CanvasContainer>
        <ButtonsContainer>
          <Button
            onClick={handleStart}
            primary
            disabled={isDisabledBegin}
          >
            Start Drawing
          </Button>

          <Button
            onClick={handleStop}
            secondary
          >
            Stop Drawig
          </Button>

          <Button
            onClick={handleClear}
            disabled={isDisabledClear}
          >
            Clear Canvas
          </Button>
        </ButtonsContainer>

        <StyledCanvas
          id="myCanvas"
          resize
          backgroundColor={canvasBackground}
        />
      </CanvasContainer>

      <MainCommandsContainer>
        <HowToSection />

        <H2 margin="0.5">Change the parameters below and try a new pattern</H2>
        <StyledText>*Changes affect next drawing only.</StyledText>

        <StyledContainer>
          <CommandsContainer>
            <Label htmlFor="lineWeight">
              <Text>{`Line weight: ${lineWeight}`}</Text>
              <Slider
                name="lineWeight"
                min="1"
                max="5"
                step="0.5"
                value={lineWeight}
                onChange={handleLineWeight}
                className="slider"
              />
            </Label>

            <Label htmlFor="lineDash">
              <Text>{`Line dash: ${lineDash}`}</Text>
              <Slider
                name="lineDash"
                min="0"
                max="10"
                step="1"
                value={lineDash}
                onChange={handleLineDash}
                className="slider"
              />
            </Label>

            <Label htmlFor="speed">
              <Text>{`*Speed: ${speed}`}</Text>
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

            <Label htmlFor="r">
              <Text>{`*Radius: ${r}`}</Text>
              <Slider
                name="r"
                min="50"
                max={(R - 20).toString()}
                step="10"
                value={r}
                onChange={handleMovingCircleR}
                className="slider"
              />
            </Label>

            <Label htmlFor="f">
              <Text>{`*Drawing point: ${f}`}</Text>
              <Slider
                name="f"
                min="0"
                max="1"
                step="0.1"
                value={f}
                onChange={handleDrawingPoint}
                className="slider"
              />
            </Label>

            <CarouselDisplay />
          </CommandsContainer>

          <ColorCommandsContainer>
            <ColorPickerContainer>
              <ColorPicker
                text="Change canvas color"
                onClick={handleShowCanvasCP}
                color={canvasBackground}
                handleChangeComplete={handleChangeBackground}
                isVisible={isCanvasCPVisible}
              />

              <ColorPicker
                text="Change line color"
                onClick={handleShowLineCP}
                color={lineColor}
                handleChangeComplete={handleChangeLineColor}
                isVisible={isLineCPVisible}
              />
            </ColorPickerContainer>

            <SwitchContainer>
              <Text margin={0.5}>Show spirograph</Text>
              <Switch checked={isCircleShown} onChange={toggleShowCircles} />
            </SwitchContainer>
          </ColorCommandsContainer>
        </StyledContainer>
      </MainCommandsContainer>
    </WrapperContainer>
  );
};

export default DrawSection;
