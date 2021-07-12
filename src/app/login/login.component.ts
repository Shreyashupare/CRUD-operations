
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { user } from './loginuserinterface/userinterface';
import { SnackbarService } from '../services/snackbar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  islogin:boolean=false;
  incorrect:boolean=false;
  private employeelist:user[] = [];
  constructor(private log:LoginService, private router:Router, private snackbar: SnackbarService) { 
    this.loginform = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.log.getuserdetails().subscribe( data =>{
      this.employeelist=data;
      // console.log(typeof(data));
      // console.log(data);
      // console.log("in login" +this.employeelist);
      
    })
  }
  
  login(){
    
    if(this.loginform.valid){
      let c_email = this.loginform.value['email'];
      let c_password = this.loginform.value['password'];
      
      for(var i=0; i < this.employeelist.length; i++){
        if(this.employeelist[i].email == c_email){
          if(this.employeelist[i].password == c_password){
            console.log("signed in");
            this.islogin = true;
            this.log.setlog(this.islogin);
            sessionStorage.setItem("islog", JSON.stringify(this.islogin));
            this.router.navigateByUrl("/employ");
            this.snackbar.openSnackBar_success("You are logged in", "okay");
          }
          else{
            this.incorrect=true;
            return;
          }
        }
        else{
          this.incorrect=true;
          return;
        }

      }
    }
    else{
      return;
    }
    
  }

}
