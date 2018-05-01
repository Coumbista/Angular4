import { Reservation } from './../interface/reservation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocaliteService } from './../service/bien.service';
import { Client} from '../interface/client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
  client : Client;
   constructor(
    private route: ActivatedRoute,
    private Connection : LocaliteService
    
  ) { }

  ngOnInit() {
  }

  
  
  onSubmit(formconect){   
    const id = +this.route.snapshot.paramMap.get('id');
    this.client=formconect;
    console.log(formconect )
    this.Connection.Login(id,formconect ).subscribe(res => {
      console.log(res);
    });
  }
}


// this.Connection.Login(this.emailclient,this.password)
// .subscribe();
// }