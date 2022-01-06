import axios from "axios";

export const _simulator = () => {
  let data = require('../database/Database.jsx').read().config.dev.bridge.simulated

  let url = data.url + ':' + data.port + '/api/'
  console.log(url);
  let response = axios.get(url)

  console.log(response);
  return response
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

export const jshueDiscover = async(jshue) => {
  let _bridges

  await jshue.discover().then((bridges) => {
    if(bridges.length === 0) {
      console.error("No bridges found")
      return new Error("No bridges found")
    }
    bridges.forEach((bridge) => {
      console.log(bridge);
    })

    _bridges = bridges

  }).catch((error) => console.error(error))
  
  return _bridges
}






