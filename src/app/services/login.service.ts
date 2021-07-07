import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) { }


getuserdetails(){
  return this.http.get('../json_files/userlogindetails.json');
}

}