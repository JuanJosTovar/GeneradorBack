import Canasta from "../Dto/canastaDto";
import db from "../config/db"

class CanastaRepository{
    static async insertarCanasta(canasta: Canasta) {
        const sql = 'INSERT INTO canastas (codigo, nombre) VALUES (?, ?)';
        const values = [canasta.codigo, canasta.nombre];
    
        try {
            const [result] = await db.execute(sql, values); // Esperar el resultado
            console.log('Canasta insertada con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error al insertar canasta:', error);
            throw error;
        }
    }
}

export default CanastaRepository;