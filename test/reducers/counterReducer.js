import { expect } from 'chai';

import counterReducer from 'reducers/counterReducer';
import * as types from 'constants/actionTypes';

describe('counterReducer', () => {
  it('should return initial state', () => {
    expect(counterReducer(undefined, {})).to.deep.equal({ count: 0 });
  });

  it('should handle INCREMENT', () => {
    expect(counterReducer({
      count: 1244,
    }, {
      type: types.INCREMENT,
    }))
    .to.deep.equal({
      count: 1245,
    }
    );
  });

  it('should handle DECREMENT', () => {
    expect(counterReducer({
      count: 1245,
    }, {
      type: types.DECREMENT,
    }))
    .to.deep.equal(
      {
        count: 1244,
      }
    );
  });
});
