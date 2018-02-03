import { createSelector } from 'reselect';

const references = state => state.references;
const segment = state => state.productsForm.selectedSegment;

const selectReferences = createSelector(references, segment, (ref, i) => ref[i]);

export default selectReferences;
