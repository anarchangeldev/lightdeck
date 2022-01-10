import icon from '../../resources/icon-hue-pwrbtn-rainbow.png'
import React from 'react'
import './BridgeItem.css'

export const BridgeItem = ({ bridge }) => {
    return (
        <div className="container-center-horizontal">
            <div className="bridge-itemscreen">
                <div className="container">
                    <img className="icon" src={icon}/>
                    <h1 className="namevalign-text-middle">{bridge.ip}</h1>
                </div>
            </div>
        </div>
    );
}
export default BridgeItem