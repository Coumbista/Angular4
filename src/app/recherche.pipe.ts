import { Pipe, PipeTransform } from '@angular/core';
import { Bien } from './immobilier/interface/bien';


@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(allbiens: Bien[], argument:string,id:number): any {
    if(argument==="TypeBien"){
      return allbiens.filter(bien =>bien.typebien.id==id);
    }
      if(argument==="Localite"){
  return allbiens.filter(bien =>bien.localite.id==id);
}
if(argument==="prix_loc"){
  return allbiens.filter(bien =>bien.prix_loc==bien.prix_loc);
}
   
   return allbiens; 
  }
  

}
