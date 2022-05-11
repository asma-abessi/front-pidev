import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/services/travel.service';
import { TravelplanningService } from 'src/services/travelplanning.service';

@Component({
  selector: 'app-users-travel',
  templateUrl: './users-travel.component.html',
  styleUrls: ['./users-travel.component.css']
})
export class UsersTravelComponent implements OnInit {
  travels:any;
 
  constructor(private travelServ:TravelService ) {  }

  ngOnInit(): void {
    this.travelServ.GetTravelByUserId().subscribe(res=>{
      this.travels=res
      console.log(this.travels);
    }); 
  }





 
}
