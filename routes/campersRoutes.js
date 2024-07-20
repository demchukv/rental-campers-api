import express from "express";

import * as campersController from "../controllers/campers-controller.js";
// import validateBody from "../middlewares/validateBody.js";
// import validateObjectId from "../middlewares/validateObjectId.js";
// import * as schemas from "../schemas/waterTrackerSchemas.js";

const campersRouter = express.Router();

campersRouter.get("/", campersController.findCampers);

export default campersRouter;
