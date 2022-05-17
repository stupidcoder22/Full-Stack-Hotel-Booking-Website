import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getindividualHotel,
  updateHotel,
} from "../Controllers/hotel";

const router = express.Router();

//create hotel
router.post("/", createHotel);

//   update hotel
router.put("/:id", updateHotel);

//delete hotel
router.delete("/:id", deleteHotel);

//get individual hotel
router.get("/:id", getindividualHotel);

//get all hotel
router.get("/", getAllHotel);

export default router;
