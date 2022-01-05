import axios from "axios";

export const getRemoteToken = (url, authToken) => {
    //todo
};

export const getRemoteClientID = () => {
    //todo
}

export const remoteConnect = () => {
    let _url = url + 'route/api' 
    axios.put(_url+'/0/config', {
        body: { linkbutton: true }, 
        headers: {
            Authorization: 'Bearer '+ authToken, 
            'Content-Type': application/json
        }
    })
    axios.post(_url, {
        body: { devicetype:'lightdeck'},
        headers: { 
            Authorization: 'Bearer'+ authToken,
            'Content-Type': application/json 
        }
    })
};

export const newClient = async(url, devicetype) => {
    return axios.post(url, {devicetype: devicetype}).then(response => {
        if(response.status !== 200) throw new Error
        else alert('Client connected, please press link button')
    }).catch(err => {throw new Error(err)})    
}