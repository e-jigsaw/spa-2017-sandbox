import {Record} from 'immutable'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class HomeDomain extends Record({
  kind: 'Home',
  name: 'home'
}) {}

class HomeComponent extends Component {
  componentDidMount () {
    if (this.props.Home === undefined) {
      this.props.dispatch({
        type: 'system/addDomain',
        Domain: HomeDomain,
        store: this.context.store
      })
    }
  }

  render () {
    const {Home} = this.props
    if (Home !== undefined && Home !== null) {
      return pug`
        div
          div {Home.name}
          Link(to='page1') Page1
      `
    } else {
      return null
    }
  }
}

HomeComponent.contextTypes = {
  store: PropTypes.object
}

export default connect(
  ({Home}) => ({Home}), dispatch => ({dispatch})
)(HomeComponent)
