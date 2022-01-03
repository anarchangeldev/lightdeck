import axios from "axios";
    
export const discoverNupnp = async (url) => {
    let _url = url + 'api/nupnp'
    
    console.log(_url);
    let data = 
        axios.get(_url, { responseType: "json" })
            .then((response) => {
                console.log(response);
            return response.data.map((bridge) => {
                return {
                    ip: bridge.internalipaddress,
                    id: bridge.id.toUpperCase(),
                };   
            });
            })
            .catch((_response) => {
                throw new Error({
                  message: "Failed to get results from meethue",
                });
            })
  
    //data = await data;
  
    return data;
};

export const remoteConnect = (config) => {
    //todo
};

export const getRemoteToken = (url, authToken) => {
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

export const getRemoteClientID = (config) => {
    //todo
}

export const remoteAuth = () => {
    //todo
}
