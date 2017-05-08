import React from 'react'
import {Route} from 'react-router'
import Home from 'LazyHome.js'
import Page1 from 'LazyPage1.js'

export default () => pug`
  div
    Route(exact='{true}' path='/' component='{Home}')
    Route(path='/page1' component='{Page1}')
`
