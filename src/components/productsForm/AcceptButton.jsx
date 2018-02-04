import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AcceptButton = ({ className, disabled, onClick }) => (
  <button
    className={classNames('btn-flat', 'waves-effect', 'waves-light', 'green', 'white-text', className)}
    disabled={disabled}
    onClick={onClick}
    style={{ borderRadius: 0 }}
    type="submit"
  >
    Save
    <i className="material-icons right">send</i>
  </button>
);

AcceptButton.defaultProps = {
  className: '',
  disabled: false,
};

AcceptButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default AcceptButton;
