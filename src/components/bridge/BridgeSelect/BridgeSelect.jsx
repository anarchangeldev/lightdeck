import React from 'react';
import BridgeItem from '../BridgeItem/BridgeItem'
import './BridgeSelect.css'
import { auth } from '../../../backend/Backend'

export const BridgeSelect = (props) => {
  	//guard case
	if(props.bridges.length === 0) return <div className="bridge-select"> <p>no bridges</p> </div>
	
	let bridgeItems = generateList(props.bridges)

	return <div className="bridge-list">{bridgeItems}</div>
}

const generateList = (bridges) => {
	if(!Array.isArray(bridges)) bridges = Array.of(bridges)
	
	// ! TESTING PURPOSES DELETE LATER
	let dummyBridge = {
		ip: '127.0.0.1',
		id: 'DUMMYBridge',
		port: 8080
	}
	if(bridges.length < 2) bridges.push(dummyBridge)
	console.log(bridges)
	// ! END TESTING REGION
	
	let bridgeItems = []
	for(let i = 0; i < bridges.length; i++) {

		let bridge = <BridgeItem
			className="BridgeBttn"
			bridge={bridges[i]} 
			key={i}
			onClick={() => auth(bridges[i])}
			
			/>
		
		bridgeItems.push(bridge)
	}
	return bridgeItems
}

export default BridgeSelect