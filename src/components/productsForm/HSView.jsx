import React from 'react';
import PropTypes from 'prop-types';

const HSView = ({ value }) => (
  <section className="row" style={{ height: '100px' }}>
    <span className="col s4 center-align" style={{ fontWeight: 'bold', fontSize: 80, lineHeight: '100px' }}>
      {value[0]}
    </span>
    <span className="col s4 center-align" style={{ fontWeight: 'bold', fontSize: 80, lineHeight: '100px' }}>
      {value[1]}
    </span>
    <span className="col s4 center-align" style={{ fontWeight: 'bold', fontSize: 80, lineHeight: '100px' }}>
      {value[2]}
    </span>
  </section>
);

HSView.defaultProps = {
  value: [null, null, null],
};

HSView.propTypes = {
  value: PropTypes.array,
};

export default HSView;
