import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Reference = ({ className, id, name, onClick }) => (
  <button
    className={classNames('row', 'btn-flat', 'waves-effect', 'waves-dark', 'white', className)}
    onClick={onClick}
    style={{ border: 'none', margin: 0, width: '100%' }}
  >
    <span className="col s2" style={{ fontWeight: 'bold' }}>
      {id}
    </span>
    <span className="col s10">{name}</span>
  </button>
);

Reference.defaultProps = {
  className: '',
  onClick: null,
};

Reference.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Reference;
