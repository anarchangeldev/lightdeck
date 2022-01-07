import React from 'react';
import logo from '../../resources/icon-hue-pwrbtn-rainbow.png'
import './BridgeSelect.css'

export const BridgeItem = (props) => {
  return (
    <div className="item">
        <div className="content">
          <img className="logo" alt='icon' src={logo} />
          <p className="name">{props.bridge.id}</p>
        </div>
    </div>

  )
}

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