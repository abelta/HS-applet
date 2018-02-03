import React from 'react';
import PropTypes from 'prop-types';

const Reference = ({ id, name, onClick }) => (
  <button onClick={onClick}>
    <span>{id}</span>
    <span>{name}</span>
  </button>
);

Reference.defaultProps = {
  onClick: null,
};

Reference.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Reference;
