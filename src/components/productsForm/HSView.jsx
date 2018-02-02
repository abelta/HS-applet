import React from 'react';
import PropTypes from 'prop-types';

const HSView = ({ value }) => (
  <div>
    <h3>Selected HS Code</h3>
    <p>{value}</p>
  </div>
);

HSView.defaultProps = {
  value: '',
};

HSView.propTypes = {
  value: PropTypes.string,
};

export default HSView;
