import { LogoutDisplayComponent } from './logout-display/logout-display.component';
import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public dialog: MatDialog, private router:Router) { }
  ngOnInit(): void {
  }
  logout() {
    const dialogRef = this.dialog.open(LogoutDisplayComponent, {restoreFocus: false});
    this.router.navigateByUrl('/login');
  }

}