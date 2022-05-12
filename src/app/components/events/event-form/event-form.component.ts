import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Model/Event';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  Events: Event[];
  event: Event;
  status: boolean;

  constructor(private EventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.status = this.EventService.status;
    if (this.EventService.status) {

      this.event = this.EventService.currentEvent;
      console.log(this.event)
    } else {

      this.event = new Event();
    }
  }


  save() {
    if (this.status) {
      console.log("status update" + this.status)
      console.log("from update" + this.event)
      this.EventService.updateEventService(this.event).subscribe(
        () => this.router.navigate(['/events'])
      )
    }
    else {


      this.EventService.addEvent(this.event).subscribe(
        () => this.router.navigate(['/events'])
      )
    }




  }


  return() {
    this.router.navigate(['/Events']);
  }

}
