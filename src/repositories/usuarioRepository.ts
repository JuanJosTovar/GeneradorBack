import Usuario from "../Dto/usuarioDto";
import db from "../config/db"
import Auth from "../Dto/authDto";

class UsuarioRepository{
    static async registrarUsuario(usuario: Usuario){
        const sql = 'INSERT INTO usuarios (nombres, apellidos, password, nombre_usuario) VALUES (?, ?, ?, ?)';
        const values = [usuario.nombres, usuario.apellidos, usuario.password, usuario.nombre_usuario];
        return db.execute(sql, values);
    }

    static async login(auth:Auth){
        const sql = 'CALL login (?)';
        const values = [auth.nombre_usuario];
        return db.execute(sql,values);
    }
}

export default UsuarioRepository;