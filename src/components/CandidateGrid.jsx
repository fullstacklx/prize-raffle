import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import UserCard from './UserCard'

const CandidateGrid = React.createClass({
  propTypes: {
    candidates: React.PropTypes.object.isRequired
  },

  mixins: [PureRenderMixin],

  render: function () {
    return (
      <div className='candidate-grid'>
        <h3>Candidates</h3>
        { this.props.candidates.map((user) =>
          <div style={{ display: 'inline-block' }} key={ user.get('username') }>
            <UserCard { ...user.toJS() } />
          </div>
        )}
      </div>
    )
  }
})

export default CandidateGrid
