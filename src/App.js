import './App.css';
import React, { useEffect } from 'react'
import * as api from './backend/Backend'
import BridgeSelect from'./components/BridgeSelect'
/*
  ? bridge emulator: [http://steveyo.github.io/Hue-Emulator/] 
  ? RGB to CIE (x, y): [https://github.com/Shnoo/js-CIE-1931-rgb-color-converter]
  ! JSHUE [https://github.com/blargoner/jshue/releases] //developed on 2.1.1


  ! USE MUI - Material UI [https://mui.com] 
*/
let bridges = []

function App() {
  bridges = api.discover()
  useEffect(async() => {
    
    //todo
    //bridges = await api.discover()
    console.log(bridges);

  }, []) 
  // runs only once, to repeat on each call remove [] or add variables to it to run only when they change
  bridges = api.discover()
  return (
    <div className="App">
      <header className="App-header">
      idk
      </header>
      <BridgeSelect bridges={ bridges }/>
    </div>
  );
}

export default App;
