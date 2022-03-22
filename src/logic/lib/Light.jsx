import axios from "axios";
export const Light = () => {
    
}
export default Light;

export const testLights = async(ip, username, state) => {
    const url = 'http://'+ip+'/api/'+username+'/lights/'

    return putState(url+'1/state', state)

    const response = await axios.get(url).catch(err => console.error(err));
    console.log(response)

    if(response.status !== 200) console.error('failed to get lights')
    let responses = []
    for(let light of Object.keys(response.data)) {
      let _url = url + light + '/state/'
      //let state = config.api.capabilities.lights.alerts.test
      let rsp = await putState(_url, state)
      responses.push[rsp]
    }
    return responses
}
    export const switchState = async(data, lightID) => _switchState(data.user.bridge.ip, data.user.credentials.username, lightID)
    export const _switchState = async(ip, username, lightID) => {
        const url = 'http://'+ip+'/api/'+username+'/lights/'+lightID
        const light = await axios.get(url).catch(err => console.error(err))
        const on = light.data.state.on
        console.log(on)
        console.log('light ' + lightID + ' is ' + on)
        putState(url+'/state', {on: !on})
    }

  export const putState = async(url, state) => {
      try {
          return await axios.put(url, state);
      } catch (err) {
          console.error(err);
      }
  }

  export const rainbow = async(data) => _rainbow(data.user.bridge.ip, data.user.credentials.username, 50)

  export const _rainbow = async(ip, username, speed) => {
    //let dev = require('./config').config.dev
    
    let state = {
        on: true,
        bri: 254,
        hue: 0,
        sat: 254
    }

    while(true) {
        console.log(state.hue)
        if(state.hue >= 65500) state.hue = 0;
        state.hue += 200 

        await new Promise(resolve => setTimeout(resolve, speed))
        console.log(await testLights(ip, username, state))
        if(state.hue === -1) break;
    }
  }
