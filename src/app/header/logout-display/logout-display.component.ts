import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-logout-display',
  templateUrl: './logout-display.component.html',
  styleUrls: ['./logout-display.component.css']
})
export class LogoutDisplayComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
