import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
