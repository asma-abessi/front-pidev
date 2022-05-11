import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { invitation } from 'src/app/Model/invitation';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  invitationData:any=[]
  invitation=new invitation
  data: any;

  activeindex=-1;

  location='Submit';










  listInvitation :invitation[]
  showAdd = false;







  constructor(private invitattionser:DataService,private router:Router) {
    

  this.invitattionser.getAllinvitation().subscribe((allData)=>
  {
    console.log(allData)
    this.invitationData=allData
  })
}

 listinv()
{
  this.invitattionser.getAllinvitation().subscribe((allData)=>
  {
    console.log(allData)
    this.invitationData=allData
  })
}
deleteInvitation(id:any,i:number){
  this.invitattionser.deleteInvitation(id).subscribe((result)=>
  {console.log(result)
   // this.invitattionser.splice(i,1)
    this.invitationData.splice(i,1)  

//this.ngOnInit()
  })
}

updateInvitation(id: number){
  this.router.navigate(['update-invitation', id]);
}


  ngOnInit(): void {
   

  
  } 
  showForm(){
    this.showAdd=true;
  }
  addInvitation(i:invitation){
    this.listInvitation.push(i);
      }


 

    
      
      AcceptInvitation(id:any,i:number){
        this.invitattionser.AcceptInvitation(id).subscribe((result)=>
        {console.log(result)
         // this.invitattionser.splice(i,1)
         window.location.reload()

      //this.ngOnInit()
        })
      }
      


    }