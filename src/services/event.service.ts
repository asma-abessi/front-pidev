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
     
    return this.myHttp.get<Event[]>('http://localhost:8089/SpringMVC/event/retrieve-all-events');
  }

  deleteEventById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/event/remove-event/"+id);
    }

    

   addEvent(event:Event):Observable<Event>{
    return this.myHttp.post<Event>("http://localhost:8089/SpringMVC/event/add-event/",event,this.httpOptions);
     }

     getEventById(idEvent:number):Observable<Event>{
       return this.myHttp.get<Event>("http://localhost:8089/SpringMVC/event/retrieve-event/"+idEvent);
       }
 

       updateEvent (id: number, event: Event): Observable<Event> {
        return this.myHttp.put<Event>('http://localhost:8089/SpringMVC/event/modify-event-byID/'+ id, event,
        this.httpOptions);
        }

   
        
        getstatisticsFromServer(): Observable<any> {
     
          return this.myHttp.get<any>('http://localhost:8089/SpringMVC/event/statisticnbEventEvent');
        }
        

        getEvent(id:number): Observable<Event> {
     
          return this.myHttp.get<Event>('http://localhost:8089/SpringMVC/event/retrieve-event/'+id);
        }

        //***************************************************************************** */
        getMatchedFromServer(): Observable<String[]> {
     
          return this.myHttp.get<String[]>('http://localhost:8089/SpringMVC/event/getmatched');
        }


          AffectEventToEventer(idEvent:number,):Observable<String>{
            return this.myHttp.post<String>("http://localhost:8089/SpringMVC/event/AffectEventToEventer/"+idEvent+"/"+idEvent,this.httpOptions);
             }

           GetFriend():Observable<any>{
            return this.myHttp.get<any>("http://localhost:8089/SpringMVC/event/retrieve-friend/1");
            }



            //******************************************************************************************************************** */
      GetNbreEvent():Observable<number>{
        return this.myHttp.get<number>("http://localhost:8089/SpringMVC/event/nbr-event");
         }
       GetNbreOpportunities():Observable<number>{
             return this.myHttp.get<number>("http://localhost:8089/SpringMVC/event/nbr-opportunities");
       }
        GetNbreEvents():Observable<number>{
              return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-events");
        }
        GetNbreEventers():Observable<number>{
         return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-Eventers");
       }
       GetNbreEmployee():Observable<number>{
        return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-Employee");
        }
       GetNbreEntreprise():Observable<number>{
       return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-Entreprise");
      }


}

///////////////////////////////git
