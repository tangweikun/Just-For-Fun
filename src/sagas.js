import { all } from "redux-saga/effects"
import { watchCounterDemoSaga } from "./routes/Counter-Demo/sagas"

export default function* rootSaga() {
  yield all([watchCounterDemoSaga()])
}
