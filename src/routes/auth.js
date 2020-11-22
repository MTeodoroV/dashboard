import { Router } from "express";
import AuthController from "../controllers/AuthController";

const Route = Router();

Route.post("/", AuthController.Login);

export default Route;
