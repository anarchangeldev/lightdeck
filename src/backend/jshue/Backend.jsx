import axios from 'axios'

export const jsHueImport = require('./jshue')
export const jshue = jsHueImport()
export const db = require('../database/Database.jsx')

export let simulatedBridge = {
    
}

export let simulatedBridgeUrl = db.dev.bridge.simulated.url + ':' + db.dev.bridge.simulated.port + '/api'

export const getSimBridge = () => {
    simulatedBridge = axios.get(simulatedBridgeUrl+'/newdeveloper')    
}
