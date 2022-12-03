import { AxiosRequestConfig } from "axios";
import { apiCaller } from "../utils/apiCaller";
import { config } from "../config";

export function createRepository(req: any) {
  const options: AxiosRequestConfig = {
    url: config.vendors.gitlab.url,
    method: "POST",
    data: req,
    headers: {
      "Content-Type": "application/json",
      "PRIVATE-TOKEN": "xxxxx",
    },
  };
  return apiCaller(options);
}
