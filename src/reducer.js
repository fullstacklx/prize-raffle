import { Map } from 'immutable'
import { SET_STATE } from './actions'

const reducer = function (state = Map(), action) {
  if (action.type === SET_STATE) {
    return state.merge(action.state)
  }
  return state
}

export default reducer
