import axios from 'axios'
import * as disc from './lib/Discover'

export const jshueImport = require('./lib/jshue')
export const jshue = jshueImport()
export const db = require('./database/Database.jsx')

export const discover = async(mode) => {
    if(mode === 'dev') return disc._myBridge() 
    if(mode === 'sim') return disc._simulator()
    return disc.jshueDiscover(jshue)
}





