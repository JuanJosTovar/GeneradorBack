import { Router } from "express";
import { registrarCanasta } from "../controllers/registrarCanastaController";

const router = Router();

router.post("/", registrarCanasta);

export default router;