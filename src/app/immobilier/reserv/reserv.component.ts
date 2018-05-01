import { LocaliteService } from './../service/bien.service';
import { Localite } from './../interface/localite';
import { Component, OnInit } from '@angular/core';
import {  BienService,TypeBiens } from '../service/bien.service';
import { Bien} from '../interface/bien';
import { TypeBien} from '../interface/typebien';



@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css'],
  
})
export class ReservComponent implements OnInit {
  public typebien: TypeBien[];
  public loca: Localite[];
  p: number = 1;
  public bien: Bien[];
  localit:Localite;
  argument="";
  cle="";
  
  
 
  constructor(
    private data: BienService,
    private t: TypeBiens,
    private l:LocaliteService
    
  ) { }

  ngOnInit() {
    this.data.getlisteBiens().subscribe(result=>{
         this.bien = result.data as Bien[];
    })
 
  }
localite(localite){
  console.log(localite);
  this.argument=localite.select
  this.cle=localite.id;
}

}
