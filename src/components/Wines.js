import React from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Wines = props => {
  return (
    <div className = 'container'>
      <div>
        <Link className = 'addButton' to='/wines/new'>Add A New Wine</Link>
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th>Wine</th>
            <th>Nicolò</th>
            <th>Margo</th>
          </tr>
        </thead>

        <tbody>
          {props.wines.map(wine =>
            <tr key={wine.id}>
              <td><Link className = 'wineData' to={`/wines/${wine.id}`}>{wine.name}</Link></td>
              <td className = 'rates'>{wine.n_rate}</td>
              <td className = 'rates'>{wine.m_rate}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Wines;
