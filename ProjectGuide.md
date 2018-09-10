# JUST FOR FUN

>     海外项目C端基础框架

## 快速开始

```bash
git clone 'https://github.com/tangweikun/Just-For-Fun.git'
cd Just-For-Fun
yarn / npm install
yarn start / npm run start
```

## 技术栈

- [redux](https://redux.js.org)
- [redux-saga](https://redux-saga.js.org)
- [reselect](https://github.com/reduxjs/reselect)
- [react-router](https://reacttraining.com/react-router)

## 基础配置

- 域名代理
  > 修改`package.json`里的`proxy`
- Post-Processing CSS
  > minifies your CSS and adds vendor prefixes to it automatically through Autoprefixer
- NO CSS Preprocessor
  > we recommend that you don’t reuse the same CSS classes across different components.

## Project structure

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

## Available Scripts

### npm start

> Runs the app in the development mode.

> Open http://localhost:3000 to view it in the browser.

> The page will reload if you make edits.

> You will also see any lint errors in the console.

### npm test

> Launches the test runner in the interactive watch mode.

### npm run build

> Builds the app for production to the build folder.
> It correctly bundles React in production mode and optimizes the build for the best performance.

## Changing the Page `<title>`

use [React Helmet](https://github.com/nfl/react-helmet)

## Code Splitting

This project setup supports code splitting via [dynamic import()](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand)

[Code-Splitting](https://reactjs.org/docs/code-splitting.html)

## Adding a Stylesheet

`Button.css`

```css
.Button {
  padding: 20px;
}
```

`Button.js`

```js
import React, { Component } from "react"
import "./Button.css" // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />
  }
}
```

## Adding Images, Fonts, and Files

Here is an example:

```js
import React from "react"
import logo from "./logo.png" // Tell Webpack this JS file uses this image

console.log(logo) // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />
}

export default Header
```

This works in CSS too:

```css
.Logo {
  background-image: url(./logo.png);
}
```

## Adding Custom Environment Variables

> By default you will have `NODE_ENV` defined for you, and any other environment variables starting with `REACT_APP_`.

> These environment variables will be defined for you on process.env. For example, having an environment variable named `REACT_APP_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_SECRET_CODE`.

## Adding Development Environment Variables In `.env`

[dotenv](https://github.com/motdotla/dotenv)

## Can I Use Decorators

> Create React App doesn’t support decorator syntax at the moment

## Fetching Data with AJAX Requests

> You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.

[AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)

## Proxying API Requests in Development

## Pre-Rendering into Static HTML Files

> If you’re hosting your build with a static hosting provider you can use react-snapshot or react-snap to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded.

> There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes.

> The primary benefit of pre-rendering is that you get the core content of each page with the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines.

You can read more about [zero-configuration pre-rendering (also called snapshotting) here](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a).

## Running Tests

> Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

> We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'`instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

## Writing Tests

> To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

```js
import sum from "./sum"

it("sums numbers", () => {
  expect(sum(1, 2)).toEqual(3)
  expect(sum(2, 2)).toEqual(4)
})
```

## Initializing Test Environment

> If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a src/setupTests.js to your project. It will be automatically executed before running your tests.

`src/setupTests.js`

```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock
```

## Deployment

## How to avoid using relative path imports in create-react-app?

Create a file called `.env` in the project root and write the import path

```bash
NODE_PATH=src/
```

After that restart the development server. Now you should be able to import anything inside `\*src/` without relative paths.

## How to get query parameters in react-router4?

> The ability to parse query strings was taken out of react-routerV4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

```js
const queryString = require("query-string")
const parsed = queryString.parse(props.location.search)
```
