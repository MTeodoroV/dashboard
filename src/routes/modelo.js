import { Router } from "express";
import { newModelo, list, search, del, edit } from "../controllers/modeloController";

const Route = Router();

Route.post("/", newModelo);
Route.get("/", list);
Route.put("/:id", edit);
Route.get("/:id", search);
Route.delete("/:id", del);

export default Route;
