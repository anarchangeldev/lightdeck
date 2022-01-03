import Config from './config.json'
import axios from 'axios'

export const config = Config

export var variables = {
    bridgeIPs: []
}

export const init = () => {
    variables.bridgeIPs = discoverNupnp()
    
    
    


}

const discoverNupnp = () => {
    
    return axios.get(config.url.discover, {responseType: 'json'})
                    .then((response) => {
                        return response.data.map((bridge) => {
                            return {
                                ip: bridge.internalipaddress,
                                id: bridge.id.toUpperCase(),
                            };
                        });
                    })
                    .catch((response) => {
                        throw new Error({
                            message: "Failed to get results from meethue",
                        });
                    });
}
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
