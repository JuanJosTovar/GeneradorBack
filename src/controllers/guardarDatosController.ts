import { Request, Response, RequestHandler } from 'express';
import DatosService from '../services/datosService';
import DatosGuardados from '../Dto/datosGuardadosDto';

export const guardarDatos: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const {
      fecha,
      tipo,
      turno,
      bodegaOrigen,
      descripcionBodegaOrigen,
      referencia,
      descripcionReferencia,
      cantidad,
      UE,
      canastaCodigo,
      color,
      canastaUbicacion,
      ubicacionConsolidada
    } = req.body;
    
    
    
    const datos: DatosGuardados = new DatosGuardados(fecha, tipo, turno, bodegaOrigen, descripcionBodegaOrigen, referencia, descripcionReferencia, cantidad, UE, canastaCodigo, color, canastaUbicacion, ubicacionConsolidada);


    await DatosService.guardarDatos(datos);


    res.status(201).send({ status: 'register ok' });
  } catch (error) {
    console.error("Error al registrar referencia:", error);
    res.status(500).json({ error: 'Error al registrar referencia' });
  }
};