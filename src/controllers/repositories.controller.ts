import { Request, Response } from "express";
import * as gitlabService from "../services/gitlab.service";
import * as githubService from "../services/github.service";
const { spawn } = require("child_process");

const getVendorService: any = {
  gitlab: gitlabService,
  github: githubService,
};

export const createRepository = (req: Request, res: Response) => {
  try {
    const getVendorObject = getVendorService[req.body.vendor].createRepository(
      req.body
    );
    res.status(201).send(getVendorObject);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const uploadFiles = (req: Request, res: Response) => {
  try {
    const getVendorObject = getVendorService[req.body.vendor].uploadFiles(
      req.body /* {
      path: ".",
      commitMessage: "test",
      files: ["*"],
    } */
    );
    res.status(201).send(getVendorObject);
  } catch (error) {
    res.status(500).send(error);
  }
};
