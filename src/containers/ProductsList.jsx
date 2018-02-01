import React from 'react';
import { connect } from 'react-redux';

const ProductsList = ({ products }) => {
  return <ul>{products.map(product => <li key={product.id}>{product.name}</li>)}</ul>;
};

const mapStateToProps = state => ({
  products: state.productsList,
});

export default connect(mapStateToProps)(ProductsList);
