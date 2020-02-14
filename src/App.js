import React from 'react';
import api from './services/api';
import Routes from './routes';

import './index.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  
    <div className="App">
      <Header />
      <Routes />
    </div>
  
);

export default App;
