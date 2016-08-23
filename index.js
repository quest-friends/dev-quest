import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'

const initialState = {
  vetClinic: {
    cats: [{name: 'fluffy'}]
  },
  shop: {
    cats: [{name: 'kitty'}],
    dogs: [{name: 'pup'}]
  }
}

const reducer = function (state = initialState , action) {
  return state
}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App name='Pet store' />
  </Provider>,
  document.querySelector('main')
)
