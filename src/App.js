import React from 'react';
import logo from './logo.svg';
import './App.css';
import QueryForm from './Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QueryForm url="http://localhost:9876/api/data" pollInterval={2000} />
      </header>
    </div>
  );
}

export default App;
