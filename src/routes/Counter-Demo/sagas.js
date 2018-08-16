import { put, takeEvery } from "redux-saga/effects"

function* onIncrement() {
  console.log("object")
  yield put({ type: "INCREMENT" })
}

function* incrementAsync() {
  // yield delay(1000)
  console.log("------->>>>")
  yield put({ type: "INCREMENT" })
}

export function* watchCounterDemoSaga() {
  console.log("---")
  yield takeEvery("ON_INCREMENT", onIncrement)
  yield takeEvery("INCREMENT_ASYNC", incrementAsync)
}
