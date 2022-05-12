import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/Model/Event';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event:Event;
  showForm:Boolean=false
  constructor(private EventService: EventService,private router: Router,private activated:ActivatedRoute) { }

  

  ngOnInit(): void {
    this.event=this.EventService.currentEvent;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.EventService.getEventById(String(id)).subscribe(
          (data) => this.event = data,
        )
        console.log(this.event)

      }
    )


  }
  
  show()
  {
    this.showForm=true
  }
  
  return(){
    this.router.navigate(['/events']);
  }

}
