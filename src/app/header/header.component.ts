import { DisplayComponent } from './display/display.component';
import { LogoutDisplayComponent } from './logout-display/logout-display.component';
import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged:boolean=false;
  constructor(public dialog: MatDialog, private router:Router, private log:LoginService) { 

  }
  ngOnInit(): void {
    if(sessionStorage.getItem("islog")==null){
      this.logged = false;
    }
    else{
      this.logged = true;
    }
    // this.log.getlog().subscribe((res)=>{
    //   console.log("reload header component"+ res);
    //   this.router.navigateByUrl("header");
    //   this.router.navigate([this.router.url]);

    // })
    //this.logged = JSON.parse(sessionStorage.getItem("islog") || "{}");
    this.log.getlog().subscribe(islogged=>{
      this.logged = islogged;
    })
  }
  logout() {
    this.logged = false;
    //sessionStorage.setItem("islog", JSON.stringify(this.logged));

    const dialogRef = this.dialog.open(LogoutDisplayComponent, {restoreFocus: false});
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
  notifications(){
    const dialogRef = this.dialog.open(DisplayComponent, {restoreFocus: false});
    
  }
}