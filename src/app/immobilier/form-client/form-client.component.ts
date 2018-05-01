import { LocaliteService } from './../service/bien.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Bien} from '../interface/bien';
import { Client} from '../interface/client';
import {  BienService } from '../service/bien.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {


  client : Client;

  constructor(
    private route: ActivatedRoute,
    private Reservation : LocaliteService
  ) { }

  ngOnInit() {
  }

  send(bienForm){
    this.client = bienForm as Client;
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.client)
    this.Reservation.addReservation(id, this.client).subscribe(res => {
      window.location.href="http://localhost:4200/app.component.html"
    })
  }
  
}
