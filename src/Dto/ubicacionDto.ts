class UbicacionDto {
    private _ubicacion: string
    
    constructor(ubicacion:string){
        this._ubicacion = ubicacion
    }

    get ubicacion():string{
        return this._ubicacion;
    }

    set ubicacion(ubicacion:string){
        this._ubicacion = ubicacion
    }
}

export default UbicacionDto;