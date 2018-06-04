import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './List';
import Map from './Map';
import './App.css';

class App extends Component {
  state = {
    view: 'list',
    locations: [
      {title: 'Avon Park Public Library', address: '100 N Museum Ave, Avon Park, FL 33825'},
      {title: 'Heartland National Bank', address: '800 W Main St, Avon Park, FL 33825'},
      {title: 'Laye\'s Tire Service', address: '1092 Locke St, Avon Park, FL 33825'},
      {title: 'AutoZone', address: '828 US Hwy 27 S, Avon Park, FL 33825'},
      {title: 'Taco Bell', address: '401 US Hwy 27 S, Avon Park, FL 33825'}
    ]
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render = {() => (
          <List />
        )}/>
        <Route exact path="/map" render = {() => (
          <Map
            locations={this.state.locations}
          />
        )}/>
      </div>
    );
  }
}

export default App;
