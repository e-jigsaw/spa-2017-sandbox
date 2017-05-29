import {Record} from 'immutable'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Page1Domain extends Record({
  kind: 'Page1',
  name: 'page1'
}) {}

class Page1Component extends Component {
  componentDidMount () {
    if (this.props.Page1 === undefined) {
      this.props.dispatch({
        type: 'system/addDomain',
        Domain: Page1Domain
      })
    }
  }

  render () {
    const {Page1} = this.props
    if (Page1 !== undefined && Page1 !== null) {
      return pug`
        div
          div {Page1.name}
          Link(to='/') Home
      `
    } else {
      return null
    }
  }
}

export default connect(
  ({Page1}) => ({Page1}), dispatch => ({dispatch})
)(Page1Component)
