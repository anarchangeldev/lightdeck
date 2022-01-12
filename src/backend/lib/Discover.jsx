import axios from "axios";

export const _nupnp = async(url) => {
    return axios.get(url, { responseType: "json" }) 
        .then((response) => {
            return response.data.map((bridge) => {
                return {
                    ip: bridge.internalipaddress,
                    id: bridge.id.toUpperCase(),
                    port: bridge.port,
                };
            });
        });
};

export const jshueDiscover = async(jshue) => {
  let _bridges = []

  await jshue.discover()
            .then((bridges) => {

              _bridges = formatBridges(bridges)

            })
            .catch((error) => {console.error(error)})
  
  console.log(_bridges)
  return _bridges
}

const formatBridges = (bridges) => {
    
    if(bridges.length === 0) {
        return noBridgesFailsafe()
    }

    return bridges.map((bridge) => {
        return {
            ip: bridge.internalipaddress,
            id: bridge.id.toUpperCase(),
            port: bridge.port,
        }
    })
}

const noBridgesFailsafe = () => {
    let config = require('../database/Database.jsx').read().config

    if(config.useSim) {
        console.warn("No bridges found, trying simulator")
        let simBridge = _simulator(config)
        
        if(simBridge.ip === null) {
            console.warn('no response from simulator')
    
            if(config.useDev) {
                console.error('last resort, dev bridge!')
                return _myBridge(config)
            } else return [{error:'dev disabled'}]
        
        }
        return simBridge 
    } else return [{error:'simulator disabled'}]
  
}

export const _simulator = async(simConfig) => {
    simConfig = (simConfig !== undefined) ? simConfig.dev.bridge.simulated : require('../database/Database.jsx').read().config.dev.bridge.simulated 
    let url = simConfig.url + ':' + simConfig.port + '/api/newdeveloper'

    await axios.get(url).then((_data) => {
        //console.log(_data)
        simConfig.id = _data.data.config.bridgeid
        simConfig.ip = _data.data.config.gateway
    })
    return simConfig
}

export const _myBridge = (config) => {
    return (bridge !== undefined) ? config.dev.bridge.default : require('../database/Database.jsx').read().config.dev.bridge.default
}






