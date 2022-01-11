import React from 'react';
import Table from 'react-bootstrap/Table';

import Wine from './Wine';

const Wines = (props) => {
  return (
    <div>
      {props.wines.map(wine => <div key={wine.id}><Wine wine={wine}/></div>)}
    </div>
  )
}

export default Wines;
