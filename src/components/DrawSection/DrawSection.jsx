import React from 'react';
import './DrawSection.css';
import paper from 'paper';
import draw from '../../utils/drawFunctions';

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

const DrawSection = () => {
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
    <div>
      <h1>Hello Draw</h1>
      <div>
        <button
          type="button"
          onClick={handleStart}
        >
          Start
        </button>

        <button
          type="button"
          onClick={handleStop}
        >
        Stop
        </button>

        {/* <button
        onClick={handleClear}
      >
        Clear
      </button> */}
      </div>

      <canvas id="myCanvas" resize="true" style={{ width: '600px', height: '600px' }} />
    </div>
  );
};

export default DrawSection;
