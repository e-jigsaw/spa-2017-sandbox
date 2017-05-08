import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(this.props.domain.init('Home'))
  }

  render () {
    return pug`
      div foo
    `
  }
}

export default connect(({domain}) => ({domain}), dispatch => ({dispatch}))(Home)
