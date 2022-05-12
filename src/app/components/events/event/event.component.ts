import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/Model/Event';
import { User } from 'src/app/Model/User';
import { EventService } from 'src/services/event.service';
import { UserService } from 'src/services/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  email:string
  event:Event;
  user:User;
  users:User[];
  showForm:Boolean=false
  showGuests:Boolean=false;
  constructor(private EventService: EventService,private UserService: UserService,private router: Router,private activated:ActivatedRoute) { }

  

  ngOnInit(): void {
    this.event=this.EventService.currentEvent;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.EventService.invited(String(id)).subscribe(
          (data) => this.users= data

      
    )
    
        console.log(id)
        this.EventService.getEventById(String(id)).subscribe(
          (data) => this.event = data,
        )
        
        console.log(this.users)

      }
    )
    


  }
  
  show()
  {
    this.showForm=true
  }

  showInvited()
  {
    this.showGuests=true
  }

  return(){
    this.router.navigate(['/events']);
  }

  invite(){
    this.showGuests=false
console.log(this.email)

    this.UserService.verifyUser(this.email).subscribe(
      (data)=>{
        if(data)
        {
          this.user=data
          console.log(data)

          this.EventService.inviteUserToEvent(this.user.id,this.event.id).subscribe(
         

      
          );
          ()=>this.showForm=false
          location.reload();
          swal({
            title: "Invitation sent successfully",
            text: "An email has been sent to this user",
            icon: "success",
            buttons: ["Okay"],
            dangerMode: true,
          })
        }
        else
        {
          swal({
            title: "Error",
            text: "Sorry but there's no account with this email address!",
            icon: "warning",
            buttons: ["Okay"],
            dangerMode: true,
          })
        }
      }
      
    )
   
  }
  
}
