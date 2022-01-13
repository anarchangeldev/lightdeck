import BridgeSelect from '../BridgeSelect/BridgeSelect'
import { bridgesFound } from '../../../backend/Backend'
export const NotConnected = (props) => {

    let bridges = (props.bridges === undefined) ? bridgesFound : props.bridges


    return (
        <div className="not-connected">
            <div className="info">
                <div className="image"><p>placeholder for some image</p></div>
                <h1 className="text">YOU ARE NOT CONECTED TO A BRIDGE!</h1>
            </div>
            <div className="bridges-found">
                <h2 className="text">BRIDGES FOUND</h2>
                <BridgeSelect bridges={bridges}/>
            </div>
        </div>
    );
}

export default NotConnected;