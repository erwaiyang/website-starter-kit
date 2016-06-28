import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from 'components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React App</h1>
        <Counter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
