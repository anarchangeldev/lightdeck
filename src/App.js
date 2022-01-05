import './App.css';
import React, { useEffect } from 'react'
import { logIn } from './custom/Backend'
/*
  aaa
  ! USE MUI - Material UI [mui.com] 

  * COLOR CONVERTER 
  ? https://github.com/Shnoo/js-CIE-1931-rgb-color-converter 
*/

function App() {
  useEffect(() => {
    logIn()
  }, [])

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
