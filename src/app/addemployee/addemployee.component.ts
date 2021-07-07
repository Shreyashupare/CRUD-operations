import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  addemployeeform:FormGroup;
  constructor(private _snackBar: MatSnackBar) { 
    this.addemployeeform = new FormGroup({
      id: new FormControl('',[Validators.required]),
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      grade: new FormControl('',[Validators.required]),
      odc: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }
  openSnackBar() {
    this._snackBar.open("Employee added successfully", "ok");
  }
}
