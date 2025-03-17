import DatosGuardados from "../Dto/datosGuardadosDto";
import  DatosRepository  from "../repositories/datosRepository";


class DatosService{
    static async guardarDatos(datos:DatosGuardados){
        try {
            const resultado = await DatosRepository.insertarDatos(datos);
            return resultado;
        } catch (error) {
            console.error("Error al registrar canasta:", error);
            throw error;
        }
    }
}

export default DatosService;