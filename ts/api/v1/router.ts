import { Request, Response } from "express";
import DataStore from "../../datastore";
import * as mongo from "mongodb";

module Api {
  export module V1 {
    export class Router {
      public create(req: Request, res: Response) {
        let db: mongo.Db = req.app.get('db');
        db.collection('shortlinks').find().toArray((err, docs) => {
        })
      }
    }
  }
}

export default Api.V1.Router;
