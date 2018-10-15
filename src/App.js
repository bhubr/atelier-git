import React, { Component } from 'react';
import './App.css';
import Banner from './Banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Banner/>
        </header>
      </div>
    );
  }
}

export default App;
