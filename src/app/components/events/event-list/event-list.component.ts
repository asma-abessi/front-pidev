import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Event } from 'src/app/Model/Event';
import { EventService } from 'src/services/event.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  listEvent: Event[];
  currentEvent: Event;
  searchText:any;
  bestAuthor:Event
  countEvents: number
  employes:number
  x1:any
  constructor(private EventService: EventService,private router: Router) { }
   

  ngOnInit(): void {
    this.EventService.getAllEventssFromServer().subscribe(
      (data:Event[])=>{
        this.listEvent= data
        
      } 



    )
    
    }
 
  delete(Event: Event){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Event!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          //this.EventService.deleteListEventService(Event.id);
          let i =this.listEvent.indexOf(Event)
          console.log(i);
          
          this.EventService.deleteEventById(Event.id).subscribe(
            ()=>this.listEvent.splice(i,1)
          )
          this.ngOnInit()
          swal("Event has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Event is safe!");
        }
      });
 
   }
  load()
  {
    return this.EventService.getAllEventssFromServer().subscribe()
  }
  generateChart() {
    this.EventService.getAllEventssFromServer().subscribe( 
      (data) => {
         
      this.x1=data.length  

      localStorage.setItem('employes', this.x1);
      console.log(this.x1)


    }
    );
    }
  update(Event: Event){
  this.EventService.UpdateEvent(Event);
  this.router.navigate(['/add-event']);
  }

  ShowMore(Event:Event){
    this.EventService.getEventById(Event.id).subscribe(
      (EventD:Event)=>[this.EventService.MODEvent(EventD),this.router.navigate(['/Event/:id'])]
    )
  }

  


}
