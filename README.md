## Spirograph App

## [Demo](https://spirograph-app.netlify.app/)

## Quick view

![](readme-img.png)

## Description

This is a drawing app that makes mathematical roulette curves and draws circular patterns. You can learn about spirographs [here. ](https://en.wikipedia.org/wiki/Spirograph)

## Tech stack

- React (hooks)
- JavaScript
- TypeScript
- Paper.js
- styled-components
- CSS

## Features

- Canvas
- Buttons that start & stop the drawing and clear the canvas
- Sliders that change several parameters to output different patterns
  - Speed - changes the size of drawing step
  - Drawing point - changes the position of the drawing point
  - Radius - changes the radius of the moving circle
  - Line width
  - Line dash
- Color Pickers - to change the canvas and line color
- Switch - to show the mechanism that is generating the drawing

## Setup

- Clone the repository `git@github.com:alex-alina/spirograph.git`
- Install the dependencies using `npm install`
- Start the server using `npm start`

## Future development and improvements

- Refactor the Container component and make it more flexible to use with props, to dry the code base by removing the custom containers.
- Split DrawSection container into seperate smaller containers.
- Add a random pattern generator.

## Motivation

I wanted to practice with and learn:

- How to use Paper.js framework with React and JS.
- Practicing more with styled-components.
- Using libraries to implement color pickers and a carousel.

## License

MIT Licence - Copyright &copy; 2019 - Alina Rusu.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
