import icon from '../../../resources/icon-hue-pwrbtn-rainbow.png'
import React from 'react'
import './BridgeItem.css'

export const BridgeItem = (props) => {
    
    let info = (props.bridge.name === undefined) ? props.bridge.ip : props.bridge.name
    return (
    
        <div className="bridge-item center-horizontal" onClick={props.onClick}>
            <div className="container">
                <img className="icon" src={icon} />
                <h1 className="name valign-text-middle font">
                    {info}
                </h1>
            </div>
        </div>
        
    );

}
export default BridgeItem