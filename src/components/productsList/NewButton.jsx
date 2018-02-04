import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NewButton = ({ className, onClick }) => (
  <button
    className={classNames('waves-effect', 'waves-light', 'btn-flat', 'blue', 'white-text', className)}
    onClick={onClick}
  >
    New
  </button>
);

NewButton.defaultProps = {
  className: null,
};

NewButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default NewButton;
