import './App.css';
import React, { useEffect } from 'react'
import * as api from './backend/jshue/Backend'
/*
  ? bridge emulator: [http://steveyo.github.io/Hue-Emulator/] 
  ? RGB to CIE (x, y): [https://github.com/Shnoo/js-CIE-1931-rgb-color-converter]
  ! JSHUE [https://github.com/blargoner/jshue/releases] //developed on 2.1.1


  ! USE MUI - Material UI [https://mui.com] 
*/

function App() {
  useEffect(() => {
    
    //todo
    api.getSimBridge()

  }, []) 
  // runs only once, to repeat on each call remove [] or add variables to it to run only when they change

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
