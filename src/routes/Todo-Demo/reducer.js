export default function todoCounter(state = 0, action) {
  switch (action.type) {
    case "TODO_INCREMENT":
      return state + 1
    case "TODO_INCREMENT_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state
    case "TODO_DECREMENT":
      return state - 1
    default:
      return state
  }
}
