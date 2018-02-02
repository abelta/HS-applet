import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ order, name, onClick, value }) => (
  <article>
    <button onClick={onClick}>
      <span>{order}</span>
      <span>{name}</span>
      <span>{value}</span>
    </button>
  </article>
);

Product.defaultProps = {
  onClick: null,
};

Product.propTypes = {
  order: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default Product;
