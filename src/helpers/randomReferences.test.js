import { expect } from 'chai';
import randomReferences from './randomReferences';

describe('randomReferences', () => {
  describe('it returns an array', () => {
    const result = randomReferences(5);

    it('has a length equal to the one passed as parameter', () => {
      expect(result.length).to.eql(5);
    });

    it('is made of references with id and name', () => {
      result.forEach(r => expect(r).to.have.all.keys('id', 'name'));
    });
  });
});
