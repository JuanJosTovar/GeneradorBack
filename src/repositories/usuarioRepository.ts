import Usuario from "../Dto/usuarioDto";
import db from "../config/db"

class UsuarioRepository{
    static async registrarUsuario(usuario: Usuario){
        const sql = 'INSERT INTO usuarios (nombres, apellidos, password, nombre_usuario) VALUES (?, ?, ?, ?)';
        const values = [usuario.nombres, usuario.apellidos, usuario.password, usuario._nombre_usuario];
        return db.execute(sql, values);
    }
}

export default UsuarioRepository;