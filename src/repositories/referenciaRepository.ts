import Referencia from "../Dto/referenciaDto";
import db from "../config/db"

class ReferenciaRepository{
    static async insertarReferencia(referencia: Referencia) {
        const sql = 'INSERT INTO productos (referencia, descripcion) VALUES (?, ?)';
        const values = [referencia.referencia, referencia.descripcion];
    
        try {
            const [result] = await db.execute(sql, values); // Esperar el resultado
            console.log('Referencia insertada con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error al insertar referencia:', error);
            throw error;
        }
    }
}

export default ReferenciaRepository;