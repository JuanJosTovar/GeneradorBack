import Usuario from "../Dto/usuarioDto";
import db from "../config/db"

class UsuarioRepository{
    static async registrarUsuario(usuario: Usuario){
        const sql = 'INSERT INTO usuarios (nombres, apellidos, password) VALUES (?, ?, ?)';
        const values = [usuario.nombres, usuario.apellidos, usuario.password];
        return db.execute(sql, values);
    }
}

export default UsuarioRepository;