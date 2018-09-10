import { combineReducers } from "redux"
import counter from "./routes/Counter-Demo/reducer"
import todoCounter from "./routes/Todo-Demo/reducer"
import serviceExample from "./routes/ServiceApiExample/reducer"

const rootReducer = combineReducers({
  counter,
  todoCounter,
  serviceExample
})

export default rootReducer
