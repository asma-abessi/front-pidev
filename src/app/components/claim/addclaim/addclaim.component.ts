
import { claim } from 'src/app/Model/claim';
import { DataService } from 'src/services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<claim>();
 claim:claim;
  constructor(private claimserv:DataService) { }

  ngOnInit(): void {
    
    
    this.myForm=new FormGroup({
      idClaim:new FormControl(),
      subject: new FormControl(),
      description: new FormControl(),
      date: new FormControl(),
      etat: new FormControl(),
    }) 
  }
  

  add(){
    this.claimserv.addClaim(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  window.location.reload();
  }

}

