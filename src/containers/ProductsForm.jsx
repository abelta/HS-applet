import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal, createProduct, updateProduct } from '../actions/products';
import { AcceptButton, CancelButton } from '../components/productsForm';

const ProductsForm = ({ cancel, product, productCreate, productUpdate }) => (
  <div>
    <h1>PRODUCTS FORM</h1>
    <section>
      <CancelButton onClick={cancel} />
      <AcceptButton
        onClick={() =>
          product ? productUpdate({ oldValue: '', newName: '', newValue: '' }) : productCreate({ name: '', value: '' })
        }
      />
    </section>
  </div>
);

ProductsForm.defaultProps = {
  product: null,
};

ProductsForm.propTypes = {
  cancel: PropTypes.func.isRequired,
  product: PropTypes.object,
  productCreate: PropTypes.func.isRequired,
  productUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(closeModal()),
  productCreate: ({ name, value }) => dispatch(createProduct({ name, value })),
  productUpdate: ({ oldValue, newName, newValue }) => dispatch(updateProduct({ oldValue, newName, newValue })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
