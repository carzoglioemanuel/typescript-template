import HttpException from "./Http.exception";

class BadRequestException extends HttpException {
  constructor(message?: string) {
    super(400, message || "Authentication token missing");
  }
}

export default BadRequestException;
