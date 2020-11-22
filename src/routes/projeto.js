import { Router } from "express";
import { newProjeto, list, search, del, edit } from "../controllers/projetoController";

const Route = Router();

Route.post("/", newProjeto);
Route.get("/", list);
Route.put("/:id", edit);
Route.get("/:id", search);
Route.delete("/:id", del);

export default Route;
