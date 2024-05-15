import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { BASE_URL } from '@env';
// const apiKey = "171b8590dc351100b0f90316718834ac";

const baseUrl = axios.create({
    
  baseURL: BASE_URL
});

baseUrl.interceptors.request.use(
//@ts-ignore
  async function(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    config.headers = {
      ...config.headers
    };

    config.params = { api_key: "" };

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

console.log(baseUrl, "baseUrl");

baseUrl.interceptors.response.use(
  function(response: AxiosResponse) {
    if (response.status === 401) {
      // Handle unauthorized status if needed
    }
    return response;
  },
  function(error) {
    // Handle response error
    return Promise.reject(error);
  }
);

export const ImageBaseUrl =
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

export { baseUrl };
