import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal, createProduct, updateProduct } from '../actions/products';
import { AcceptButton, CancelButton, HSView } from '../components/productsForm';

const ProductsForm = ({ cancel, formIsValid, product, productCreate, productUpdate, selectedName, selectedValue }) => (
  <div>
    <h1>PRODUCTS FORM</h1>
    <section>
      <HSView value={selectedValue} />
      <CancelButton onClick={cancel} />
      <AcceptButton
        disabled={!formIsValid}
        onClick={() =>
          product
            ? productUpdate({ oldValue: product.value, newName: selectedName, newValue: selectedValue })
            : productCreate({ name: selectedName, value: selectedValue })
        }
      />
    </section>
  </div>
);

ProductsForm.defaultProps = {
  product: null,
  selectedValue: '',
  selectedName: '',
};

ProductsForm.propTypes = {
  cancel: PropTypes.func.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  product: PropTypes.object,
  productCreate: PropTypes.func.isRequired,
  productUpdate: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
  selectedName: PropTypes.string,
};

const mapStateToProps = state => ({
  formIsValid: state.productsForm.formIsValid,
  selectedValue: state.productsForm.selectedValue,
  selectedName: state.productsForm.selectedName,
});

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(closeModal()),
  productCreate: ({ name, value }) => dispatch(createProduct({ name, value })),
  productUpdate: ({ oldValue, newName, newValue }) => dispatch(updateProduct({ oldValue, newName, newValue })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
