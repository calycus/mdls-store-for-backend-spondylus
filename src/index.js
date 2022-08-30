import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Redux/store';
import RotuerSwitch from './router/rotuerSwitch';

import './index.css';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1390CB',
    },
    secondary: {
      main: '#26A69A',
    },
    loginButton: {
      main: '#1390CB',
    },
    negative: {
      main: '#C10015',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>

        <RotuerSwitch />

      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

