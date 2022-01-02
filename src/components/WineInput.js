import React from 'react';
import {connect} from 'react-redux';

import {addWine} from '../actions/addWine';

class WineInput extends React.Component {

  state = {
    date: '',
    name: '',
    description: '',
    year: '',
    shop: '',
    price: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addWine(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Date' value={this.state.date} name = 'date' onChange={this.handleChange}/><br/>
          <input type='text' placeholder='Name' value={this.state.name} name = 'name' onChange={this.handleChange}/><br/>
          <input type='text' placeholder='Description' value={this.state.description} name = 'description' onChange={this.handleChange}/><br/>
          <input type='text' placeholder='Year' value={this.state.year} name = 'year' onChange={this.handleChange}/><br/>
          <input type='text' placeholder='Shop' value={this.state.shop} name = 'shop' onChange={this.handleChange}/><br/>
          <input type='text' placeholder='Price' value={this.state.price} name = 'price' onChange={this.handleChange}/><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addWine})(WineInput);
