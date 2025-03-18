import Usuario from "../Dto/usuarioDto";
import generateHash from "../helpers/generateHash";
import UsuarioRepository from "../repositories/usuarioRepository";
import Auth from "../Dto/authDto";
import bcrypt from "bcryptjs";


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

    static async login(auth: Auth) {
        try {

            const result: any = await UsuarioRepository.login(auth);
    
            if (result[0] && result[0].length > 0) {
                const user = result[0][0];
                const hashedPassword = user.password;
                
                if (hashedPassword) {
                    const isPasswordValid = await bcrypt.compare(auth.password, hashedPassword);
                    if (isPasswordValid) {
                        return { logged: true, status: "Successful Authentication" };
                    } else {
                        return { logged: false, status: "Incorrect username or password" };
                    }
                } else {
                    return { logged: false, status: "No password found for the given email" };
                }
            } else {
                return { logged: false, status: "Incorrect username or password" };
            }
        } catch (error) {
            console.error("Error al autenticar:", error);
            throw new Error("Authentication failed");
        }
    }
}

export default UsuarioService;