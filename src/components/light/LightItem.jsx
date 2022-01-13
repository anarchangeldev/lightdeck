import icon from '../../resources/images/light-icon-transparent'
import React from 'react'
import './item.css'

export const LightItem = (props) => {

    return (
        <div className="light-item center-horizontal" onClick={props.onClick}>
        <div className="container">
            <img className="icon" src={icon} />
            <h1 className="name valign-text-middle font">
                {info}
            </h1>
        </div>
    </div>
    )
}
export default LightItem