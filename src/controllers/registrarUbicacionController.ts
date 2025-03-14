import { Request, Response, RequestHandler } from 'express';
import UbicacionService from '../services/ubicacionService';
import Ubicacion from '../Dto/ubicacionDto';

export const registrarUbicacion: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const { 
        ubicacion
    } = req.body;
    console.log(req.body);
    
    const ubi: Ubicacion = new Ubicacion(ubicacion);


    await UbicacionService.registrarUbicacion(ubi);


    res.status(201).send({ status: 'register ok' });
  } catch (error) {
    console.error("Error al registrar referencia:", error);
    res.status(500).json({ error: 'Error al registrar referencia' });
    }
};