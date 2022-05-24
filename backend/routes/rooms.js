import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../Controllers/room";
import { verifyAdmin } from "../Verification/verifytoken";
const router = express.Router();

//create room
router.post("/:hotelid", verifyAdmin, createRoom);

//   update room
router.put("/:id", verifyAdmin, updateRoom);

//delete room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//get individual room
router.get("/:id", getRoom);

//get all room
router.get("/", getRooms);

export default router;
