import React from 'react';
import PropTypes from 'prop-types';

const HSView = ({ value }) => (
  <section>
    <h3>Selected HS Code</h3>
    <div>{value.join('-')}</div>
  </section>
);

HSView.defaultProps = {
  value: [],
};

HSView.propTypes = {
  value: PropTypes.array,
};

export default HSView;
