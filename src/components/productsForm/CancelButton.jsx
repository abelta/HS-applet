import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CancelButton = ({ className, onClick }) => (
  <button
    className={classNames('btn-flat', 'waves-effect', 'waves-light', 'red', 'white-text', className)}
    onClick={onClick}
    style={{ borderRadius: 0 }}
  >
    Cancel
  </button>
);

CancelButton.defaultProps = {
  className: '',
};

CancelButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CancelButton;
