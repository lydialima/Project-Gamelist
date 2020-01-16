import React from 'react';
import Routes from '../src/routes';
import './style.css';

import Header from './components/Header';


const App = () => (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );


export default App;
