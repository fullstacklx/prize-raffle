import { List, fromJS } from 'immutable'
import { expect } from 'chai'
import { winners, candidates } from '../src/reducers'

describe('Reducers', () => {
  describe('Candidates', () => {
    it('Creates a list of candidates on RECEIVE_CANDIDATES', () => {
      const initialState = List()
      const action = {
        type: 'RECEIVE_CANDIDATES',
        candidates: [{ username: 'foo', imageURL: 'http://foobar' }]
      }

      const nextState = candidates(initialState, action)
      const expected = fromJS(action.candidates)

      expect(nextState).to.equal(expected)
    })

    it('Removes winner candidate on SELECT_WINNER', () => {
      const initialState = fromJS([{ username: 'foo', imageURL: 'http://foobar' }])
      const action = {
        type: 'SELECT_WINNER',
        winnerIdx: 0
      }

      const nextState = candidates(initialState, action)
      const expected = List()

      expect(nextState).to.equal(expected)
    })
  })

  describe('Winners', () => {
    it('Adds winner to list on SELECT_WINNER', () => {
      const initialState = List()
      const action = {
        type: 'SELECT_WINNER',
        winner: { username: 'foo', imageURL: 'http://foobar' }
      }

      const nextState = winners(initialState, action)
      const expected = fromJS([action.winner])

      expect(nextState).to.equal(expected)
    })

    it('Removes winner from list on REMOVE_WINNER', () => {
      const initialState = fromJS([{ username: 'foo', imageURL: 'http://foobar' }])
      const action = {
        type: 'REMOVE_WINNER',
        winnerIdx: 0
      }

      const nextState = winners(initialState, action)
      const expected = List()

      expect(nextState).to.equal(expected)
    })
  })
})
