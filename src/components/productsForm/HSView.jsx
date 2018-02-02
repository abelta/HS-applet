import React from 'react';
import PropTypes from 'prop-types';
import { insertEvery } from '../../helpers';

const HSView = ({ value }) => (
  <div>
    <h3>Selected HS Code</h3>
    <p>{insertEvery(value, 2, '-')}</p>
  </div>
);

HSView.defaultProps = {
  value: '',
};

HSView.propTypes = {
  value: PropTypes.string,
};

export default HSView;
