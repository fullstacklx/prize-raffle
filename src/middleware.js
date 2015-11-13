export const logger = store => next => action => {
  if (typeof action !== 'function') {
    console.log('dispatching: ', action)
  }
  return next(action)
}
