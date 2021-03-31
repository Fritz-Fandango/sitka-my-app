# Front-end sim

The simulation and its requirements are defined in [SIMULATOR.md](SIMULATOR.md).

## Set up

Install dependencies by running `npm install`.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). All of its features are available.

If you wish to solve this using a library other than React (e.g Angular, Vue, etc.) you may do so. You may bring your own scaffolding too if you wish not to use Create React App. If you do, you can ignore the **Folder Structure** section of this document as it is specific to Create React App.

## Folder Structure

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### make build-docker

Builds and launches the application in production mode should you choose to run it within a Docker container.