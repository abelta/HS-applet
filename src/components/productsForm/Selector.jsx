import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({ children, onClick }) => <button onClick={onClick}>{children}</button>;

Selector.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Selector;
