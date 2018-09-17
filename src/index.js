import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import 'normalize.css'
import adaptive from 'adaptive.js'
import { I18nextProvider } from 'react-i18next'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootSaga from './sagas'
import rootReducer from './reducers'
import { routes } from './route'
import i18n from './i18n/locales/i18n'
//高清解决方案
adaptive.desinWidth = 640
adaptive.maxWidth = 640
adaptive.baseFont = 24
adaptive.init()
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// then run the saga
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        {/* kick it all off with the root route */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
