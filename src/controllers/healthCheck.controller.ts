import { Request, Response } from "express";

export const healthCheckStatus = (req: Request, res: Response) => {
  res.status(200).send("OK");
};
