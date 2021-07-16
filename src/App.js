import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './Panel/Panel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React!!!</h2>
        </div>
        <Panel titel="Titel 1" text="Text1234"></Panel>
        <Panel titel="Titel 2" text="Text7890"></Panel>
      </div>
    );
  }
}

export default App;
