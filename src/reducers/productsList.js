const initialState = {
  products: [{ name: 'moco', value: '010908' }, { name: 'pedo', value: '949622' }, { name: 'caca', value: '343455' }],
  modalOpen: false,
};

const productsList = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsList;
