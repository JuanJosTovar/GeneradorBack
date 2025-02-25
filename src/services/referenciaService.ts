import Referencia from "../Dto/referenciaDto";
import  ReferenciaRepository  from "../repositories/referenciaRepository";


class ReferenciaService{
    static async registrarReferencia(producto:Referencia){
        try {
            const resultado = await ReferenciaRepository.insertarReferencia(producto);
            return resultado;
        } catch (error) {
            console.error("Error al registrar canasta:", error);
            throw error;
        }
    }
}

export default ReferenciaService;