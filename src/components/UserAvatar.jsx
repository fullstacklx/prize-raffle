import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const UserAvatar = React.createClass({
  propTypes: {
    imageURL: React.PropTypes.string
  },

  mixins: [PureRenderMixin],

  render: function () {
    return (
      <img src={ this.props.imageURL } />
    )
  }
})

export default UserAvatar
