import React from 'react';
import Table from 'react-bootstrap/Table';

const Wine = (props) => {
  let wine = props.wines[props.match.params.id - 1]

  return (
    <div>
      {wine ? wine.name : null}
    </div>
  )
}

export default Wine;
