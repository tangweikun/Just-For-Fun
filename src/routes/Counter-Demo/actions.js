import {
  PLUS_FIRST_THEN_MULTIPLY,
  PLUS_FIRST_THEN_DIVIDE_BY_TEN,
  PLUS,
  SUBTRACT
} from "./actionTypes"

export const plusFiveAction = () => ({
  type: PLUS,
  addend: 5
})

export const subtractAction = subtrahend => ({
  type: SUBTRACT,
  subtrahend
})

export const plusFirstThenMultiplyAction = (addend, multiplier) => ({
  type: PLUS_FIRST_THEN_MULTIPLY,
  addend,
  multiplier
})

export const plusFirstThenDivideByTenAction = addend => ({
  type: PLUS_FIRST_THEN_DIVIDE_BY_TEN,
  addend
})
