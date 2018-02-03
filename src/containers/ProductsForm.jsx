import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal, createProduct, updateProduct } from '../actions/products';
import { selectReference, setSegment } from '../actions/productsForm';
import { AcceptButton, CancelButton, HSView, ReferencesList, Selector } from '../components/productsForm';
import { selectReferences } from '../selectors';

const ProductsForm = ({
  cancel,
  formIsValid,
  product,
  productCreate,
  productUpdate,
  references,
  referenceSelect,
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
        <ReferencesList data={references} onSelect={referenceSelect} />
      </section>
      <section>
        <CancelButton onClick={cancel} />
        <AcceptButton
          disabled={!formIsValid}
          onClick={() =>
            product // Depending on product being present at the begining or not, update/create.
              ? productUpdate({
                  oldValue: product.value,
                  product: {
                    name: selectedName.join(' '),
                    value: selectedValue.join(''),
                  },
                })
              : productCreate({ product: { name: selectedName.join(' '), value: selectedValue.join('') } })
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
  references: PropTypes.array.isRequired,
  referenceSelect: PropTypes.func.isRequired,
  segmentSet: PropTypes.func.isRequired,
  selectedValue: PropTypes.array,
  selectedName: PropTypes.array,
};

const mapStateToProps = state => ({
  formIsValid: state.productsForm.formIsValid,
  product: state.productsForm.product,
  references: selectReferences(state),
  selectedValue: state.productsForm.selectedValue,
  selectedName: state.productsForm.selectedName,
});

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(closeModal()),
  productCreate: ({ product }) => dispatch(createProduct({ product })),
  productUpdate: ({ oldValue, product }) => dispatch(updateProduct({ oldValue, product })),
  referenceSelect: ({ reference }) => dispatch(selectReference({ reference })),
  segmentSet: segment => dispatch(setSegment(segment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
