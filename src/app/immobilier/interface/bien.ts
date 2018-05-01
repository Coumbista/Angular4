import { TypeBien } from './typebien';
import { Localite } from './localite';

export interface Bien {
    idbien:number,
    typebien :TypeBien;
    localite:Localite;
    nombien:string;
    prix_loc : number;
    images : Blob;
    etat : boolean;
    description : string;
   
}




