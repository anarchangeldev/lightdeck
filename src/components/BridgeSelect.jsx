import React from 'react';
import { useFetch } from 'react-async'
import {Avatar} from '@mui/material'

export const BridgeItem = (props) => {
  console.log(props);
  return (
    <div className="bridge-item">
      <Avatar alt='icon' src='../resources/icon-hue-pwrbtn-rainbow.png' />
      <h1>{props.bridge.id}</h1>
    </div>
  )
}

export const BridgeSelect = (props) => {
  let bridgeItems = []
  console.log(props);
  console.log(props.bridges)
  let bridges = useFetch(props.bridges)
  console.log(bridges)
  for(let i = 0; i < bridges.length; i++) {
    bridgeItems.push(<BridgeItem bridge={bridges[i]} key={i}/>)
  }
  
  console.log(bridgeItems)
  

  return (
    <div className="bridge-select">
      {bridgeItems[0]}
    </div>
  )

}

export default BridgeSelect