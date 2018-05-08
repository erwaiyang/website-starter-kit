import React from 'react'
import PropTypes from 'prop-types'

const Counter = (props) => {
  const {
    count, increment, decrement, asyncIncrement,
  } = props
  return (
    <div>
      <h2>This is a Counter!</h2>
      <span>count: {count}</span>
      <button onClick={increment}>PLUS</button>
      <button onClick={decrement}>MINUS</button>
      <button onClick={asyncIncrement}>ASYNC PLUS</button>
    </div>
  )
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  asyncIncrement: PropTypes.func.isRequired,
}

export default Counter
