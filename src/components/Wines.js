import React from 'react';
import Table from 'react-bootstrap/Table';

const Wines = (props) => {
  return (
    <div>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Description</th>
            <th>Year</th>
            <th>Shop</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.wines.map(wine =>
            <tr key={wine.id}>
              <td>{wine.date}</td>
              <td>{wine.name}</td>
              <td>{wine.description}</td>
              <td>{wine.year}</td>
              <td>{wine.shop}</td>
              <td>${wine.price}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Wines;
