import Usuario from "../Dto/usuarioDto";
import generateHash from "../helpers/generateHash";
import UsuarioRepository from "../repositories/usuarioRepository";


class UsuarioService{
    static async registrarUsuario(usuario:Usuario){
        try {
            usuario.password = await generateHash(usuario.password);
            return await UsuarioRepository.registrarUsuario(usuario);
        } catch (error) {
            console.error("Error al registrar canasta:", error);
            throw error; 
        }
    }
}

export default UsuarioService;