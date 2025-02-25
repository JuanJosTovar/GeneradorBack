class ReferenciaDto {
    private _referencia: string;
    private _descripcion: string
    
    constructor(referencia:string, descripcion:string){
        this._referencia = referencia,
        this._descripcion = descripcion
    }

    get referencia():string{
        return this._referencia;
    }

    get descripcion():string{
        return this._descripcion;
    }

    set referencia(referencia:string){
        this._referencia= referencia
    }

    set descripcion(descripcion:string){
        this._descripcion = descripcion
    }
}

export default ReferenciaDto;