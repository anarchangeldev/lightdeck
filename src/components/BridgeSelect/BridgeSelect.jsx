import React from 'react';
import BridgeItem from '../BridgeItem/BridgeItem'
import './BridgeSelect.css'


export const BridgeSelect = (props) => {
  //guard case
	if(props.bridges.length === 0) return <div className="bridge-select"> <p>no bridges</p> </div>

	let bridgeItems = generateList(props.bridges)

	return <div className="bridge-select">{bridgeItems}</div>
}

const generateList = (bridges) => {
	if(!Array.isArray(bridges)) bridges = Array.of(bridges)

	let bridgeItems = []
	for(let i = 0; i < bridges.length; i++) {
		bridgeItems.push(<BridgeItem bridge={bridges[i]} key={i}/>)
  	}
	return bridgeItems
}

export default BridgeSelect