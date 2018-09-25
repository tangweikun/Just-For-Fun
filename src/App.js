import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => (
  <div>
    <ul>
      <li>
        <Link to="/counter-without-redux">counter-without-redux</Link>
      </li>
      <li>
        <Link to="/counter">counter</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/service-test">service testApi</Link>
      </li>
    </ul>
    {renderRoutes(route.routes)}
    <hr />
  </div>
)

export default App
