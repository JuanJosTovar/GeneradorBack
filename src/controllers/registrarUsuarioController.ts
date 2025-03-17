import { Request, Response, RequestHandler } from 'express';
import UserService from '../services/usuarioService';
import Usuario from '../Dto/usuarioDto';

export const registrarUsuario: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
        nombres, 
        apellidos,
        password
    } = req.body;
    const usuario: Usuario = new Usuario(nombres, apellidos, password);
    await UserService.registrarUsuario(usuario);

    res.status(201).send({ status: 'register ok' });

  } catch (error) {
    console.error("Error al registrar canasta:", error);
    res.status(500).json({ error: 'Error al registrar canasta' });
  }
};