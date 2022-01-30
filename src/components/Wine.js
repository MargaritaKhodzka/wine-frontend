import React from 'react';
import Table from 'react-bootstrap/Table';
import dateFormat, { masks } from "dateformat";
import {Link} from 'react-router-dom';

const Wine = props => {
  let wine = props.wines.filter(wine => wine.id == props.match.params.id)[0];

  return (
    <div className = 'container'>
      <div>
        <Link className = 'backLink' to='/wines'>Back to the wine list</Link>
      </div>

      <h3 className = 'showWine'>{wine && wine.name}</h3>
      <Table className = 'wineData' responsive>
        <tbody>
          <tr>
            <td>Date</td>
            <td>{dateFormat(wine && wine.date, "longDate")}</td>
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
            <td>Nicolò</td>
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
