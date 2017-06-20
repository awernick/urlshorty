import * as express from "express";
import DataStore from "./datastore";
import { default as Router } from "./api/v1/router";
let config = require('../config.json');

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.route();
  }

  config() {
  }

  route() {
    let router = new Router();
    this.app.post('/', router.create);
  }

  start(port?: string) {
    this.loadDataStore()
      .then((db) => {
        this.app.set("db", db);
        this.app.listen(config.PORT || process.env.PORT, function() {
          console.log("Server started");
        })
      })
      .catch((err) => {
        console.error("Could not connect to DB!");
      })
  }

  private loadDataStore() {
    return new Promise((resolve, reject) => {
      let ds = new DataStore();
      ds.getInstance()
        .then((db) => { resolve(db) })
        .catch((err) => { reject(err) })
    })
  }
}

new Server().start();
