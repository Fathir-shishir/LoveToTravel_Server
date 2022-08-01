import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,
  deleteTour,
  getTour,
  updateTour,
  getTours,
  getToursByUser,
} from "../controllers/tour.js";
router.post("/",auth,createTour);
router.get("/", getTours);
router.get("/:id", getTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/userTours/:id", auth, getToursByUser);



export default router;