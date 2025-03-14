import { Request, Response, RequestHandler } from 'express';
import CanastaService from '../services/canastaService';

export const traerCanastasPedido: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const datos =  await CanastaService.traerCanastasPedido();
    res.status(200).json(datos);
  } catch (error) {
    console.error("Error al registrar referencia:", error);
    res.status(500).json({ error: 'Error al registrar referencia' });
  }
};