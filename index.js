import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './client/reducers/reducer'

import AppConnector from './client/connectors/appConnector'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <AppConnector />
  </Provider>,
  document.querySelector('main')
)
