import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import {fetchWines} from '../actions/fetchWines';
import WineInput from '../components/WineInput';
import Wines from '../components/Wines';
import Wine from '../components/Wine';

class WinesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchWines()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/wines/new' component={WineInput} />
          <Route path='/wines/:id'  render={(routerProps) => <Wine {...routerProps} wines={this.props.wines} />} />
          <Route path='/wines' render={(routerProps) => <Wines {...routerProps} wines={this.props.wines} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines
  }
}

export default connect(mapStateToProps, {fetchWines})(WinesContainer);
