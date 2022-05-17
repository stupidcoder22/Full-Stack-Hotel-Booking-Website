import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../Controllers/user";
const router = express.Router();

//   update User
router.put("/:id", updateUser);

//delete User
router.delete("/:id", deleteUser);

//get individual User
router.get("/:id", getUser);

//get all User
router.get("/", getUsers);

export default router;
