import { Map } from 'immutable'
import { expect } from 'chai'
import reducer from '../src/reducer.js'

describe('Reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map()

    const action = {
      type: 'SET_STATE',
      state: { pageTitle: 'Hello World' }
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(Map({ pageTitle: 'Hello World' }))
  })
})
