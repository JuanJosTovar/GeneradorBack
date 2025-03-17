class UsuarioDto {
    _nombres: string;
    _apellidos: string;
    _password: string;
    
    constructor(nombres:string, apellidos:string, password:string){
        this._nombres = nombres,
        this._apellidos = apellidos,
        this._password = password
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

    set nombres(nombres:string){
        this._nombres = nombres;
    }

    set apellidos(apellidos:string){
        this._apellidos = apellidos;
    }

    set password(password:string){
        this._password = password;
    }
}

export default UsuarioDto;