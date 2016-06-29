import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  render() {
    const { count, increment, decrement, asyncIncrement } = this.props;
    return (
      <div>
        <h2>This is a Counter!</h2>
        <span>count: {count}</span>
        <button onClick={increment}>PLUS</button>
        <button onClick={decrement}>MINUS</button>
        <button onClick={asyncIncrement}>ASYNC PLUS</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  asyncIncrement: PropTypes.func.isRequired,
};
