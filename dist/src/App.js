import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';


function trolo(a) {
  return a + '_123';
}

function trolo2(a) {
  return a + '_123';
}

function square(x) {
  return x * x;
}

class App extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'div',
        { className: 'App-header' },
        React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
        React.createElement(
          'h2',
          null,
          'Welcome to React'
        )
      ),
      React.createElement(
        'p',
        { className: 'App-intro' },
        'To get started, edit ',
        React.createElement(
          'code',
          null,
          'src/App.js'
        ),
        ' and save to reload. Trolo lolo.'
      ),
      React.createElement('button', { style: { backgroundColor: "#fff" } }),
      React.createElement(
        'button',
        null,
        'Hey'
      ),
      React.createElement(Game, null)
    );
  }
}

function Square(props) {
  return React.createElement(
    'button',
    { className: 'square', onClick: props.onClick },
    props.value
  );
}

class Board extends Component {

  renderSquare(i) {
    return React.createElement(Square, { value: this.props.squares[i],
      onClick: () => this.props.onClick(i)
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'board-row' },
        this.renderSquare(0),
        this.renderSquare(1),
        this.renderSquare(2)
      ),
      React.createElement(
        'div',
        { className: 'board-row' },
        this.renderSquare(3),
        this.renderSquare(4),
        this.renderSquare(5)
      ),
      React.createElement(
        'div',
        { className: 'board-row' },
        this.renderSquare(6),
        this.renderSquare(7),
        this.renderSquare(8)
      )
    );
  }
}

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      console.log('' + step);
      console.log('' + move);
      const desc = move ? 'Move #' + move : 'Game start';
      return React.createElement(
        'li',
        { key: move },
        React.createElement(
          'a',
          { href: '#', onClick: () => this.jumpTo(move) },
          desc
        )
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner + trolo(1);
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    let testing = false;
    testing = 666;
    trolo(1);
    trolo(this.state);
    trolo2(1234);

    trolo2();

    return React.createElement(
      'div',
      { className: 'game' },
      React.createElement(
        'div',
        { className: 'game-board' },
        React.createElement(Board, {
          squares: current.squares,
          onClick: i => this.handleClick(i)
        })
      ),
      React.createElement(
        'div',
        { className: 'game-info' },
        React.createElement(
          'div',
          null,
          status
        ),
        React.createElement(
          'ol',
          null,
          moves
        )
      )
    );
  }
}

export default App;
//# sourceMappingURL=App.js.map