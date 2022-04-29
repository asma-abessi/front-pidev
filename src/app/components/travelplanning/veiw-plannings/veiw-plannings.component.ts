import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelPlanning } from 'src/app/Model/TravelPlanning';
import { TravelplanningService } from 'src/services/travelplanning.service';

@Component({
  selector: 'app-veiw-plannings',
  templateUrl: './veiw-plannings.component.html',
  styleUrls: ['./veiw-plannings.component.css']
})
export class VeiwPlanningsComponent implements OnInit {
  searchVal="";
  Listplannings:TravelPlanning[];
  constructor(private ac:ActivatedRoute, private planningServ:TravelplanningService) { }

  ngOnInit(): void {
    this.planningServ.getAllTravelsPlanningFromServer().subscribe(res=>{this.Listplannings=res;});
  }

}
