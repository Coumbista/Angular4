import { Bien } from './bien';
import { Client } from './client';



export interface Reservation {
    id:number;
    datereservation:Date;
    etat:boolean;
    client:Client;
    bien:Bien
}
