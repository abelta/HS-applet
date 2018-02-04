import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RemoveButton = ({ className, onClick }) => (
  <button
    className={classNames('btn-small', 'waves-effect', 'waves-light', 'red', 'white-text', className)}
    onClick={onClick}
  >
    Remove
  </button>
);

RemoveButton.defaultProps = {
  className: null,
};

RemoveButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
