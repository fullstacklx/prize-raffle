import { Map, List } from 'immutable'
import { RECEIVE_CANDIDATES, SELECT_WINNER } from './../actions'

const candidates = function (state = List(), action) {
  if (action.type === RECEIVE_CANDIDATES) {
    return List(action.candidates.map((cand) => Map(cand)))
  } else if (action.type === SELECT_WINNER) {
    return state.remove(action.winnerIdx)
  }
  return state
}

export default candidates
