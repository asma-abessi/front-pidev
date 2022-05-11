import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { invitation } from 'src/app/Model/invitation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { event } from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  invitation: any[]=[];

invitations: invitation[]; 
    location:string;
    calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this), // bind is important!
      events: [
        { title: 'Present', date: '2022-05-10' },
        { title: 'event 2', date: '2019-04-02' }
      ]

   
    
    };


    //event => list of invitation 

    //recupurer list des invitatioon 

    //foeach(
/*
    event.push({
      title:
    })
    )
  */
    

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

   
  this.httpClient

        .get('http://localhost:8089/SpringMVC/Invitation/get-all-Invitation')

        .subscribe((res: any) => {

          this.invitation = res;
console.log(res)
          
        });

  }



 
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr 

)     
  
console.log(arg);
  }


  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }







  
}