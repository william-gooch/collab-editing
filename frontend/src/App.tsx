import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from './features/editing/Editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Editor />
    </div>
  );
}

export default App;
