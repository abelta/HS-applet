import React from 'react';
import PropTypes from 'prop-types';

const NewButton = ({ onClick }) => <button onClick={onClick}>New</button>;

NewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewButton;
