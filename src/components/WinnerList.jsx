import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserCard from './UserCard'

import './WinnerList.css'

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
      <div className='winner-list'>
        <h3>Winners</h3>
        <ul>
          { this.props.winners.map((user, idx) =>
            <li key={ user.get('username')} >
              <UserCard
                onClick={ this.onClickHandler.bind(this, idx) }
                username={ user.get('username') }
                imageURL={ user.get('imageURL') } />
            </li>
          )}
        </ul>
      </div>
    )
  }
})

export default WinnerList
