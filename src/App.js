import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'
import WorldMap from './WorldMap'

class App extends Component {
  render() {
    return (
      <div className='App'>
      <div className='App-header'>
      <h2>Demo dashboard</h2>
      </div>
      <div>
      <BarChart data={[5,10,1,3,8,9,6]} size={[500,500]} />
      <WorldMap />
      </div>
      </div>
    );
  }
}

export default App;
