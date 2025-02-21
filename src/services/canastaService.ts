import Canasta from "../Dto/canastaDto";
import  CanastaRepository  from "../repositories/canastaRepository";


class CanastaService{
    static async registrarCanasta(canasta:Canasta){
        try {
            const resultado = await CanastaRepository.insertarCanasta(canasta);
            return resultado;
        } catch (error) {
            console.error("Error al registrar canasta:", error);
            throw error; // Relanza el error para que el controlador lo maneje si es necesario
        }
    }
}

export default CanastaService