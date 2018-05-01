import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



import { Bien} from '../interface/bien';
import { Client} from '../interface/client';
import {  BienService , LocaliteService} from '../service/bien.service';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input()bien: Bien; 
   public OneBien:Bien[];
 

  constructor( private data: BienService, private Rout: ActivatedRoute, private detay: Location ,private Reserve: LocaliteService ) { }
  
  ngOnInit() {
    const id=+this.Rout.snapshot.paramMap.get("id");
    this.data.getOneBien(id).subscribe(data=>{this.OneBien=data.data as Bien[];
    
    });
  }
}