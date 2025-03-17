class UsuarioDto {
    _nombres: string;
    _apellidos: string;
    _password: string;
    _nombre_usuario: string;
    
    constructor(nombres:string, apellidos:string, password:string, nombre_usuario:string){
        this._nombres = nombres,
        this._apellidos = apellidos,
        this._password = password,
        this._nombre_usuario = nombre_usuario
    }

    get nombres():string{
        return this._nombres;
    }

    get apellidos():string{
        return this._apellidos;
    }

    get password():string{
        return this._password;
    }

    get nombre_usuario():string{
        return this._nombre_usuario;
    }

    set nombres(nombres:string){
        this._nombres = nombres;
    }

    set apellidos(apellidos:string){
        this._apellidos = apellidos;
    }

    set password(password:string){
        this._password = password;
    }

    set nombre_usuario(nombre_usuario:string){
        this._nombre_usuario = nombre_usuario;
    }
}

export default UsuarioDto;