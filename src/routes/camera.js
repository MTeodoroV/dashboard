import { Router } from "express";
import { newCamera, search, list, edit, del } from "../controllers/cameraController";

const Route = Router();

Route.post("/:id", newCamera);
Route.get("/", list);
Route.put("/:id", edit);
Route.get("/:id", search);
Route.delete("/:id", del);

export default Route;
