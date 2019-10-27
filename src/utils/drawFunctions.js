import { Path } from 'paper';

let smallCircle = null;
let dot = null;
let path = null;
let R = 280;
let r = 100;
const Cx = 300;
const Cy = 300;
const f = -1.2;
let speed = 1;

const lazyInstantiate = () => {
  if (smallCircle === null) {
    smallCircle = new Path.Circle({
      center: [10, 10],
      radius: r,
      strokeColor: 'green',
      strokeWidth: 1
    });
    new Path.Circle({
      center: [Cx, Cy],
      radius: R,
      strokeColor: 'blue',
      strokeWidth: 1
    });

    const dotCenterX = Cx + R - r * (1 - f);
    dot = new Path.Circle({
      center: [dotCenterX, Cy],
      radius: 3,
      fillColor: 'red'
    })

    path = new Path();
		path.strokeColor = 'orange';
		path.moveTo(dot.position);
  }
}


export const draw = (event) => {
  lazyInstantiate();
  // rectangle.position.x += event.delta*40;
  // rectangle.position.y += event.delta*120;w
  // smallCircle.rotate(2);
 const angle = event.time * speed;
 const positionX = Math.cos(angle) * (R-r) + Cx;
 const positionY = Math.sin(angle) * (R-r) + Cy;

 smallCircle.position.x = positionX;
 smallCircle.position.y = positionY;
 
 const smallAngle = - angle * (R/r);
 const pX = Math.cos(smallAngle) * r * f + positionX;
 const pY = Math.sin(smallAngle) * r * f + positionY;

 path.lineTo([pX, pY]);

 dot.position.x = pX;
 dot.position.y = pY;
}


  	