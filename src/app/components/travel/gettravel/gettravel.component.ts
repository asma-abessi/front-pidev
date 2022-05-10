import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';

@Component({
  selector: 'app-gettravel',
  templateUrl: './gettravel.component.html',
  styleUrls: ['./gettravel.component.css']
})
export class GettravelComponent implements OnInit {
  travel = new Travel();
  link:SafeResourceUrl;
  showmap=false;
  TextBtn="afficher la Localisation"
  destination:string

  constructor(private ac:ActivatedRoute,public sanitizer: DomSanitizer,private travelServ :TravelService) { }
  toggleMap(){
    this.showmap=!this.showmap
    if(this.showmap)
    this.TextBtn="Fermer la Localisation"
    else{
      this.TextBtn="Afficher la Localisation"
    }
  }
  ngOnInit(): void {
    this.ac.paramMap.subscribe(next=>this.travelServ.getTravel(Number(next.get('id'))).subscribe(res=>
      {this.travel=res,
        this.link=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDX-nRJ8JxhkpsCsD_-7qGO1vgGtRfMWG4&q="+this.travel.destination)
      }))
  }

}
