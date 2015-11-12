import React from 'react'
import { connect } from 'react-redux'

export const App = React.createClass({
  propTypes: {
    pageTitle: React.PropTypes.string
  },

  render: function () {
    return <h1>{ this.props.pageTitle }</h1>
  }
})

function mapStateToProps (state) {
  return {
    pageTitle: state.get('pageTitle')
  }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
