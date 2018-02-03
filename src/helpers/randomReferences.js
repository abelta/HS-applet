import faker from 'faker';

const randomReferences = count =>
  Array.from({ length: count }, (v, i) => ({ id: String(i).padStart(2, '0'), name: faker.commerce.product() }));

export default randomReferences;
