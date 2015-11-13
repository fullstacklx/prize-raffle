import fetch from 'isomorphic-fetch'
import _uniq from 'lodash.uniq'
import Random from 'random-js'


export const REQUEST_CANDIDATES = 'REQUEST_CANDIDATES'
function requestCandidates (hashtag) {
  return {
    type: REQUEST_CANDIDATES,
    hashtag
  }
}

export const RECEIVE_CANDIDATES = 'RECEIVE_CANDIDATES'
function receiveCandidates (hashtag, json) {
  let candidates = json.statuses.map((tweet) => {
    return {
      username: tweet.user.screen_name,
      imageURL: tweet.user.profile_image_url
    }
  }).filter((user) => user.username !== 'fullstacklx')
  candidates = _uniq(candidates, 'username')

  return {
    type: RECEIVE_CANDIDATES,
    hashtag,
    candidates,
    receivedAt: Date.now()
  }
}

export const SELECT_WINNER = 'SELECT_WINNER'
function selectWinner (candidates) {
  let randomNumber = Random.integer(
    0, candidates.length - 1
  )(Random.engines.nativeMath)

  return {
    type: SELECT_WINNER,
    winnerIdx: randomNumber,
    winner: candidates[randomNumber]
  }
}

export const REMOVE_WINNER = 'REMOVE_WINNER'
function removeWinner (winners, winnerIdx) {
  return {
    type: REMOVE_WINNER,
    winnerIdx: winnerIdx,
    winners: winners
  }
}

export const replaceWinner = winnerIdx => (dispatch, getState) => {
  dispatch(removeWinner(getState().get('winners').toJS(), winnerIdx))
  dispatch(selectWinner(getState().get('candidates').toJS()))
}

export const drawWinner = () => (dispatch, getState) => {
  dispatch(selectWinner(getState().get('candidates').toJS()))
}

export const fetchCandidates = hashtag => dispatch => {
  dispatch(requestCandidates(hashtag))

  return fetch('http://localhost:8888/tweets')
  .then(response => response.json())
  .then(json =>
    dispatch(receiveCandidates(hashtag, json))
   ).catch(err => console.log(err))
}
