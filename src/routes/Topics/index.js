import React from "react"
import { renderRoutes } from "react-router-config"
import { Link } from "react-router-dom"

export default ({ route, match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    {renderRoutes(route.routes)}
  </div>
)
