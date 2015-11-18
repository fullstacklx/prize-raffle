import { Map, List } from 'immutable'
import { SELECT_WINNER, REMOVE_WINNER } from './../actions'

const winners = function (state = List(), action) {
  if (action.type === SELECT_WINNER) {
    return state.push(Map(action.winner))
  } else if (action.type === REMOVE_WINNER) {
    return state.remove(action.winnerIdx)
  }
  return state
}

export default winners
