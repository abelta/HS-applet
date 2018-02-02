import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { editProduct, newProduct, removeProduct } from '../actions/products';
import { ProductsForm } from '.';
import Product, { RemoveButton } from '../components/product';
import { NewButton } from '../components/productsList';

const ProductsList = ({ products, productEdit, productNew, productRemove, modalOpen }) => (
  <div>
    <Modal isOpen={modalOpen}>
      <ProductsForm />
    </Modal>
    <ul>
      {products.map((product, i) => (
        <li key={product.value}>
          <Product order={i} {...product} onClick={() => productEdit({ product })} />
          <RemoveButton onClick={() => productRemove({ product })} />
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
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  products: state.productsList.products,
  modalOpen: state.productsList.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  productEdit: ({ product }) => dispatch(editProduct({ product })),
  productNew: () => dispatch(newProduct()),
  productRemove: ({ product }) => dispatch(removeProduct({ product })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
