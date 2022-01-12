import icon from '../../resources/icon-hue-pwrbtn-rainbow.png'
import React from 'react'
import './BridgeItem.css'

export const BridgeItem = (props) => {
    let info = (props.bridge.name === undefined) ? props.bridge.ip : props.bridge.name
    console.log(props)
    return (
        <div className="container-center-horizontal">
            <div className="bridge-item screen">
                <div className="container">
                    <img className="icon" src={icon} />
                    <h1 className="name valign-text-middle font">
                        {info.toUpperCase()}
                    </h1>
                </div>
            </div>
        </div>
    );
}
export default BridgeItem