import { randomReferences } from '../helpers';

const initialState = [randomReferences(100), randomReferences(100), randomReferences(100)];

const references = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default references;
