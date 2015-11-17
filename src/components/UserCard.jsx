import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserAvatar from './UserAvatar'

const UserCard = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    imageURL: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  mixins: [PureRenderMixin],

  styles: { span: { marginLeft: '.5em' } },

  render: function () {
    return (
      <div className='user-card' onClick={ this.props.onClick }>
        <UserAvatar imageURL={ this.props.imageURL } />
        { this.props.username
        ? <span style={ this.styles.span }>{ this.props.username }</span>
        : '' }
      </div>
    )
  }
})

export default UserCard
