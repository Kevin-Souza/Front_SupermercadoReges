import { Endereco } from "./endereco";

export class Pessoa {
    id!: number;
    nome!: string;
    telefone!: string;
    email!: string;
    documento!: string;
    DataNascimento!: Date;
    endereco: Endereco = new Endereco;
}
