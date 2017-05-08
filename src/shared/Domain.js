import {Record} from 'immutable'
import {push} from 'react-router-redux'

export default class Domain extends Record({}) {
  init (type) {
    return (dispatch, getState) => {
      setTimeout(() => dispatch(push('/page1')), 1000)
    }
  }
}
