export class paciente{
    // Properties
    private _nombres: string;
    
    private _apellidos: string;
    
    private _dni: string;
    
    private _telefono: number;
    
    private _direccion: string;
    
    private _email: string;
    

    // Constructor
    constructor(nombres: string, apellidos: string, dni: string, telefono: number, direccion: string, email: string){
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._dni = dni;
        this._telefono = telefono;
        this._direccion = direccion;
        this._email = email;
    }

    // Accessors
    public get nombres(): string {
        return this._nombres;
    }
    public set nombres(value: string) {
        this._nombres = value;
    }
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }
    public get telefono(): number {
        return this._telefono;
    }
    public set telefono(value: number) {
        this._telefono = value;
    }
    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    // Methods
    
}