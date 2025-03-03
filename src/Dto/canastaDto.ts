class CanastaDto {
    private _codigo: string;
    private _nombre: string
    
    constructor(codigo:string, nombre:string){
        this._codigo = codigo,
        this._nombre = nombre
    }

    get codigo():string{
        return this._codigo;
    }

    get nombre():string{
        return this._nombre;
    }

    set codigo(codigo:string){
        this._codigo= codigo
    }

    set nombre(nombre:string){
        this._nombre = nombre
    }
}

export default CanastaDto;