import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              I am <a href="https://ashouri.org" target="_new">Farsheed Ashouri</a> and
          </p>
          <h2
            className="App-link"
          >
            Welcome to NeuroEvolution
          </h2>
          <p className="site-description"> 
              This website includes research and software developed during my studies on Machine Learning, Artificial intellegence and Image/Voice Recognition software development.
          
          </p>
        </header>
      </div>
    );
  }
}

export default App;
