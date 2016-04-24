import React from 'react'
import '../css/styles.scss'
import ga from 'react-ga'

ga.initialize('UA-54081195-1')

module.exports = React.createClass({
  componentWillMount() {
    ga.pageview(window.location.pathname)
  },

  propTypes () {
    return {
      children: React.PropTypes.node,
    }
  },

  render () {
    return this.props.children
  }
})
