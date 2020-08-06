import { Request, Response } from "express";
import db from "../database/connection";

export default class ConnectionController {
  // Method responsible of list the total of connections
  async index(req: Request, res: Response) {
    const totalConnections = await db("connections").count("* as total");

    const { total } = totalConnections[0];

    return res.json({ total });
  }

  // Method responsible of create a connection
  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db("connections").insert({
      user_id,
    });

    return res.status(201).send();
  }
}
