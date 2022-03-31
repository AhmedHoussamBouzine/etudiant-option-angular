import { Option } from "./option";


export class Etudiant {
    public cne:string;
    public nom:string;
    public prenom:string;
    public option:Option;
    constructor(cne="",nom ="",prenom="",option={nom:"",Description :""}){
        this.cne =cne;
        this.nom = nom;
        this.prenom = prenom;
        this.option = option;

    }
}