import React from "react"
import { renderRoutes } from "react-router-config"

export default ({ route }) => (
  <div>
    <h1>layout</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)
