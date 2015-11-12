export const logger = store => next => action => {
  console.log('dispatching: ', action)
  return next(action)
}
