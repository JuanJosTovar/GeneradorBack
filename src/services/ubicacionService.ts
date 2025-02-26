import Ubicacion from "../Dto/ubicacionDto";
import UbicacionRepository from "../repositories/ubicacionRepository";

class UbicacionService {
    static async registrarUbicacion(ubicacion:Ubicacion){
        try{
            const resultado = await UbicacionRepository.insertarUbicacion(ubicacion);
            return resultado;
        }catch(error){
            console.error("Error al registrar ubicacion", error);
            throw error;
        }
    }
}

export default UbicacionService