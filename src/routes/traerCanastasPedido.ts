import { Router } from "express";
import { traerCanastasPedido } from "../controllers/traerCanastasPedidoController";

const router = Router();
router.get("/", traerCanastasPedido);

export default router;