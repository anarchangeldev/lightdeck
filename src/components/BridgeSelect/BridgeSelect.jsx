import React from 'react';
import BridgeItem from '../BridgeItem/BridgeItem'
import './BridgeSelect.css'


export const BridgeSelect = (props) => {
  if(props.bridges.length === 0) return <div className="list"> <p>no bridges</p> </div>
  console.log(props.bridges);
  let bridgeItems = []
  for(let i = 0; i < props.bridges.length; i++) {
    bridgeItems.push(<BridgeItem bridge={props.bridges[i]} key={i}/>)
  }
  console.log(bridgeItems);
  return (
    <div className="list">
      {bridgeItems}
    </div>
  )

}

export default BridgeSelect