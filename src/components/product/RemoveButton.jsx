import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({ onClick }) => <button onClick={onClick}>Remove</button>;

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
