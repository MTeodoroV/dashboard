import { Router } from "express";
import { newEndereco, list, search, del, edit } from "../controllers/enderecoController";

const Route = Router();

Route.post("/", newEndereco);
Route.get("/", list);
Route.put("/:id", edit);
Route.get("/:id", search);
Route.delete("/:id", del);

export default Route;
