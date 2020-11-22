import { Router } from "express";
import { newCidade, search, list, edit, del } from "../controllers/cidadeController";

const Route = Router();

Route.post("/", newCidade);
Route.get("/", list);
Route.put("/:id", edit);
Route.get("/:id", search);
Route.delete("/:id", del);

export default Route;
