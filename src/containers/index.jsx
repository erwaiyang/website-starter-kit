import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterActions from 'actions/counterActions';

import Counter from 'components/Counter';

import 'styles/index';

const App = (props) => (
  <div className="background">
    <h1>React App</h1>
    <Counter
      count={props.counterReducer.count}
      increment={props.counterActions.increment}
      decrement={props.counterActions.decrement}
      asyncIncrement={() => props.dispatch({ type: 'INCREMENT_ASYNC' })}
    />
  </div>
);

const mapStateToProps = (state) => ({
  counterReducer: state.counterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  counterActions: bindActionCreators(counterActions, dispatch),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  counterReducer: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }),
  counterActions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
};
