import axios from "axios";

export const _simulator = async() => {
  let data = require('../database/Database.jsx').read().config.dev.bridge.simulated

  let url = data.url + ':' + data.port + '/api/newdeveloper'
  await axios.get(url).then((_data) => {
      //console.log(_data)
      data.id = _data.data.config.bridgeid
      data.ip = _data.data.config.gateway
  })
  //console.log(data)
  return data
}

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

export const _myBridge = () => {
  return require('../database/Database.jsx').read().config.dev.bridge.default
}

export const jshueDiscover = async(jshue) => {
  let _bridges = []

  await jshue.discover()
      .then((bridges) => {
    
    if(bridges.length === 0) {
      console.error("No bridges found")
      return new Error("No bridges found")
    }

    _bridges = bridges.map((bridge) => {
      return {
        ip: bridge.internalipaddress,
        id: bridge.id.toUpperCase(),
        port: bridge.port,
      }
    })
  })
  .catch((error) => console.error(error))

  return _bridges
}






