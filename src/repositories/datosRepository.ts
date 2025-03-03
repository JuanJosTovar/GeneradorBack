import DatosGuardados from "../Dto/datosGuardadosDto";
import db from "../config/db";

class ReferenciaRepository {
    static async insertarDatos(datos: DatosGuardados) {
        const sql = 'CALL insertarHistorialStock(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            datos.fecha,
            datos.tipo,
            datos.turno,
            datos.bodegaOrigen,
            datos.descripcionBodegaOrigen,
            datos.referencia,
            datos.descripcionReferencia,
            datos.cantidad,
            datos.UE,
            datos.canastaCodigo,
            datos.color,
            datos.canastaUbicacion,
            datos.ubicacionConsolidada
        ];
        console.log(datos.fecha,'-',
            datos.tipo,'-',
            datos.turno,'-',
            datos.bodegaOrigen,'-',
            datos.descripcionBodegaOrigen,'-',
            datos.referencia,'-',
            datos.descripcionReferencia,'-',
            datos.cantidad,'-',
            datos.UE,'-',
            datos.canastaCodigo,'-',
            datos.color,'-',
            datos.canastaUbicacion,'-',
            datos.ubicacionConsolidada);
        
        
        

        try {
            const [result] = await db.execute(sql, values);
            console.log('Datos insertados con éxito:', result);
            return result;
        } catch (error) {
            console.error('Error al insertar datos:', error);
            throw error;
        }
    }
}

export default ReferenciaRepository;
