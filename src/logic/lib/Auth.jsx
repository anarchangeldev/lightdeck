import axios from "axios";
import { saveUser, data, _navigate } from '../Backend'

export const newClient = async(ip, devicetype, _iter) => {
    let iter = (_iter === undefined || _iter === null) ? 0 : _iter
    if(iter === 1) alert('Client connected, please press link button and then press ok')
    else if (iter > 1) alert('please press the link button')

    let response = await createClient(ip, devicetype)
    
    if(response === undefined || response.data === undefined || response.data[0].error !== undefined || response.data[0].success === undefined) {
        newClient(ip, devicetype, (iter === 0) ? 1 : iter+1)
    } else {

        data.user.credentials.username = response.data[0].success.username
        saveUser()
        _navigate('/home')
    }
    
}

export const testClient = async(ip, username) => {
    let response = await axios.get('http://'+ip+'/api/'+username, null).catch(err => {console.error(err); return false})
    if(!response) return response
    
    if(response.data.config !== undefined) return true

    return false
}


export const createClient = async(ip, devicetype) => {
    return axios.post('http://'+ip+'/api', {devicetype: devicetype}).then(response => {
        if(response.status !== 200) {
            console.error('error creating client')
        }
        else {
            return response
        }
    }).catch(err => {console.error(err)})  
}










// ! REMOTE

export const getRemoteToken = (url, authToken) => {
    //todo
};

export const getRemoteClientID = () => {
    //todo
}

export const remoteConnect = ({url, authToken}) => {
    let _url = url + 'route/api' 
    axios.put(_url+'/0/config', {
        body: { linkbutton: true }, 
        headers: {
            Authorization: 'Bearer '+ authToken, 
            'Content-Type': 'application/json'
        }
    })
    axios.post(_url, {
        body: { devicetype:'lightdeck'},
        headers: { 
            Authorization: 'Bearer '+ authToken,
            'Content-Type': 'application/json' 
        }
    })
};

