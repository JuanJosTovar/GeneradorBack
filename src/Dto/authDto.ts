class AuthDto {
    _nombre_usuario: string;
    _password: string;
    
    constructor( nombre_usuario:string, password:string){
        this._nombre_usuario = nombre_usuario
        this._password = password
    }

    get nombre_usuario():string{
        return this._nombre_usuario;
    }

    get password():string{
        return this._password;
    }

    set nombre_usuario(nombre_usuario:string){
        this._nombre_usuario = nombre_usuario;
    }

    set password(password:string){
        this._password = password;
    }
}

export default AuthDto;