import { Reservation } from './../../immobilier/interface/reservation';
import { ActivatedRoute } from '@angular/router';
import { LocaliteService } from './../../immobilier/service/bien.service';
import { Contrat } from './../../immobilier/interface/contrat';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  @Input()reser: Reservation;
 public OneR :Reservation[];
  contrat : Contrat;
 
  constructor(
    private data: LocaliteService,
    private route: ActivatedRoute,
    private Contrat : LocaliteService
  ) { }


  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get("id");
    this.data.getOneReservation(id).subscribe(data=>{this.OneR=data.data as Reservation[];
    
    });
  }

  send(contratForm){
    this.contrat = contratForm as Contrat;
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.contrat)
    this.Contrat.Save(id, this.contrat).subscribe(res => {
      window.location.href="http://localhost:4200/app.component.html"
    })
  }
}
