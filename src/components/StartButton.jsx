import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const StartForm = React.createClass({
  propTypes: {
    fetchCandidates: React.PropTypes.func,
    className: React.PropTypes.string
  },

  mixins: [PureRenderMixin],

  onClickHandler: function (e) {
    this.props.fetchCandidates('')
  },

  render: function () {
    return (
      <button
        className={ this.props.className }
        onClick={ this.onClickHandler }>Start</button>
    )
  }
})

export default StartForm
