import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import cx from 'classnames'

const DrawButton = React.createClass({
  propTypes: {
    drawWinner: React.PropTypes.func,
    className: React.PropTypes.string
  },

  mixins: [PureRenderMixin],

  onClickHandler: function (e) {
    this.props.drawWinner()
  },

  render: function () {
    let classes = cx('draw-button', this.props.className)
    return (
      <button
        className={ classes }
        onClick={ this.onClickHandler }>Draw Winner</button>
    )
  }
})

export default DrawButton
