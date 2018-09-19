import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import global from '../sagas'
import { makeAllReducer } from './getInjectAsync'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
let composeFn = compose

export default (initialState, initialRedurce) => {
  if (process.env.NODE_ENV === 'development') {
    composeFn = composeWithDevTools
  }
  const store = createStore(
    makeAllReducer(initialRedurce),
    initialState,
    composeFn(applyMiddleware(...middleware)),
  )
  store.asyncReducers = { ...initialRedurce }
  store.runsaga = sagaMiddleware.run
  global.map(store.runsaga)
  return store
}
