import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const DrawButton = React.createClass({
  propTypes: {
    drawWinner: React.PropTypes.func
  },

  mixins: [PureRenderMixin],

  onClickHandler: function (e) {
    this.props.drawWinner()
  },

  render: function () {
    return (
      <button onClick={ this.onClickHandler }>Draw Winner</button>
    )
  }
})

export default DrawButton
