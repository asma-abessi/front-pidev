import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/Model/Event';

@Component({
  selector: 'app-child-event',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css']
})
export class EventChildComponent implements OnInit {

  @Input() listEvent:Event[];
  @Output()deleteEvent=new EventEmitter<Event>();
  @Output()updateEvent=new EventEmitter<Event>();
  
  constructor() { }


  searchText:any;


  ngOnInit(): void {
  }
  delete(currentEvent:Event){
    this.deleteEvent.emit(currentEvent);
  }
  update(currentEvent:Event){
    this.updateEvent.emit(currentEvent);
  }
}
