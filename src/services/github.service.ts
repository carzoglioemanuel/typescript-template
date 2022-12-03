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
      Accept: "application/vnd.github+json",
      Authorization:
        "Bearer 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",
    },
  };
  return apiCaller(options);
}
