import { Map, List } from 'immutable'
import * as actions from './actions'

const candidates = function (state = List(), action) {
  if (action.type === actions.RECEIVE_CANDIDATES) {
    return List(action.candidates.map((cand) => Map(cand)))
  } else if (action.type === actions.SELECT_WINNER) {
    return state.remove(action.winnerIdx)
  }
  return state
}

const winners = function (state = List(), action) {
  if (action.type === actions.SELECT_WINNER) {
    return state.push(Map(action.winner))
  } else if (action.type === actions.REMOVE_WINNER) {
    return state.remove(action.winnerIdx)
  }
  return state
}

const reducer = function (state = Map(), action) {
  return state
    .set('candidates', candidates(state.get('candidates'), action))
    .set('winners', winners(state.get('winners'), action))
}

export default reducer
