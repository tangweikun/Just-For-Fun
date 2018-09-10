import { all } from "redux-saga/effects"
import { watchCounterDemoSaga } from "./routes/Counter-Demo/sagas"
import { watchRequestApi } from "./routes/ServiceApiExample/sagas"

export default function* rootSaga() {
  yield all([watchCounterDemoSaga(), watchRequestApi()])
}
