import React, { Component } from 'react';
import WavePage from './components/WavePage';
import './styles/App.scss';

class App extends Component {

  render():JSX.Element {
    return (
      <div className="App">
        <WavePage/>
      </div>
    );
  }
}

export default App;