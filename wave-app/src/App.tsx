import React, { Component } from 'react';
import HomePage from './components/HomePage';
import './styles/App.css';

class App extends Component {

  render():JSX.Element {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;