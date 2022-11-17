import { apiCaller } from "../utils/apiCaller";

export function createRepository(options: {
  url: any;
  body: any;
  headers: any;
}) {
  return "hola gitlab";
  /* const options: AxiosRequestConfig = {
    method: 'GET',
    url: vehiclesUrl,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': userAgent,
      'Auth-Token': this.config.access_token,
      'Application-Id': this.applicationId,
    },
  }
  
  return apiCaller(options); */
}
