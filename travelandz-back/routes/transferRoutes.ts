import express from "express";
const transferRouter = express.Router();
import {
  getAvailability,
  getHotels,
  getTerminals,
} from "../controllers/transferControllers";

transferRouter.post("/availability", getAvailability);
transferRouter.get("/terminals", getTerminals);
transferRouter.get("/destinations", getHotels);

export default transferRouter;
