import { Contrat } from './contrat';

export interface Paiement {
    id:number,
    datepaiement,
    montant:number,
    periode:string,
    contrat:Contrat
}
