import React from 'react'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import StoreInjector from 'StoreInjector.js'
import {render} from 'react-dom'
import store, {history} from 'store.js'
import Home from 'LazyHome.js'
import Page1 from 'LazyPage1.js'

render(
  pug`
    Provider(store='{store}')
      ConnectedRouter(history='{history}')
        div
          StoreInjector
          Switch
            Route(exact='{true}' path='/' component='{Home}')
            Route(path='/page1' component='{Page1}')
  `,
  document.getElementById('app')
)
