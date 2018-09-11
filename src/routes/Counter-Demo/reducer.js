import { PLUS, SUBTRACT, MULTIPLY, DIVIDE } from "./actionTypes"

export default function counter(state = 0, action) {
  switch (action.type) {
    case PLUS:
      return state + action.addend
    case SUBTRACT:
      return state - action.subtrahend
    case MULTIPLY:
      return state * action.multiplier
    case DIVIDE:
      return state / action.divisor
    default:
      return state
  }
}
