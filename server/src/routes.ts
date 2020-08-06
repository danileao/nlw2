import express from "express";
import ClassesControllers from "./controllers/ClassesController";
import ConnectionControllers from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesControllers();
const connectionControllers = new ConnectionControllers();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);
routes.post("/connections", connectionControllers.create);
routes.get("/connections", connectionControllers.index);

export default routes;
