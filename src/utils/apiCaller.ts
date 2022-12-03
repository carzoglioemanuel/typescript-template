import axios, { AxiosRequestConfig } from "axios";

export const apiCaller = (options: AxiosRequestConfig<any>) => {
  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
