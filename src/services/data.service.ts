import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { claim } from 'src/app/Model/claim';
import { invitation } from 'src/app/Model/invitation';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;@Injectable({
  providedIn: 'root'
})
export class DataService {

  listclaim : string[];
  listinvitation : string[];

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }

 url ='http://localhost:8089/SpringMVC/Claim';



  constructor(private http:HttpClient,private fb: FormBuilder,private route:Router) { }

  formModel = this.fb.group({
   
    Subject: [''],
    Description: [''],
    Date: [''],
    Etat: ['']
    
    
  });

getAllClaim(){
  return this.http.get<claim[]>('http://localhost:8089/SpringMVC/Claim/get-all-Claim');
}

getStatsINV(){
  return this.http.get<String>('http://localhost:8089/SpringMVC/Invitation/stat/invitation1');
}

getStatsINV2(){
  return this.http.get<String>('http://localhost:8089/SpringMVC/Invitation/stat/invitation2');
}




getStatsSomme(){
  return this.http.get<String>('http://localhost:8089/SpringMVC/Invitation/stat/invitationSOMME');
}



getAllinvitation(){
  return this.http.get('http://localhost:8089/SpringMVC/Invitation/get-all-Invitation')
}
//addClaim(id:number,claimData :any){
  
  //return this.http.post(this.url + '/addClaim/' + id,claimData);
  


//}
deleteInvitation(id:any[]){
  return this.http.delete('http://localhost:8089/SpringMVC/Invitation/remove-Invitation/'+id)
}



deleteClaim(idd:any[]){
  return this.http.delete('http://localhost:8089/SpringMVC/Claim/remove-Claim/'+idd)
}



getClaimbyid(id:number):Observable<claim>{
  return this.http.get<claim>('http://localhost:8089/SpringMVC/Claim/getById/'+id)
}



Updateclaim(id:number){

  this.route.navigate(['update-claim',id])

}
updateClaim(id: number, Claim:claim): Observable<Object>{
  return this.http.put<claim>('http://localhost:8089/SpringMVC/Claim/modify-Claim-byID/'+id,Claim)



}






getInvitationbyid(id:number):Observable<invitation>{
  return this.http.get<invitation>('http://localhost:8089/SpringMVC/Invitation/GetInvitationById/'+id)
}











   updateInvitation(id: number, Invitation:invitation):Observable<Object>{
  return this.http.put<invitation>('http://localhost:8089/SpringMVC/Invitation/modify-Invitation-byID/'+id, Invitation)
  
  
  
  }
  


  addProduct (Invitation:invitation,idUser: number ,idInv :number): Observable<invitation> {
    return this.http.post<invitation>('http://localhost:8089/SpringMVC/Invitation/addUserToInv/'+idUser+"/"+idInv,Invitation);

  }


  
  addClaim(c:claim):Observable<claim>{
    return this.http.post<claim>('http://localhost:8089/SpringMVC/Claim/addClaim/9',c,this.httpOptions);
    }

    addInvitation(c:invitation):Observable<invitation>{
      return this.http.post<invitation>("http://localhost:8089/SpringMVC/Invitation/addInvitation?idUsers=7",c,this.httpOptions);
      }
      AcceptInvitation(id:any[]){
        return this.http.post('http://localhost:8089/SpringMVC/Invitation/accepterInv/'+id,this.httpOptions)
      }
      
      AcceptClaim(id:any[]){
        return this.http.put('http://localhost:8089/SpringMVC/Claim/claimCheck/'+id,this.httpOptions)
      }
      
  
      
      getClaim(){
        return this.http.get('http://localhost:8089/SpringMVC/claim/export/pdf')
      }
      

}