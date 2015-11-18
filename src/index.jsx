import 'babel-core/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Map, List } from 'immutable'
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux-immutablejs'
import * as reducers from './reducers'
import { logger } from './middleware'
import AppContainer from './components/App'

// Redux DevTools store enhancers
import { devTools } from 'redux-devtools'
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

var dummyState = Map({
  winners: List(),
  candidates: List()
})

const createStoreWithMiddleware = compose(
  applyMiddleware(
    logger,
    thunkMiddleware
  ),
  devTools()
)(createStore)

const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer, dummyState)

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <AppContainer />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={ store } monitor={ LogMonitor } />
    </DebugPanel>
  </div>,
  document.getElementById('boilerplate_app')
)
