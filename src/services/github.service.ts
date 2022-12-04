import { AxiosRequestConfig } from "axios";
import { apiCaller } from "../utils/apiCaller";
import { config } from "../config";
const { spawn } = require("child_process");

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

export function uploadFiles(req: any) {
  console.log("req: ", req.content);
  const command = spawn("git", ["status"]);
  command.stdout.on("data", (output: any) => {
    return output.toString();
  });
}
