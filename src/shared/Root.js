import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

export default ({store, history, Root}) => {
  return pug`
    Provider(store='{store}')
      ConnectedRouter(history='{history}')
        Root
  `
}
