import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../Controllers/user";
import {
  verifyAdmin,
  verifytoken,
  verifyuser,
} from "../Verification/verifytoken";
const router = express.Router();

// router.get("/checkauthentication", verifytoken, (req, res, next) => {
//   res.json(req.user);
// });

// router.get("/checkuser/:id", verifyuser, (req, res, next) => {
//   res.send("hello user,you are logged in and you can delete you account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin,you are logged in and you can delete you account");
// });

//   update User
router.put("/:id", verifyuser, updateUser);

//delete User
router.delete("/:id", verifyuser, deleteUser);

//get individual User
router.get("/:id", verifyuser, getUser);

//get all User
router.get("/", verifyAdmin, getUsers);

export default router;
