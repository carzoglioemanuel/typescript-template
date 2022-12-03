import "dotenv/config";
import express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./database/dataSource";
import { config } from "./config";
import errorMiddleware from "./middlewares/error.middleware";
import routes from "./routes";
import repos from "./routes/repositories";
import defs from "./utils/definitions";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.connectToTheDatabase();
    this.app.use(routes);
    this.app.use(repos);
    this.initializeMiddlewares();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`🚀 App listening on the port ${config.PORT} 🚀`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private async connectToTheDatabase() {
    try {
      if (defs.useDB === true) await AppDataSource.initialize();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default App;
