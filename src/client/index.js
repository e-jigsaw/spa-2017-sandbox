import {createElement} from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'

const main = async () => {
  const [store, Root, Route] = await Promise.all([
    import('clientStore.js'),
    import('Root.js'),
    import('Route.js')
  ])
  render(
    Root.default({
      store: store.default,
      history: store.history,
      Root: Route.default
    }),
    document.getElementById('app')
  )
}

main()
