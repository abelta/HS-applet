import React from 'react';
import PropTypes from 'prop-types';

const AcceptButton = ({ onClick }) => <button onClick={onClick}>Save</button>;

AcceptButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AcceptButton;
