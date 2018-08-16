import { combineReducers } from "redux"
import counter from "./routes/Counter-Demo/reducer"
import todoCounter from "./routes/Todo-Demo/reducer"

const rootReducer = combineReducers({
  counter,
  todoCounter
})

export default rootReducer
