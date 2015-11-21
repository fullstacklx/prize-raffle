import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { List } from 'immutable'
import UserCard from './UserCard'

const CandidateGrid = React.createClass({
  propTypes: {
    candidates: React.PropTypes.instanceOf(List).isRequired
  },

  mixins: [PureRenderMixin],

  render: function () {
    const styles = {
      display: 'inline-block',
      padding: '.5em'
    }

    return (
      <div className='candidate-grid'>
        <h3>Candidates</h3>
        { this.props.candidates.map((user) =>
          <div style={ styles } key={ user.get('username') }>
            <UserCard imageURL={ user.get('imageURL') } />
          </div>
        )}
      </div>
    )
  }
})

export default CandidateGrid
