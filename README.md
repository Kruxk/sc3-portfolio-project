# SC3D

# See the deployed site here(https://nifty-shirley-604860.netlify.app/)

## Table of contents

- [Gif](#gif)
- [How_i_did_it](#how_i_did_it)
- [About](#about)
- [Learned](#learned)
- [Technologies](#technologies)
- [Project User Stories and Wireframe](#project-user-stories-and-wireframe)
- [Available Scripts](#available-scripts)

### Gif

![](https://github.com/Kruxk/sc3-portfolio-project/blob/development/Peek%202020-10-08%2010-24.gif)

### How_i_did_it

#See code example here(https://github.com/Kruxk/sc3-portfolio-project/blob/development/src/pages/Compose.js)

### About

The original idea of this app is to be able to select a 3D model from a big library of 3D models.
After selecting the model the user can change the texture of the model.
I wasn't able to implement the texture feature due to running in to alot of trouble with performance optimizations.

Then create a scene with selected models, postition models with drag 'n drop, customize lightning options.
And export said scene to an image so it can be used in any promotional form(ads, product photos).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Learned

As i said above i had to do some memory optimizations, this is mainly due to the way react-three-fiber works and deals with imperative code.
It kinda forced me to learn about useRef and useMemo, since else it wouldn't display the loaded models on demand.

First I loaded the models in to redux but since the ojects are pretty huge, the app would be completely unresponsive for a few seconds.
So i took it out of redux since its a bad user experience and learned that redux doesnt like 'huge objects'.

### Technologies

##### Front End

- Node.js
- React
- Redux
- React-three-fiber
- React-use-gesture
- React-spring
- THREE.js
- Material-Ui

### Project User Stories and Wireframe

The [user stories](https://github.com/Kruxk/sc3/projects/1) and [wireframe](https://github.com/Kruxk/sc3/blob/development/wireframe.pdf) I used to plan my project.

### Available Scripts

In the project directory, you can run:

###### `npm start`

Installs all necessary packages to run the project.

###### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

##### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

##### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

##### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

##### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

###### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
