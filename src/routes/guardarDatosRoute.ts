import { Router } from "express";
import { guardarDatos } from "../controllers/guardarDatosController";

const router = Router();

router.post("/", guardarDatos);

export default router;