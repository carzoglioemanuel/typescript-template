import axios, { AxiosRequestConfig } from "axios";

export const apiCaller = (options: AxiosRequestConfig<any>) => axios(options);
