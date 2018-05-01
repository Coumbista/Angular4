import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { TypeBien} from '../interface/typebien';
import { Localite} from '../interface/localite';
import {  TypeBiens,LocaliteService } from '../service/bien.service';
@Component({
  selector: 'app-form-bien',
  templateUrl: './form-bien.component.html',
  styleUrls: ['./form-bien.component.css']
})
export class FormBienComponent implements OnInit {
  @Output() localite = new EventEmitter<any>();
  
  public typebien: TypeBien[];
  public loca: Localite[];
  constructor( 
    private t: TypeBiens,
    private l:LocaliteService
  ) { }

  ngOnInit() {
    this.t.getlisteTypebien().subscribe(result=>{
      this.typebien = result.data as TypeBien[];
  }),
  this.l.getlisteLocalite().subscribe(result=>{
    this.loca = result.data as  Localite[];
})
  }
  search(id,select){
    this.localite.emit({'id':id,'select':select})
  }
}
