import { Bien } from './../../immobilier/interface/bien';
import { Reservation } from './../../immobilier/interface/reservation';
import { LocaliteService } from './../../immobilier/service/bien.service';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
  @Input()reser: Reservation;
  public reserve: Reservation[];
  public biens: Bien[];
  constructor( private data: LocaliteService) { }

  ngOnInit() {
    this.data.getlistReserve().subscribe(result=>{
          this.reserve = result.data as Reservation[];
    })
 
  }

}
