import { combineReducers } from 'redux'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import isEmpty from 'lodash/isEmpty'
import isFunction from 'lodash/isFunction'
import conformsTo from 'lodash/conformsTo'
import invariant from 'invariant'
import warning from 'warning'

const checketStore = store => {
  const spape = {
    dispatch: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runsaga: isFunction,
    asyncReducers: isObject,
    subscribe: isFunction,
  }

  invariant(conformsTo(store, spape), '(app/utils...) asyncInjectors: Expected a valid redux store')
}

export const makeAllReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers,
  })

const injectReducer = (store, reducerName, reducer) => {
  invariant(
    isString(reducerName) && !isEmpty(reducerName) && isFunction(reducer),
    '(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function',
  )
  if (Object.hasOwnProperty.call(store.asyncReducers, reducerName)) return
  store.asyncReducers[reducerName] = reducer
  store.replaceReducer(makeAllReducer(store.asyncReducers))
}

const injectSagas = (store, sagas) => {
  invariant(
    Array.isArray(sagas),
    '(app/utils...) injectAsyncSagas: Expected `sagas` to be an array of generator functions',
  )
  warning(!isEmpty(sagas), '(app/utils...) injectAsyncSagas: Received an empty `sagas` array')
  sagas.map(store.runsaga)
}

export const getInjectAsync = ({ store, reducer, sagas, reducerName }) => {
  checketStore(store)
  if (isFunction(reducer)) injectReducer(store, reducerName, reducer)
  if (!isEmpty(sagas)) injectSagas(store, sagas)
}
