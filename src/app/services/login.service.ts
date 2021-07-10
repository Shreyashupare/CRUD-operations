import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { user } from '../login/loginuserinterface/userinterface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url:string = "assets/json_files/userlogindetails.json"
  constructor(private http:HttpClient) { }

  subject = new Subject<boolean>();
    setlog(islogin:boolean){
      this.subject.next(islogin);
    }
    getlog():Observable<boolean>{
      return this.subject.asObservable();
    }

  getuserdetails():Observable<user[]>{
    //../json_files/userlogindetails.json
    console.log("in service"+ this.http.get<user[]>(this._url));
    return this.http.get<user[]>(this._url);
    
  }

}