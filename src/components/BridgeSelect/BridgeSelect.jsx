import React from 'react';
import BridgeItem from '../BridgeItem/BridgeItem'
import './BridgeSelect.css'


export const BridgeSelect = (props) => {
  if(props.bridges.length === 0) return <p>no bridges</p>
  
  let bridgeItems = []
  for(let i = 0; i < props.bridges.length; i++) {
    bridgeItems.push(<BridgeItem bridge={props.bridges[i]} key={i}/>)
  }

  return (
    <div className="bridge-select">
      {bridgeItems}
    </div>
  )

}

export default BridgeSelect