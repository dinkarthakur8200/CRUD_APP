import express from "express";
import { create, deleteUser, getAll, update } from "../controller/usercontroller.js";

const route = express.Router();


route.post("/create", create);
route.get("/getAll/:id", getAll);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);

export default route ;