import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/Model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  listEvents : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }



  readonly BaseURI = 'http://localhost:8089/SpringMVC';

 
  getAllEventssFromServer(): Observable<Event[]> {
     
    return this.myHttp.get<Event[]>(this.BaseURI+'/Events');
  }

  deleteEventById(id:any){
    return this.myHttp.delete(this.BaseURI+"/deleteEvent/"+id);
    }

    

   addEvent(event:Event){
    return this.myHttp.post<Event>(this.BaseURI+"/saveEvent",event,this.httpOptions);
     }

     inviteUserToEvent(idUser:any,idEvent:any){
      return this.myHttp.post(this.BaseURI+"/addUserToEvent"+idEvent+"/"+idUser,this.httpOptions);
       }

     getEventById(idEvent:any){
       return this.myHttp.get<Event>(this.BaseURI+"/event/"+idEvent);
       }
 

       updateEventService (event: Event) {
        return this.myHttp.put<Event>(this.BaseURI+'/updateEvent', event,
        this.httpOptions);
        }

    currentEvent:Event;
    status:boolean=false;
    MODEvent(Event:Event){
    this.currentEvent=Event;
    }
    UpdateEvent(Event:Event){
    this.currentEvent=Event;
    this.status=true;
   }
      
}

