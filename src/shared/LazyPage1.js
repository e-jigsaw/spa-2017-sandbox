import React from 'react'
import Lazy from 'Lazy.js'

export default () => {
  const promises = [import('Page1.js')]
  const child = ({components}) => {
    const [Page1] = components
    return pug`
      Page1
    `
  }
  return pug`
    Lazy(promises='{promises}' child='{child}')
  `
}
