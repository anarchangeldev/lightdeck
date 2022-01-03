import axios from "axios";

export const discoverNupnp = async (config) => {
    let data = axios
      .get(config.url.discover, { responseType: "json" })
      .then((response) => {
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
      });
  
    data = await data;
  
    return data;
};

export const remoteConnect = async () => {
 //todo
};

