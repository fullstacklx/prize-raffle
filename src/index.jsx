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

var dummyState = Map({
  winners: List(),
  candidates: List()
})

const createStoreWithMiddleware = compose(
  applyMiddleware(logger, thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer, dummyState)

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById('boilerplate_app')
)
