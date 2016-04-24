import React from 'react'
import '../css/styles.scss'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.node,
    }
  },

  render () {
    return this.props.children
  }
})
