import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal, createProduct, updateProduct } from '../actions/products';
import { setSegment } from '../actions/productsForm';
import { AcceptButton, CancelButton, HSView, Selector } from '../components/productsForm';

const ProductsForm = ({
  cancel,
  formIsValid,
  product,
  productCreate,
  productUpdate,
  segmentSet,
  selectedName,
  selectedValue,
}) => (
  <div>
    <header>
      <h1>PRODUCTS FORM</h1>
    </header>
    <section>
      <HSView value={selectedValue} />
      <section>
        <Selector onClick={() => segmentSet(0)}>Chapter</Selector>
        <Selector onClick={() => segmentSet(1)}>Heading</Selector>
        <Selector onClick={() => segmentSet(2)}>Subheading</Selector>
      </section>
      <section>
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
    </section>
  </div>
);

ProductsForm.defaultProps = {
  product: null,
  selectedValue: [],
  selectedName: [],
};

ProductsForm.propTypes = {
  cancel: PropTypes.func.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  product: PropTypes.object,
  productCreate: PropTypes.func.isRequired,
  productUpdate: PropTypes.func.isRequired,
  segmentSet: PropTypes.func.isRequired,
  selectedValue: PropTypes.array,
  selectedName: PropTypes.array,
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
  segmentSet: segment => dispatch(setSegment(segment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
