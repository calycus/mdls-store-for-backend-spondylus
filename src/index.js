import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Redux/store';
import PageContainer from './Pages/Container/pageContainer';

import './index.css';
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(26 41 124)',
    },
    secondary: {
      main: 'rgb(28 37 87)',
    },
    background: {
      main: '#ededed'
    },
    loginButton: {
      main: '#1390CB',
    },
    /* logincolor: {
      primary: 'rgb(26 41 124)',
      secondary: 'rgb(28 37 87)',
    }, */
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

        <PageContainer />

      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

