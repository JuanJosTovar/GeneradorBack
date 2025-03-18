import { Request, Response, RequestHandler } from 'express';
import UserService from '../services/usuarioService';
import Auth from '../Dto/authDto';

export const login: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
        nombre_usuario,
        password
    } = req.body;

    const auth: Auth = new Auth(nombre_usuario, password);
    await UserService.login(auth);

    res.status(201).send({ status: 'register ok' });

  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};