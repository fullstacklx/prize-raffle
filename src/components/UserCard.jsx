import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserAvatar from './UserAvatar'

const UserCard = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    imageURL: React.PropTypes.string
  },

  mixins: [PureRenderMixin],

  render: function () {
    return (
      <div className='user-card' onClick={ this.props.onClick }>
        <UserAvatar imageURL={ this.props.imageURL } />
      </div>
    )
  }
})

export default UserCard
