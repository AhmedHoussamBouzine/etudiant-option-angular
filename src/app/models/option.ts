export class Option{
    public nom:string;
    public Description:string;
    constructor(nom = "",Description="") {
        this.nom = nom;
        this.Description = Description;
    }
}