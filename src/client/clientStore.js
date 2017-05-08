import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import reducers from 'reducers.js'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

export const history = createHistory()

export default
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: () => true
    }),
    routerMiddleware(history)
  )(createStore)(reducers)
