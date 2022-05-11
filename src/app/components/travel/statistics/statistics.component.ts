import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  ListTravels:Travel[];
  productSales: any[]
  productSalesMulti: any[]
  Stat:any
  view: any[] = [700, 370];
  
  nbrTravel:number;
  nbropportunity:number;
  nbrEvents:number;
  nbrEmployee:number;
  nbrTraveler:number;
  nbrEntreprise:number;



  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };



  constructor(private travelServ:TravelService ) { }

  ngOnInit(): void {
    this.travelServ.getstatisticsFromServer().subscribe(res=>{
      this.Stat=res;
    
      console.log("ddd"+this.Stat.map(i=>i.total));
  });
  this.totaltravels();
  this.totalopportunities();
  this.totalEvents();
  this.totalTraveler();
  this.totalEmployee();
  this.totalEntreprise();
  
  
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

totaltravels(){
  this.travelServ.GetNbreTravel().subscribe(res=>{this.nbrTravel=res})
    console.log("nbr");
}

totalopportunities(){
  this.travelServ.GetNbreOpportunities().subscribe(res=>{this.nbropportunity=res})
    console.log("nbropp");
}
totalEvents(){
  this.travelServ.GetNbreEvents().subscribe(res=>{this.nbrEvents=res})
    console.log("nbrEvents");

}
totalTraveler(){
  this.travelServ.GetNbreTravelers().subscribe(res=>{this.nbrTraveler=res})
    console.log("nbrEvents");

}
totalEmployee(){
  this.travelServ.GetNbreEmployee().subscribe(res=>{this.nbrEmployee=res})
    console.log("nbrEvents");

}
totalEntreprise(){
  this.travelServ.GetNbreEntreprise().subscribe(res=>{this.nbrEntreprise=res})
    console.log("nbrEvents");

}
 
}

  

