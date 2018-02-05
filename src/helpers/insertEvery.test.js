import { expect } from 'chai';
import insertEvery from './insertEvery';

describe('insertEvery', () => {
  it('returns a string with a character inserted every number of times', () => {
    expect(insertEvery('000000', 2, '-')).to.eql('00-00-00');
  });
});
