import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  show:true;
  showaffectation:true;


  ListTravels:Travel[];
  travel:Travel;
  showAdd = false; 
   searchVal="";

   page: number = 1;
   count: number = 0;
   tableSize: number = 5;
   tableSizes: any = [3, 6, 9, 12];

  constructor(private ac:ActivatedRoute, private travelServ:TravelService) { }
  
  ngOnInit(): void {

this.getliste();
  
  }

private getliste(){
  this.travelServ.getAllTravelssFromServer().subscribe(res=>{
    this.ListTravels=res;
  
});
}
 
  deleteTravel(id:number){
    this.travelServ.deleteTravelById(id).subscribe(()=>this.travelServ.getAllTravelssFromServer()
      .subscribe(res=>{this.ListTravels=res})
    );
  }

  editTravel(x:Travel){
    this.show=true;
    this.travel=x;
    
  }
  
  editMyTravel(i :any){

  }



  showForm(){
    this.showAdd=true;
  }
  addTravel(i:Travel){
    this.ListTravels.push(i);
      }


   
     
      onTableDataChange(event: any) {
        this.page = event;
        this.getliste();
      }
      onTableSizeChange(event: any): void {
        this.tableSize = event.target.value;
        this.page = 1;
        this.getliste();
      }




}