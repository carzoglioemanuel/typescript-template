import HttpException from "./Http.exception";

class NotFoundException extends HttpException {
  constructor(message?: string) {
    super(404, message || "Not found");
  }
}

export default NotFoundException;
