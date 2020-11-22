import { Router } from "express";
import { newUser, edit, search, list, del } from "../controllers/userController";

const Route = Router();

Route.post("/", newUser);
Route.put("/:id", edit);
Route.get("/", list);
Route.get("/:id", search);
Route.delete("/:id", del);

export default Route;
