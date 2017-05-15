import {applyMiddleware, createStore, combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

export const history = createHistory()
let reducers = {
  router: routerReducer
}

export default
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    store => next => action => {
      if (action.type === 'system/addDomain') {
        const payload = new action.Domain()
        reducers = Object.assign({}, reducers, {
          [payload.kind]: (state = null, action) => {
            if (action.payload !== undefined) {
              if (state === null) {
                return action.payload
              } else {
                return action.payload.kind === state.kind ? action.payload : state
              }
            } else {
              return state
            }
          }
        })
        action.store.replaceReducer(combineReducers(reducers))
        return next({
          type: 'system/initDomain',
          payload
        })
      } else {
        return next(action)
      }
    },
    createLogger({
      collapsed: () => true
    })
  )(createStore)(combineReducers(reducers))
