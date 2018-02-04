import { expect } from 'chai';
import * as types from '../actionTypes';
import setSegment from './setSegment';

describe('setSegment', () => {
  const segment = 1;
  const action = setSegment({ segment });

  describe('setSegment', () => {
    describe('type', () => {
      it('has type PRODUCTS_FORM_SET_SEGMENT', () => {
        expect(action.type).to.equal(types.PRODUCTS_FORM_SET_SEGMENT);
      });
    });

    describe('payload', () => {
      it('has segment passed in as parameter', () => {
        expect(action.payload.segment).to.eql(segment);
      });
    });
  });
});
