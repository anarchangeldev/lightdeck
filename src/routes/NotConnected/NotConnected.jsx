import BridgeSelect from '../../components/bridge/BridgeSelect/BridgeSelect'
import { bridgesFound } from '../../logic/Backend'
export const NotConnected = (props) => {

    let bridges = (props.bridges === undefined) ? bridgesFound : props.bridges


    return (
        <div className="not-connected">
            <div className="info">
                <div className="image"><p>placeholder for some image</p></div>
                <h1 className="text">YOU ARE NOT CONECTED TO A BRIDGE!</h1>
                <h2 className="text">Before selecting a bridge, you have to press the physical link button</h2>
            </div>
            <div className="bridges-found">
                <h2 className="text">BRIDGES FOUND</h2>
                <BridgeSelect bridges={bridges}/>
            </div>
        </div>
    );
}

export default NotConnected;