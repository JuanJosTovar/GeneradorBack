import { Request, Response, RequestHandler } from 'express';
import CanastaService from '../services/canastaService';
import Canasta from '../Dto/canastaDto';

export const registrarCanasta: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { codigo, nombre } = req.body;
    const canasta: Canasta = new Canasta(codigo, nombre);
    await CanastaService.registrarCanasta(canasta);
    res.status(201).send({ status: 'register ok' });
  } catch (error) {
    console.error("Error al registrar canasta:", error);
    res.status(500).json({ error: 'Error al registrar canasta' });
  }
};