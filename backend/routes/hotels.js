import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getindividualHotel,
  updateHotel,
} from "../Controllers/hotel";
import { verifyAdmin } from "../Verification/verifytoken";

const router = express.Router();

//create hotel
router.post("/", verifyAdmin, createHotel);

//   update hotel
router.put("/:id", verifyAdmin, updateHotel);

//delete hotel
router.delete("/:id", verifyAdmin, deleteHotel);

//get individual hotel
router.get("/:id", getindividualHotel);

//get all hotel
router.get("/", getAllHotel);

export default router;
