import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { editProduct, newProduct, removeProduct } from '../actions/products';
import { ProductsForm } from '.';
import Product, { RemoveButton } from '../components/product';
import { NewButton } from '../components/productsList';

const ProductsList = ({ products, productEdit, productNew, productRemove, formIsOpen }) => (
  <div>
    <Modal
      isOpen={formIsOpen}
      style={{
        overlay: { backgtoundColor: 'red', zIndex: 10 },
        content: { top: 0, left: 0, right: 0, bottom: 0, padding: 0 },
      }}
    >
      <ProductsForm />
    </Modal>
    <section className="container">
      <div className="row center-align">
        <h1 className="col12">Products list</h1>
      </div>
    </section>
    <section className="container">
      <div className="row valign-wrapper">
        <h5 className="col s6">Enter some HS references</h5>
        <NewButton className="col s6" onClick={productNew} />
      </div>
    </section>
    <section className="container center-align">
      {products.length > 0 && (
        <ul className="collection">
          {products.map((product, i) => (
            <li className="collection-item row valign-wrapper" key={product.value}>
              <Product {...product} onClick={() => productEdit({ product })} order={i} />
              <RemoveButton className="col s2" onClick={() => productRemove({ product })} />
            </li>
          ))}
        </ul>
      )}
    </section>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  productEdit: PropTypes.func.isRequired,
  productNew: PropTypes.func.isRequired,
  productRemove: PropTypes.func.isRequired,
  formIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
  formIsOpen: state.productsForm.formIsOpen,
});

const mapDispatchToProps = dispatch => ({
  productEdit: ({ product }) => dispatch(editProduct({ product })),
  productNew: () => dispatch(newProduct()),
  productRemove: ({ product }) => dispatch(removeProduct({ product })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
