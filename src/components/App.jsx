import React from 'react'
import { connect } from 'react-redux'
import { fetchCandidates, drawWinner, replaceWinner } from '../actions'
import CandidateGrid from './CandidateGrid'
import WinnerList from './WinnerList'
import StartButton from './StartButton'
import DrawButton from './DrawButton'

export const App = React.createClass({
  propTypes: {
    winners: React.PropTypes.object,
    candidates: React.PropTypes.object,
    fetchCandidates: React.PropTypes.func,
    drawWinner: React.PropTypes.func,
    replaceWinner: React.PropTypes.func
  },

  render: function () {
    return (
      <div className='container'>
        <h1>Prize Raffle</h1>
        { this.props.candidates.size > 0
        ? <CandidateGrid candidates={ this.props.candidates } />
        : <p>Click to fetch candidates...</p> }
        { this.props.winners.size > 0
        ? <WinnerList
            winners={ this.props.winners }
            replaceWinner={ this.props.replaceWinner }
          />
        : <p>No winners yet...</p> }
        { this.props.candidates.size > 0
        ? <DrawButton
          className={'btn btn-primary top-space'}
          drawWinner={ this.props.drawWinner } />
        : <StartButton
          className={ 'btn btn-success' }
          fetchCandidates={ this.props.fetchCandidates } /> }
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    candidates: state.get('candidates'),
    winners: state.get('winners')
  }
}

const AppContainer = connect(mapStateToProps, {
  fetchCandidates,
  drawWinner,
  replaceWinner
})(App)

export default AppContainer
