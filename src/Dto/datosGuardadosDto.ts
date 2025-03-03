class DatosGuardadosDto {
    private _fecha: string;
    private _tipo: string;
    private _turno: string;
    private _bodegaOrigen: string;
    private _descripcion_bodega_origen: string;
    private _referencia: string;
    private _descripcionReferencia: string;
    private _cantidad: number;
    private _UE: string;
    private _canastaCodigo: string;
    private _color: string; 
    private _canastaUbicacion: string;
    private _ubicacionConsolidada: string;
    
    constructor(fecha:string, tipo:string, turno:string, bodegaOrigen:string, descripcion_bodega_origen:string,
        referencia:string, descripcionReferencia:string, cantidad:number, UE:string, canastaCodigo:string,
        color:string, canastaUbicacion:string, ubicacionConsolidada:string){

        this._fecha = fecha,
        this._tipo = tipo,
        this._turno = turno,
        this._bodegaOrigen = bodegaOrigen,
        this._descripcion_bodega_origen = descripcion_bodega_origen,
        this._referencia = referencia
        this._descripcionReferencia = descripcionReferencia,
        this._cantidad = cantidad,
        this._UE = UE,
        this._canastaCodigo = canastaCodigo,
        this._color = color,
        this._canastaUbicacion = canastaUbicacion,
        this._ubicacionConsolidada = ubicacionConsolidada

    }

    get fecha():string{
        return this._fecha
    }

    get tipo():string{
        return this._tipo
    }

    get turno():string{
        return this._turno
    }

    get bodegaOrigen():string{
        return this._bodegaOrigen
    }

    get descripcionBodegaOrigen():string{
        return this._descripcion_bodega_origen
    }

    get referencia():string{
        return this._referencia
    }

    get descripcionReferencia():string{
        return this._descripcionReferencia
    }

    get cantidad():number{
        return this._cantidad
    }

    get UE():string{
        return this._UE
    }
    
    get canastaCodigo():string{
        return this._canastaCodigo
    }

    get color():string{
        return this._color
    }
    
    get canastaUbicacion():string{
        return this._canastaUbicacion
    }
    
    get ubicacionConsolidada():string{
        return this._ubicacionConsolidada
    }

    set fecha(fecha:string){
        this._fecha = fecha
    }

    set tipo(tipo:string){
        this._tipo = tipo
    }

    set turno(turno:string){
        this._turno = turno
    }

    set bodegaOrigen(bodegaOrigen:string){
        this._bodegaOrigen = bodegaOrigen
    }

    set descripcionBodegaOrigen(descripcionBodegaOrigen:string){
        this._descripcion_bodega_origen = descripcionBodegaOrigen
    }

    set referencia(referencia:string){
        this._referencia = referencia
    }

    set descripcionReferencia(descripcionReferencia:string){
        this._descripcionReferencia = descripcionReferencia
    }

    set cantidad(cantidad:number){
        this._cantidad = cantidad
    }

    set UE(UE:string){
        this._UE = UE
    }
    
    set canastaCodigo(canastaCodigo:string){
        this._canastaCodigo = canastaCodigo
    }

    set color(color:string){
        this._color = color
    }
    
    set canastaUbicacion(canastaUbicacion:string){
        this._canastaUbicacion = canastaUbicacion
    }
    
    set ubicacionConsolidada(ubicacionConsolidada:string){
        this._ubicacionConsolidada = ubicacionConsolidada
    }
}

export default DatosGuardadosDto;