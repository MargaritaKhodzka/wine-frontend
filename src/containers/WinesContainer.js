import React from 'react';
import {connect} from 'react-redux';

import {fetchWines} from '../actions/fetchWines';
import WineInput from '../components/WineInput';
import Wines from '../components/Wines';

class WinesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchWines()
  }

  render() {
    return (
      <div>
        <WineInput/><br/><br/>
        <Wines wines={this.props.wines}/>
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
