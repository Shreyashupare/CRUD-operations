import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddemployeeComponent } from '../addemployee/addemployee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(AddemployeeComponent, {
      width:'40%',
    });
  }
  ngOnInit(): void {
  }

}
