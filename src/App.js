import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Banner from './Banner';
import Sidebar from './Sidebar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Banner/>
        </header>
        <Sidebar />
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
