import React from 'react';
import PropTypes from 'prop-types';
import Reference from '../reference';

const ReferencesList = ({ data, onSelect }) => (
  <div style={{ height: 200, overflowY: 'scroll' }}>
    <ul className="collection">
      {data.map(reference => (
        <li className="collection-item row" key={reference.id} style={{ padding: 0 }}>
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
