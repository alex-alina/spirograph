import React from 'react';
import './DrawSection.css';
import paper from 'paper';
import { draw } from '../../utils/drawFunctions'

// function draw(event) {
//   // animation loop
//     // console.log("in draw loop");

//     // Create a Paper.js Path to draw a line into it:
//       var path  = new Path();
//     // Give the stroke a color
//     path.strokeColor = 'black';
//     var start = new Point(0, 0);
    
//     // Move to start and draw a line from there
//     path.moveTo(start);
    
//     // Note the plus operator on Point objects.
//     // PaperScript does that for us, and much more!
//     path.lineTo(start.add([ 100, 100 ]));
//   }

function DrawSection() {
 
    window.onload = function() {
      paper.install(window);
      paper.setup('myCanvas');
  console.log('Onload')
      paper.view.onFrame = draw;
    }
  
  return (
    <div >
      <h1>Hello Draw</h1>
      <canvas id="myCanvas" resize style={{ width: '600px', height: '600px' }}></canvas>
    </div>
  );
}

export default DrawSection;
