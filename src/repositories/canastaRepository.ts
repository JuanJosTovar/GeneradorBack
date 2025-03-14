import db from "../config/db"
import Canasta from "../Dto/canastaDto";

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

    static async getCanastasPedido(): Promise<any[]> {
        const sql = `SELECT * FROM stock`;
        try {
            const [rows]: any = await db.execute(sql);
            return rows;
        } catch (error) {
            console.error("Error en la ejecución del procedimiento almacenado:", error);
            throw error;
        }
    }
}

export default CanastaRepository;