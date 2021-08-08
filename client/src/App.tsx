import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import MainPage from './components/common/MainPage';
import theme from './mui';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
