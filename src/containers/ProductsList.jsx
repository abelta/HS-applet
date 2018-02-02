import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editProduct, newProduct, removeProduct } from '../actions/products';
import Product, { RemoveButton } from '../components/product';
import { NewButton } from '../components/productsList';

const ProductsList = ({ products, productEdit, productNew, productRemove }) => (
  <div>
    <ul>
      {products.map((product, i) => (
        <li key={product.value}>
          <Product order={i} {...product} onClick={() => productEdit({ value: product.value })} />
          <RemoveButton onClick={() => productRemove({ value: product.value })} />
        </li>
      ))}
    </ul>
    <NewButton onClick={productNew} />
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  productEdit: PropTypes.func.isRequired,
  productNew: PropTypes.func.isRequired,
  productRemove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.productsList.products,
});

const mapDispatchToProps = dispatch => ({
  productEdit: ({ value }) => dispatch(editProduct({ value })),
  productNew: () => dispatch(newProduct()),
  productRemove: ({ value }) => dispatch(removeProduct({ value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
