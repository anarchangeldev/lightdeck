import axios from "axios";

export const _nupnp = async(url) => {
  return axios.get(url, { responseType: "json" })
      .then((response) => {
      return response.data.map((bridge) => {
        return {
          ip: bridge.internalipaddress,
          id: bridge.id.toUpperCase(),
          port: bridge.port,
        };
      });
    });
};






