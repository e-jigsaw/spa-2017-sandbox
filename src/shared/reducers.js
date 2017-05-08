import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import Domain from 'Domain.js'

export default combineReducers({
  router: routerReducer,
  domain: (state = new Domain()) => state
})
