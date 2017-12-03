import React, { Component } from 'react';
import actions from 'actions';
import Sudoku from 'functionals/Sudoku';
import Loading from 'visuals/Loading';
import Timer from 'visuals/Timer';
import './styles.css';

class Play extends Component {
  state = {
    type: 'alone',
    config: {
      showTimer: true
    },
    initial: { },
    solved: { },

    // TODO: Get this from backend
    teamId: 0,

    startedAt: Date.now(),

    isLoading: true
  };

  constructor(props) {
    super(props);

    const gameId = this.props.match.params.gameId;

    actions.game.get(gameId).then((game) => {
      this.setState({
        type: game.type,
        config: game.config,
        startedAt: game.startedAt,
        initial: game.initial,
        solved: game.teams[this.state.teamId].solved,
        isLoading: false
      });
    });
  }

  onChange = (i, newValue) => {
    const gameId = this.props.match.params.gameId;
    actions.game.solved.change(gameId, this.state.teamId, i, newValue);
  }

  render() {
    return (
      <div className="Play">
        { !this.state.isLoading && this.state.config.showTimer ? <Timer startAt={this.state.startedAt} /> : null }

        {
          this.state.isLoading
            ? <Loading />
            : <Sudoku
                initial={this.state.initial}
                config={this.state.config}
                solved={this.state.solved}
                onChange={this.onChange} />
        }
      </div>
    );
  }
}

export default Play;
