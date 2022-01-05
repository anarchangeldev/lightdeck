import axios from "axios"
import { _nupnp } from "./Discover";

  export const nupnp = (url) => _nupnp(url)

  export const testLights = async(ip, username, state) => {
    const url = 'http://'+ip+'/api/'+username+'/lights/'
    const response = await axios.get(url);
    
    if(response.status !== 200) throw new Error('failed to get lights')
    let responses = []
    for(let light of Object.keys(response.data)) {
      let _url = url + light + '/state/'
      //let state = config.api.capabilities.lights.alerts.test
      let rsp = putState(_url, state)
      responses.push[rsp]
    }
    return responses
}

  export const putState = async(url, state) => {
      try {
          return await axios.put(url, state);
      } catch (err) {
          console.error(err);
      }
  }