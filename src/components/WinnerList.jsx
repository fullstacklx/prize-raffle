import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserCard from './UserCard'

const WinnerList = React.createClass({
  propTypes: {
    winners: React.PropTypes.object,
    replaceWinner: React.PropTypes.func
  },

  mixins: [PureRenderMixin],

  onClickHandler: function (idx) {
    this.props.replaceWinner(idx)
  },

  render: function () {
    return (
      <ul className='winner-list'>
        { this.props.winners.map((user, idx) =>
          <li key={ user.get('username')} >
            <UserCard
              onClick={ this.onClickHandler.bind(this, idx) } { ...user.toJS() }
            />
          </li>
        )}
      </ul>
    )
  }
})

export default WinnerList
