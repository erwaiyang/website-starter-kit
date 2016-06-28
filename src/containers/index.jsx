import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterActions from 'actions/counterActions';

import Counter from 'components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React App</h1>
        <Counter
          count={this.props.counterReducer.count}
          increment={this.props.counterActions.increment}
          decrement={this.props.counterActions.decrement}
        />
      </div>
    );
  }
}

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
  counterReducer: {
    count: PropTypes.number.isRequired,
  },
  counterActions: {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  },
};
