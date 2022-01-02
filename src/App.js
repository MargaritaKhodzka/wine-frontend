import React from 'react';
import {connect} from 'react-redux';

import WinesContainer from './containers/WinesContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <WinesContainer/>
      </div>
    );
  }
}

export default App;
