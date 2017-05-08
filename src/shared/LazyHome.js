import React from 'react'
import Lazy from 'Lazy.js'

export default () => {
  const promises = [import('Home.js')]
  const child = ({components}) => {
    const [Home] = components
    return pug`
      Home
    `
  }
  return pug`
    Lazy(promises='{promises}' child='{child}')
  `
}
