import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import playerMoves from './client/reducers/player_moves'

import App from './client/components/app'

const store = createStore(playerMoves)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)
