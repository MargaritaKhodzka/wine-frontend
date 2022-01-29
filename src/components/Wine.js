import React from 'react';
import Table from 'react-bootstrap/Table';

const Wine = props => {
  let wine = props.wines.filter(wine => wine.id == props.match.params.id)[0];

  return (
    <div>
      <h2>{wine && wine.name}</h2>
      <Table responsive striped bordered>
        <tbody>
          <tr>
            <td>Date</td>
            <td>{wine && wine.date}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{wine && wine.description}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{wine && wine.year}</td>
          </tr>
          <tr>
            <td>Shop</td>
            <td>{wine && wine.shop}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>${wine && wine.price}</td>
          </tr>
          <tr>
            <td>Nicolo</td>
            <td>{wine && wine.n_rate}</td>
          </tr>
          <tr>
            <td>Margo</td>
            <td>{wine && wine.m_rate}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Wine;
