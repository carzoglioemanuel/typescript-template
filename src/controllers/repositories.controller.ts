import { Request, Response } from "express";
import gitlabService from "../services/gitlab.service";
import githubService from "../services/github.service";

const getVendorService: any = {
  gitlab: gitlabService,
  github: githubService,
};

console.log(
  "getVendorService",
  gitlabService.createRepository({ url: "hola", body: "hola", headers: "hola" })
);

export const createRepository = (req: Request, res: Response) => {
  try {
    const getVendorObject = getVendorService[req.body.vendor].createRepository;
    res.status(201).send("OK");
  } catch (error) {}
};
