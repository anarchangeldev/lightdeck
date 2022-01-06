import axios from 'axios'
import {jshueDiscover} from './lib/Discover'

export const jshueImport = require('./lib/jshue')
export const jshue = jshueImport()
export const db = require('./database/Database.jsx')

export const discover = async() => {
    return jshueDiscover(jshue)
}





