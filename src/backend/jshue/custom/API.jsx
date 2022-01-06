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

  export const rainbow = () => {
    let dev = read().config.dev
    let state = {
        on: true,
        bri: 254,
        hue: 1000,
        sat: 254
    }
    for (let i = 0; i <= 65535; i+=100) {
        console.log(i)
        if(i === 65500) i = 0;
        state.hue = i
        await new Promise(resolve => setTimeout(resolve, 500))
        console.log(await testLights(dev.bridge.ip, dev.credentials.username, state))
    }
  }