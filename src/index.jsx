import React from 'react'
import ReactDOM from 'react-dom'
import { fromJS } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import { logger } from './middleware'
import { setState } from './actions'
import AppContainer from './components/App'

var dummyState = fromJS({
  pageTitle: 'React Redux Boilerplate'
})

const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
const store = createStoreWithMiddleware(reducer)

store.dispatch(setState(dummyState))

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById('boilerplate_app')
)
