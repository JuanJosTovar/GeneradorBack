import { Request, Response, RequestHandler } from 'express';
import ReferenciaService from '../services/referenciaService';
import Referencia from '../Dto/referenciaDto';

export const registrarReferencia: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const { 
        referencia, 
        descripcion
    } = req.body;
    console.log(req.body);
    
    const producto: Referencia = new Referencia(referencia, descripcion);


    await ReferenciaService.registrarReferencia(producto);


    res.status(201).send({ status: 'register ok' });
  } catch (error) {
    console.error("Error al registrar referencia:", error);
    res.status(500).json({ error: 'Error al registrar referencia' });
    }
};