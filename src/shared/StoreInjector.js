import {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class StoreInjector extends Component {
  componentWillMount () {
    if (this.props.store === null) {
      this.props.dispatch({
        type: 'system/injectStore',
        store: this.context.store
      })
    }
  }

  render () {
    return null
  }
}

StoreInjector.contextTypes = {
  store: PropTypes.object
}

export default connect(
  ({store}) => ({store}), dispatch => ({dispatch})
)(StoreInjector)
