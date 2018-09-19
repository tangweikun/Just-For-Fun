import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import 'normalize.css'
import adaptive from 'adaptive.js'
import { I18nextProvider } from 'react-i18next'

import createStore from './utils/createStore'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import { routes } from './route'
import i18n from './i18n/locales/i18n'
//高清解决方案
adaptive.desinWidth = 640
adaptive.maxWidth = 640
adaptive.baseFont = 24
adaptive.init()
// create the saga middleware

// mount it on the Store
export const store = createStore({}, { global: rootReducer })

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
