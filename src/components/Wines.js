import React from 'react';
import {Route, Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import Wine from './Wine';

const Wines = (props) => {
  return (
    <div>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nicolo</th>
            <th>Margo</th>
          </tr>
        </thead>

        <tbody>
          {props.wines.map(wine =>
            <tr key={wine.id}>
              <td><Link to={`/wines/${wine.id}`}>{wine.name}</Link></td>
              <td>{wine.n_rate}</td>
              <td>{wine.m_rate}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Wines;
