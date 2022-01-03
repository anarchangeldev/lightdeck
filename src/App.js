import './App.css';
import { init, variables } from './logic/API';
import React, { useState } from 'react'

/*
  aaa
  ! USE MUI - Material UI [mui.com] 

  * COLOR CONVERTER 
  ? https://github.com/Shnoo/js-CIE-1931-rgb-color-converter 
*/

function App() {
  init();
  console.log(variables.bridgeIPs)
  
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
