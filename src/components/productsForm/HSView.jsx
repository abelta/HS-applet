import React from 'react';
import PropTypes from 'prop-types';

const HSView = ({ value }) => (
  <section>
    <h3>Selected HS Code</h3>
    <div>
      <span>{value[0]}</span>
      <span>{value[1]}</span>
      <span>{value[2]}</span>
    </div>
  </section>
);

HSView.defaultProps = {
  value: [null, null, null],
};

HSView.propTypes = {
  value: PropTypes.array,
};

export default HSView;
