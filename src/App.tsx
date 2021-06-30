import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SignUp />
    </div>
  );
}

export default App;
