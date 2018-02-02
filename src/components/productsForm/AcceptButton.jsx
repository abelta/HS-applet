import React from 'react';
import PropTypes from 'prop-types';

const AcceptButton = ({ disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    Save
  </button>
);

AcceptButton.defaultProps = {
  disabled: false,
};

AcceptButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default AcceptButton;
