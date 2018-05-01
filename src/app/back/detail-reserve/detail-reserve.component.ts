import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { LocaliteService } from '../../immobilier/service/bien.service';
import { Reservation } from '../../immobilier/interface/reservation';

@Component({
  selector: 'app-detail-reserve',
  templateUrl: './detail-reserve.component.html',
  styleUrls: ['./detail-reserve.component.css']
})
export class DetailReserveComponent implements OnInit {
  @Input()reser: Reservation;
 public OneR :Reservation[];

  constructor(private data: LocaliteService, private Rout: ActivatedRoute,) { }

  ngOnInit() {
    const id=+this.Rout.snapshot.paramMap.get("id");
    this.data.getOneReservation(id).subscribe(data=>{this.OneR=data.data as Reservation[];
    
    });
  }

}
