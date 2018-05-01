import { Client } from './client';
import { Bien } from './bien';



export interface Contrat {
    datecontrat:Date,
    caution:number,
    duree:string,
    client:Client,
    bien:Bien
}
