import { Router } from "express";
import { registrarReferencia } from "../controllers/registrarReferenciaController";

const router = Router();

router.post("/", registrarReferencia);

export default router;