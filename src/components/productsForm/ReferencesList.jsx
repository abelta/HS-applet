import React from 'react';
import PropTypes from 'prop-types';
import Reference from '../reference';

const ReferencesList = ({ data, onClick }) => (
  <div>
    <ul>
      {data.map(reference => (
        <li key={reference.id}>
          <Reference {...reference} onClick={onClick} />
        </li>
      ))}
    </ul>
  </div>
);

ReferencesList.defaultProps = {
  onClick: null,
};

ReferencesList.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default ReferencesList;
