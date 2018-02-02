import React from 'react';
import PropTypes from 'prop-types';

const CancelButton = ({ onClick }) => <button onClick={onClick}>Cancel</button>;

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CancelButton;
