import Config from "./database/storage/config.json";
import axios from "axios";
import { discoverNupnp } from "./Discover"

export const config = Config;

export let variables = {
  bridgeIPs: [], // ! is a promise idk how to save just the data
  lightUrls: []
};

export const init = () => {
    let conf = config.api.auth.url.meethue;
    variables.bridgeIPs = discoverNupnp(conf)
};


// async testLights() {
//     const url = this.state.homeURL+'lights/'
//     let xd = axios.get(url)
//     xd = await xd
//     let lightUrls = []

//     Object.keys(xd.data).forEach((light) => {
//         let _url = url + light + '/state/'
//         lightUrls.push(_url)
//         let state = Config.presets.test
//         this.putState(_url, state)
//     })
//     this.bridge.state.lightUrls = lightUrls
// }

// async putState(light, state) {
//     try {
//         return await axios.put(light, state);
//     } catch (err) {
//         console.error(err);
//     }
// }
