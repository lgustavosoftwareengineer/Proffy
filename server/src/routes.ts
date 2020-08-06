import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionController";

const routes = express.Router();

/*
==================================================
  CONTROLLERS
==================================================
*/
const classesControllers = new ClassesController();
const connectionController = new ConnectionController();

/*
==================================================
  CLASSES ROUTES
==================================================
*/
routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

/*
==================================================
  CONNECTIONS ROUTES
==================================================
*/
routes.post("/connections", connectionController.create);
routes.get("/connections", connectionController.index);

export default routes;
