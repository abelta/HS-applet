import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Product = ({ className, name, onClick, order, value }) => (
  <button
    className={classNames('col', 's10', 'row', 'btn-flat', 'waves-effect', 'waves-dark', 'white', className)}
    onClick={onClick}
    style={{ border: 'none', margin: 0 }}
  >
    <span className="col s2" style={{ fontWeight: 'bold' }}>
      {order}
    </span>
    <span className="col s5">{name}</span>
    <span className="col s5">{value}</span>
  </button>
);

Product.defaultProps = {
  className: null,
  onClick: null,
};

Product.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  order: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default Product;
