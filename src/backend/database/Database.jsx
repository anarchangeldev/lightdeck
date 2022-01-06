
const _data = require('./database.json')
let data = _data

export const dev = data.config.dev

export const write = (type, json) => {
    switch (type) {
        case 'bridge':
            addBridge(json)
            break
        case 'client':
            addClient(json)
            break
        case 'devRemote':
            data.config.dev.credentials.remote = json
            break
    }
}

export const read = (...args) => data

const addBridge = (json) => {
    if(data.bridges.length == 0) data.bridges.push(json)
    
    data.bridges.forEach(bridge => {
        if (bridge.id !== json.id) data.bridges.push(json)
    })
}

const addClient = (json) => {
    if(data.clients.length == 0) data.clients.push(json)
    
    data.clients.forEach(client => {
        if (client.id !== json.id) data.clients.push(json)
    })
}

export const save = () => {

    //todo
    //? [https://www.npmjs.com/package/write-json-file]

}