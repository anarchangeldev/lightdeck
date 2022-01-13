import * as disc from './lib/Discover'
import * as _auth from './lib/Auth'
export const jshueImport = require('./lib/jshue')
export const jshue = jshueImport()
import { navigate } from '../App'
import Cookies from 'universal-cookie'
import * as _light from './lib/Light'

export const cookies = new Cookies()
export let bridgesFound = []
export let loggedIn = false
export let data = {
    user: {
        credentials: {
            username: null,
            remote: {
                token: null,
                clientId: null
            }
        },
        bridge: null
    }
}

export let bridgeState = []

export const discover = async(mode) => {
    if(mode === 'dev') bridgesFound = disc._myBridge() 
    if(mode === 'sim') bridgesFound = disc._simulator()
    bridgesFound = await disc.jshueDiscover(jshue)
    return bridgesFound
}

export const _navigate = (path) => navigate(path)

export const auth = ( bridge ) => {
    console.log('onClick bridge: ' + bridge.ip)
    data.user.bridge = bridge
    _auth.newClient(data.user.bridge.ip, "lightdeck#user")
}

export const saveUser = () => {
    console.log(data.user.credentials.username)
    setCookies('lightdeck', data.user, { path: '/'})
}

export const updateUser = () => {
    data.user = {...data.user, ...getCookies('lightdeck')}
}

export const getCookies = (_name) => {
    let _data = cookies.get(_name)
    console.log(_data)
    return _data
}

export const setCookies = (_name, value, options) => {
    cookies.set(_name, JSON.stringify(value), options)
}

export const removeCookies = (_name) => {
    cookies.remove(_name)
}


export const light = _light 





