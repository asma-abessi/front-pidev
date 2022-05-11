import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { claim } from 'src/app/Model/claim';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-editclaim',
  templateUrl: './editclaim.component.html',
  styleUrls: ['./editclaim.component.css']
})
export class EditclaimComponent implements OnInit {

 id:number
Claim: claim = new claim();
constructor(private claimservice:DataService
    ,private route:ActivatedRoute , private router: Router)

   


     { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']

this.claimservice.getClaimbyid(this.id).subscribe(data=>{
  this.Claim=data

},error=>console.log(error));


  }

  onSubmit(){
    console.log(this.Claim)
    this.claimservice.updateClaim(this.id,this.Claim).subscribe( data =>{console.log(data)
      this.goToClaimList()

    }
    , error => console.log(error));
  }
  goToClaimList(){
    this.router.navigate(['/claim']);
  }



}
