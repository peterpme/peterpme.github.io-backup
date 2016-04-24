import React from 'react'
import '../css/styles.scss'
import ga from 'react-google-analytics'
import {config} from 'config'

module.exports = React.createClass({
  componentDidMount() {
    ga('create', config.ga, 'auto')
    ga('send', 'pageview')
  },

  propTypes () {
    return {
      children: React.PropTypes.node,
    }
  },

  render () {
    const GA = ga.Initializer
    return (
      <div>
        {this.props.children}
        <GA />
      </div>
    )
  }
})
