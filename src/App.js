import React from 'react';
import logo from './logo.svg';
import './App.css';
import Apps from './components/App'

import Header from './components/header/Header'

function App() {
  return (
    <div>
      <header>
        <Header></Header>

      </header>
      <body>
        <Apps></Apps>
      </body>

    </div>
  );
}

export default App;
