import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-map',
  templateUrl: './event-map.component.html',
  styleUrls: ['./event-map.component.css']
})
export class EventMapComponent implements OnInit {

  constructor() { }
   title:string
   lat:any
   long:any
  ngOnInit(): void {
    this.title = 'firstApp';
  
  this.lat = 22.2736308;
 this.long = 70.7512555;
  }

}
