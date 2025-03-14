import Ubicacion from "../Dto/ubicacionDto";
import db from "../config/db";

class UbicacionRepository{
    static async insertarUbicacion(ubicacion:Ubicacion){
        const sql = 'INSERT INTO ubicaciones (ubicacion) VALUES (?)';
        const values = [ubicacion.ubicacion];

        try{
            const [result] = await db.execute(sql,values);
            console.log("Ubicación insertada con exito", result);
            return result;
        }catch(error){
            console.error('Error al insertar ubicación', error);
            throw error;
        }
    }
}

export default UbicacionRepository;