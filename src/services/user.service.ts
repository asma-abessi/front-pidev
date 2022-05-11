import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUsers : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }
  readonly BaseURI = 'http://localhost:8089/SpringMVC';

 
  getAllUserssFromServer(): Observable<User[]> {
     
    return this.myHttp.get<User[]>('http://localhost:8089/SpringMVC/user/retrieve-all-users');
  }

  deleteUserById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/user/remove-user/"+id);
    }

    

   addUser(user:User):Observable<User>{
    return this.myHttp.post<User>("http://localhost:8089/SpringMVC/user/add-user/",user,this.httpOptions);
     }

     getUserById(idUser:number):Observable<User>{
       return this.myHttp.get<User>("http://localhost:8089/SpringMVC/user/retrieve-user/"+idUser);
       }
 

       updateUser (id: number, user: User): Observable<User> {
        return this.myHttp.put<User>('http://localhost:8089/SpringMVC/user/modify-user-byID/'+ id, user,
        this.httpOptions);
        }

   
        
        getstatisticsFromServer(): Observable<any> {
     
          return this.myHttp.get<any>('http://localhost:8089/SpringMVC/user/statisticnbUserUser');
        }
        

        getUser(id:number): Observable<User> {
     
          return this.myHttp.get<User>('http://localhost:8089/SpringMVC/user/retrieve-user/'+id);
        }

        //***************************************************************************** */
        getMatchedFromServer(): Observable<String[]> {
     
          return this.myHttp.get<String[]>('http://localhost:8089/SpringMVC/user/getmatched');
        }


          AffectUserToUserer(idUser:number ):Observable<String>{
            return this.myHttp.post<String>("http://localhost:8089/SpringMVC/user/AffectUserToUserer/"+idUser+"/"+idUser,this.httpOptions);
             }

           GetFriend():Observable<any>{
            return this.myHttp.get<any>("http://localhost:8089/SpringMVC/user/retrieve-friend/1");
            }



            //******************************************************************************************************************** */
      GetNbreUser():Observable<number>{
        return this.myHttp.get<number>("http://localhost:8089/SpringMVC/user/nbr-user");
         }
       GetNbreOpportunities():Observable<number>{
             return this.myHttp.get<number>("http://localhost:8089/SpringMVC/opportunity/nbr-opportunities");
       }
        GetNbreEvents():Observable<number>{
              return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-events");
        }
        GetNbreUserers():Observable<number>{
         return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-Userers");
       }
       GetNbreEmployee():Observable<number>{
        return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-Employee");
        }
       GetNbreEntreprise():Observable<number>{
       return this.myHttp.get<number>("http://localhost:8089/SpringMVC/nbr-Entreprise");
      }


}

///////////////////////////////git
