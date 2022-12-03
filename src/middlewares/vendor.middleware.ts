import { NextFunction, Request, Response } from "express";
import BadRequestException from "../exceptions/BadRequest.exception";

export const validateVendor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { vendor } = req.body;
    if (!vendor) {
      throw new BadRequestException("Vendor is required");
    }
    if (vendor === "gitlab") {
    }
  } catch (error) {
    next(error);
  }
};
