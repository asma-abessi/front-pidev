import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelplanningService } from 'src/services/travelplanning.service';

@Component({
  selector: 'app-gettravel-plannings',
  templateUrl: './gettravel-plannings.component.html',
  styleUrls: ['./gettravel-plannings.component.css']
})
export class GettravelPlanningsComponent implements OnInit {
 plannings:any;
  id:number;
  searchVal="";
  myParam:number;
  constructor(private planningSErv:TravelplanningService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.GetPlanningsByTravelId(this.myParam)
       });

      
    
  }

  GetPlanningsByTravelId(id){
    this.planningSErv.GetPlanningByTravelId(id).subscribe(res=>{
      this.plannings=res
      console.log(this.plannings);
    }); 
  }

}
