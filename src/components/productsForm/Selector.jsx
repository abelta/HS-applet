import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Selector = ({ children, className, onClick, selected }) => (
  <button
    className={classNames('btn-flat', 'waves-effect', 'waves-light', 'white-text', 'blue', className, {
      'lighten-2': selected,
    })}
    onClick={onClick}
    style={{ borderRadius: 0 }}
  >
    {children}
  </button>
);

Selector.defaultProps = {
  className: '',
  selected: false,
};

Selector.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default Selector;
