import { Component, OnInit } from '@angular/core';
import {  BienService } from './service/bien.service';
import { Bien} from './interface/bien';

@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})
export class ImmobilierComponent implements OnInit {
 

  constructor( private data: BienService) { }

  ngOnInit() {
  

}

}
