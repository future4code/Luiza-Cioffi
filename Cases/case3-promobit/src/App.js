import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Header from './components/header/Header'
import { ThemeProvider } from '@material-ui/core';
import theme from './constants/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
