import React from 'react';
import { connect } from 'react-redux';
import Product, { RemoveButton } from '../components/product';
import { NewButton } from '../components/productsList';

const ProductsList = ({ products }) => (
  <div>
    <ul>
      {products.map((product, i) => (
        <li key={product.value}>
          <Product order={i} {...product} onClick={() => console.log('click')} />
          <RemoveButton onClick={() => console.log('remove')} />
        </li>
      ))}
    </ul>
    <NewButton onClick={() => console.log('new')} />
  </div>
);

const mapStateToProps = state => ({
  products: state.productsList.products,
});

export default connect(mapStateToProps)(ProductsList);
