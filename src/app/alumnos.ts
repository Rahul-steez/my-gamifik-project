export class Users {
    public Id: number;
    public nick: string;
    public email:string;
    public contraseña:string;
    public nombre:string;
    public apellidos:string;
    
    constructor(Id:number,nick:string,email:string,contraseña:string,nombre:string,apellidos:string) {
    this.Id = Id;
    this.nick = nick;
    this.email = email;
    this.contraseña = contraseña;
    this.nombre = nombre;
    this.apellidos = apellidos;
    }
    }