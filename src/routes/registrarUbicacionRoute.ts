import { Router } from "express";
import { registrarUbicacion } from "../controllers/registrarUbicacionController";

const router = Router();

router.post("/", registrarUbicacion);

export default router;