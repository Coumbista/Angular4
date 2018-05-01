import { Reservation } from './../interface/reservation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,ObservableInput } from 'rxjs/Observable';
import { Bien} from '../interface/bien';
import { Client} from '../interface/client';
import { TypeBien} from '../interface/typebien';
import { Localite} from '../interface/localite';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json'
	})
};
@Injectable()
export class BienService {
  constructor(private http: HttpClient) { }
  BienService =  "http://localhost:8000/biens";
  
  getlisteBiens():Observable<any>{  
    return this.http.get(this.BienService);
  }
 
  bienId=  "http://127.0.0.1:8000/bienID";
  getOneBien(id: number):Observable<any>{
   return this.http.get(this.bienId+`/${id}`)
 }
 
}
@Injectable()
export class TypeBiens {  
  constructor(private http: HttpClient) { }
  TypeBiens=  "http://localhost:8000/typebien";

  getlisteTypebien():Observable<any>{  
    return this.http.get(this.TypeBiens);
  }
}
@Injectable()
export class LocaliteService {  
  constructor(private http: HttpClient) { }
  LocaliteService=  "http://localhost:8000/localite";

  getlisteLocalite():Observable<any>{  
    return this.http.get(this.LocaliteService);
  }
  Reservation="http://localhost:8000/reservation";
  addReservation(idbien, client) : Observable<any>{
    return this.http.post(this.Reservation+`/${ idbien }`, JSON.parse(JSON.stringify(client)), httpOptions)
  }
  // recherche="http://localhost:8000/recherche"
  // getBienByType( idlocalite,idtypebien,idprix_loc) : Observable<any> {
  //   return this.http.get(this.recherche+`/${ idlocalite }/${ idtypebien }/${idprix_loc}`);
  // }
      connectionClient="http://localhost:8000/connexionclient";
      Login(idbien,reserve:Reservation): Observable<any>{
      return this.http.post(this.connectionClient+`/${ idbien }`, JSON.parse(JSON.stringify(reserve)), httpOptions)
      }

        listeReserve =  "http://localhost:8000/Reservation";  
        getlistReserve():Observable<any>{  
          return this.http.get(this. listeReserve);
        }
            detail_Reserve="http://localhost:8000/detail";
            getOneReservation(id: number):Observable<any>{
              return this.http.get(this.detail_Reserve+`/${id}`)
          }
            saveContrat="http://localhost:8000/saveContrat";
            Save(idclient, contrat) : Observable<any>{
              return this.http.post(this.saveContrat+`/${idclient}`, JSON.parse(JSON.stringify(contrat)), httpOptions)
            }

}
