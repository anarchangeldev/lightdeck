import axios from 'axios'
import * as disc from './lib/Discover'
export const jshueImport = require('./lib/jshue')
export const jshue = jshueImport()
import { navigate } from '../App'



export let user = {
    credentials: {
        username: undefined,
        remote: {
            token: undefined,
            clientId: undefined
        }
    },
    bridge: undefined
}
export let bridgesFound = []

export const discover = async(mode) => {
    if(mode === 'dev') bridgesFound = disc._myBridge() 
    if(mode === 'sim') bridgesFound = disc._simulator()
    bridgesFound = await disc.jshueDiscover(jshue)
    return bridgesFound
}


export const auth = ( bridge ) => {
    console.log('onClick bridge: ' + bridge.ip)
    user.bridge = bridge
    navigate('/home')

}





