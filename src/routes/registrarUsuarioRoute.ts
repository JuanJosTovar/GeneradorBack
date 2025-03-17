import { Router } from "express";
import { registrarUsuario } from "../controllers/registrarUsuarioController";

const router = Router();
router.post("/", registrarUsuario);

export default router;