import React from 'react'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {render} from 'react-dom'

const main = async () => {
  const [store, Home, Page1] = await Promise.all([
    import('store.js'),
    import('LazyHome.js'),
    import('LazyPage1.js')
  ])
  render(
    pug`
      Provider(store='{store.default}')
        ConnectedRouter(history='{store.history}')
          div
            Switch
              Route(exact='{true}' path='/' component='{Home.default}')
              Route(path='/page1' component='{Page1.default}')
    `,
    document.getElementById('app')
  )
}

main()
