import {Component, createElement} from 'react'
import Loading from 'Loading.js'

export default class Lazy extends Component {
  constructor () {
    super()
    this.state = {
      isLoaded: false,
      components: null
    }
  }

  componentDidMount () {
    this.load()
  }

  async load () {
    const components = await Promise.all(this.props.promises)
    this.setState({
      isLoaded: true,
      components: components.map(m => m.default)
    })
  }

  render () {
    return this.state.isLoaded ? createElement(
      this.props.child,
      {components: this.state.components}
    ) : createElement(Loading)
  }
}
