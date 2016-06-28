import { expect } from 'chai';

import * as counterActions from 'actions/counterActions';
import * as types from 'constants/actionTypes';

describe('counter actions', () => {
  describe('increment', () => {
    it('should create an action to plus', () => {
      const expected = {
        type: types.INCREMENT,
      };
      expect(counterActions.increment()).to.deep.equal(expected);
    });
  });
  describe('decrement', () => {
    it('should create an action to minus', () => {
      const expected = {
        type: types.DECREMENT,
      };
      expect(counterActions.decrement()).to.deep.equal(expected);
    });
  });
});
