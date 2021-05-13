export class User {
    token: any;
    constructor(
    public Id: number,
    public Nick : string,
    public Pass : string,
    public Email? : string,
    public Nombre? : string,
    public Apellidos? : string,
    ){}
}