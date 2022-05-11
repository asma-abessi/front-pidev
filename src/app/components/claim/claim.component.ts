import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { claim } from 'src/app/Model/claim';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

claimData:any=[];
Claim:claim[];
listClaim : claim[]



showAdd = false;



  constructor(private claimser:DataService ,private router:Router)  { 
  this.claimser.getAllClaim().subscribe((allData)=>
  {
    console.log(allData)
    this.claimData=allData
  })
}











private aawja(){
  this.claimser.getAllClaim().subscribe((allData)=>
  {
    console.log(allData)
    this.claimData=allData
  })
}



deleteClaim(idd:any,i:number){
    this.claimser.deleteClaim(idd).subscribe((res)=>
    {console.log(res)
     // this.invitattionser.splice(i,1)
      this.claimData.splice(i,1)  
  
  //this.ngOnInit()
    })

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.aawja();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.aawja();
  }


  updateClaim(id: number){
    this.router.navigate(['update-claim', id]);
  }
  showForm(){
    this.showAdd=true;
  }
  addClaim(i:claim){
    this.listClaim.push(i);
      }


 
      AcceptClaim(id:any,i:number){
        this.claimser.AcceptClaim(id).subscribe((result)=>
        {console.log(result)
         // this.invitattionser.splice(i,1)
         window.location.reload()

      //this.ngOnInit()
        })
      }
           

  ngOnInit(): void {

  }

  getClaim()
{
  this.claimser.getClaim().subscribe((allData)=>
  {
    console.log('aaaaaa',allData);
    this.claimData=allData;
  })
}
}