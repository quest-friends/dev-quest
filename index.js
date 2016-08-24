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
  switch (action.type) {
    case 'ADD_CAT_TO_VET':
      const newState = Object.assign({}, state)
      newState.vetClinic.cats.push(action.payload)

      return newState
  }
  return state
}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App name='Pet store' />
  </Provider>,
  document.querySelector('main')
)
