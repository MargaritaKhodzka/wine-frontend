import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import WinesContainer from './containers/WinesContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' component = { Home } />
        <WinesContainer/>
      </div>
    );
  }
}

export default App;
