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
  if(props.bridges.length === 0) return <p>no bridges</p>
  
  console.log(props)
  let bridgeItems = []
  for(let i = 0; i < props.bridges.length; i++) {
    console.log(props.bridges[i])
    bridgeItems.push(<BridgeItem bridge={props.bridges[i]} key={i}/>)
  }

  console.log(bridgeItems)
  

  return (
    <div className="bridge-select">
      {bridgeItems}
    </div>
  )

}

export default BridgeSelect