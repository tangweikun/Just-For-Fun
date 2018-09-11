import { put, takeEvery } from "redux-saga/effects"
import {
  PLUS,
  MULTIPLY,
  PLUS_FIRST_THEN_MULTIPLY,
  PLUS_FIRST_THEN_DIVIDE_BY_TEN,
  DIVIDE
} from "./actionTypes"

// 使用 saga 组合触发多个 Action
function* plusFirstThenMultiplySaga(action) {
  yield put({ type: PLUS, addend: action.addend })
  yield put({ type: MULTIPLY, multiplier: action.multiplier })
}

function* plusFirstThenDivideByTen(action) {
  yield put({ type: PLUS, addend: action.addend })
  yield put({ type: DIVIDE, divisor: 10 })
}

// 全局监听 saga，添加的 saga 必须添加到这里才能被监听到
export function* watchCounterDemoSaga() {
  yield takeEvery(PLUS_FIRST_THEN_MULTIPLY, plusFirstThenMultiplySaga)
  yield takeEvery(PLUS_FIRST_THEN_DIVIDE_BY_TEN, plusFirstThenDivideByTen)
}
