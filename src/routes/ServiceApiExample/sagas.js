import { put, call, takeLatest } from 'redux-saga/effects'
import { testPost, getUnionLogin } from '../../service/index'
import {
  ServiceApiExampleActionType,
  getAPITestSucess,
  getAPITestError,
  postAPITestSucess,
  postAPITestError,
} from './actions'

function* getTestApi(atcion) {
  try {
    const data = yield call(getUnionLogin)
    yield put(getAPITestSucess(data))
  } catch (error) {
    console.log(error)
  }
}
function* postTestApi(atcion) {
  try {
    const data = yield call(testPost)
    yield put(postAPITestSucess(data))
  } catch (error) {
    console.log(error)
  }
}

function* watchRequestApi() {
  yield takeLatest(ServiceApiExampleActionType.LOAD_GET_API, getTestApi)
  yield takeLatest(ServiceApiExampleActionType.LOAD_POST_API, postTestApi)
}

export default [watchRequestApi]
