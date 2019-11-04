import { Path } from 'paper';

let movingCircle = null;

// drawing point, placed anywhere inside the moving circle
let dot = null;

// line segments that get drawed
let path = null;

// guide circle's radius / change to let
const R = 280;

// moving circle's radius  / change to let
const r = 150;

//  guide circle' center (Cx, Cy)
const Cx = 300;
const Cy = 300;

// fraction of the moving circle's radius where the drawing point is placed
// Ex: f = 0 the drawing point is in the center of the moving circle
// Ex: f = 1 the drawing point is on the edge/outile of the moving circle
// Ex: f = 0.5 drawing point is halfway between the center and outline
const f = 0.6;

//  the size of drawing step
const speed = 1;
// cata vreme avem un moving circle nu mai reinstantiem celelalte obiecte
const lazyInstantiate = () => {
  if (movingCircle === null) {
    movingCircle = new Path.Circle({
      center: [10, 10],
      radius: r,
      strokeColor: '#79aaf7',
      strokeWidth: 1,
    });
    // paperjs' engine is designed to work with side effects and stores
    // the reference for the circle below
    // eslint-disable-next-line no-new
    new Path.Circle({
      center: [Cx, Cy],
      radius: R,
      strokeColor: '#000',
      strokeWidth: 1,
    });

    const dotCenterX = Cx + R - r * (1 - f);
    dot = new Path.Circle({
      center: [dotCenterX, Cy],
      radius: 3,
      fillColor: '#000',
    });

    path = new Path();
    path.strokeColor = 'orange';
    path.moveTo(dot.position);
  }
};

// draw() -> callback called every time a frame needs to be drawn by paperjs
// @param event (paper js replaces it with an event argument that has multiple methods)
const draw = (event) => {
  lazyInstantiate();
  // rectangle.position.x += event.delta*40;
  // rectangle.position.y += event.delta*120;w
  // smallCircle.rotate(2);


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

export default draw;
