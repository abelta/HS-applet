import React from 'react';
import PropTypes from 'prop-types';
import Reference from '../reference';

const ReferencesList = ({ data, onSelect }) => (
  <div>
    <ul>
      {data.map(reference => (
        <li key={reference.id}>
          <Reference {...reference} onClick={() => onSelect({ reference })} />
        </li>
      ))}
    </ul>
  </div>
);

ReferencesList.defaultProps = {
  onSelect: null,
};

ReferencesList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};

export default ReferencesList;
