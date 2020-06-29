import React from 'react';
import logo from './logo.svg';
import './App.css';
import QueryForm from './Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QueryForm url={"api/data"} pollInterval={2000} />
      </header>
    </div>
  );
}

export default App;
