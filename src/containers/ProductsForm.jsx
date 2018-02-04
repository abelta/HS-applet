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
  selectedSegment,
  selectedValue,
}) => (
  <div className="container">
    <header>
      <div className="row center-align">
        <h5 className="col s12">Selected HS Code</h5>
      </div>
      <HSView value={selectedValue} />
    </header>
    <section>
      <section className="row" style={{ margin: 0 }}>
        <Selector className="col s4" onClick={() => segmentSet({ segment: 0 })} selected={selectedSegment === 0}>
          Chapter
        </Selector>
        <Selector className="col s4" onClick={() => segmentSet({ segment: 1 })} selected={selectedSegment === 1}>
          Heading
        </Selector>
        <Selector className="col s4" onClick={() => segmentSet({ segment: 2 })} selected={selectedSegment === 2}>
          Subheading
        </Selector>
      </section>
      <section>
        <ReferencesList data={references} onSelect={referenceSelect} />
      </section>
      <section className="row">
        <CancelButton className="col s6" onClick={cancel} />
        <AcceptButton
          className="col s6"
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
  selectedName: PropTypes.array,
  selectedSegment: PropTypes.number.isRequired,
  selectedValue: PropTypes.array,
};

const mapStateToProps = state => ({
  formIsValid: state.productsForm.formIsValid,
  product: state.productsForm.product,
  references: selectReferences(state),
  selectedName: state.productsForm.selectedName,
  selectedSegment: state.productsForm.selectedSegment,
  selectedValue: state.productsForm.selectedValue,
});

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(closeModal()),
  productCreate: ({ product }) => dispatch(createProduct({ product })),
  productUpdate: ({ oldValue, product }) => dispatch(updateProduct({ oldValue, product })),
  referenceSelect: ({ reference }) => dispatch(selectReference({ reference })),
  segmentSet: segment => dispatch(setSegment(segment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
