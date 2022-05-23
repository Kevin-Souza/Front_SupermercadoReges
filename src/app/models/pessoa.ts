import { Endereco } from "./endereco";

export class Pessoa {
    id!:number;
    nome!:string;
    telefone!:string;
    email!:string;
    documento!:string;
    DatasNascimento!:Date;
    endereco: Endereco = new Endereco;
}
