import { Point, Path, Shape } from 'paper';


let ellipse = null;

// let shape = null;

// const rotateLazyElipse = () => {
//   if(shape === null) {
//     shape = new Shape.Ellipse({
//       point: [80, 250],
//       size: [180, 60],
//       fillColor: 'yellow'
//   });
//   }
// }

const lazyInstantiate = () => {
  if (ellipse === null) {
    ellipse = new Shape.Ellipse({
      point: [80, 250],
      size: [40, 50],
      strokeColor: 'green'
});
  }
}

export const draw = (event) => {
  lazyInstantiate();
  // rotateLazyElipse();
    ellipse.rotate(2);
    // rectangle.position.x += event.delta*40;
    // rectangle.position.y += event.delta*120;
 const angle = event.time;
    ellipse.position.x = Math.cos(angle) * 200 + 300;
    ellipse.position.y = Math.sin(angle) * 200 + 300;
    // if(rectangle.position.y > 600) {
    //   rectangle.position.y = 0;
    // }
    // if(rectangle.position.x > 600) {
    //   rectangle.position.x = 0;
    // };
    
    // shape.rotate(4)
  
  }




  