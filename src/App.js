import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>Max Wang</code>'s personal website.
        </p>
        <a
          className="App-link"
          href="https://maxwyb.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog Posts
        </a>
      </header>
    </div>
  );
}

export default App;
