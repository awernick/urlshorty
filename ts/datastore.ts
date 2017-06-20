import * as mongo from "mongodb";
import { MongoClient } from "mongodb";
let config = require("../config.json");

class DataStore {
  private instance: mongo.Db;

  load() {
    return new Promise<mongo.Db>((resolve, reject) => {
      MongoClient.connect(config.MONGODB_URL, (err: Error, db: mongo.Db) => {
        if(err) { 
          reject(err) 
        }

        else { 
          this.instance = db;
          resolve(db);
        }
      })
    })
  }

  getInstance() {
    return new Promise((resolve, reject) => {
      if(this.instance == null) {
        this.load()
          .then((db: mongo.Db) => { resolve(db) })
          .catch((err: Error) => { reject(err) })
      } 

      else {
        resolve(this.instance);
      }
    })
  }

  close() {
    if(this.instance != null) {
      this.instance.close();
    }
  }
}

export default DataStore;
