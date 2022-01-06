import * as api from './logic/API'
import {read, write} from '../database/Database'

export async function logIn() {
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
        console.log(await api.testLights(dev.bridge.ip, dev.credentials.username, state))
    }
    // Object.values(await api.nupnp(read().config.url.discover)).forEach((bridge) => {
    //         console.log(bridge);
    //         api.putState('https://'+bridge.ip+read().config.url.state, { bri: 254, hue: 10000, sat: 254 })
    //         write('bridge', bridge)
    // })
    // console.log(read());   
    



}


