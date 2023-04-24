import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TopMenu from './components/topMenu';
import HideAppBar from './components/topMenu';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    <HideAppBar/>

    </div>
  );
}

export default App;
