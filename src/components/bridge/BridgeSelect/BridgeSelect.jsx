import React, { useState, useEffect } from 'react';
import BridgeItem from '../BridgeItem/BridgeItem'
import './BridgeSelect.css'
import { auth, bridgesFound } from '../../../logic/Backend'



export const BridgeSelect = (props) => {
  	
	return <div className="bridge-list">{generateList(props.bridges)}</div>
}

const generateList = (_bridges) => {

	const [bridges, setBridges] = useState([])
	
	useEffect(() => {
		setBridges(_bridges)
	}, [])

	if(!Array.isArray(bridges)) setBridges(Array.of(bridges))
	
	let bridgeItems = []
	bridgeItems.push(<div className="search-bridges" key={0} onClick={() => {setBridges(bridgesFound)}}><p>Search</p></div>)
	for(let i = 0; i < bridges.length; i++) {

		let bridge = <BridgeItem
			className="BridgeBttn"
			bridge={bridges[i]} 
			key={i+1}
			onClick={() => auth(bridges[i])}
			
			/>
		
		bridgeItems.push(bridge)
	}
	return bridgeItems
}

export default BridgeSelect