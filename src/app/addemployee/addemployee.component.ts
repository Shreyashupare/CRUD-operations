import { employee } from './../employee/employeeinterface/employeeinterface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EmployeeService } from '../services/employee.service';
import { EmployeeComponent } from '../employee/employee.component';
import { Observable } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  addemployeeform:FormGroup;
  new_id:number;
  title:string;
  add_edit_button:string;
  new_employe:employee;
  employeelist:employee[]=[];
  length:number;
  constructor(private empser:EmployeeService, private snackbar:SnackbarService, @Inject(MAT_DIALOG_DATA) public dataeditvalue:any) { 
    this.addemployeeform = new FormGroup({
      id: new FormControl('',[]),
      is_active: new FormControl('',[]),
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      grade: new FormControl('',[Validators.required]),
      odc: new FormControl('',[Validators.required]),
      bu: new FormControl('',[Validators.required]),
      project: new FormControl('',[Validators.required])
    });
  }



  ngOnInit(): void {
    

    if(this.dataeditvalue.edit){
      this.title="Edit employee";
      this.add_edit_button="Edit";
      this.addemployeeform.controls.firstname.setValue(this.dataeditvalue.cur_emp_data.firstname);
      this.addemployeeform.controls.lastname.setValue(this.dataeditvalue.cur_emp_data.lastname);
      this.addemployeeform.controls.gender.setValue(this.dataeditvalue.cur_emp_data.gender);
      this.addemployeeform.controls.grade.setValue(this.dataeditvalue.cur_emp_data.grade);
      this.addemployeeform.controls.odc.setValue(this.dataeditvalue.cur_emp_data.odc);
      this.addemployeeform.controls.bu.setValue(this.dataeditvalue.cur_emp_data.bu);
      this.addemployeeform.controls.project.setValue(this.dataeditvalue.cur_emp_data.project);
      this.addemployeeform.controls.id.setValue(this.dataeditvalue.cur_emp_data.id);
      this.addemployeeform.controls.is_active.setValue(this.dataeditvalue.cur_emp_data.is_active);
    }
    else{
      this.title="Add new employee";
      this.add_edit_button="Add";
      this.addemployeeform.controls.is_active.setValue(true);
    }
  }
  addemployee() {
    if(this.dataeditvalue.edit){
      this.new_id = this.dataeditvalue.cur_emp_data.id;
      //call edit  employe from employee service
      this.empser.editemployee(this.addemployeeform.value, this.new_id);
      //snackbar edit success
      this.snackbar.openSnackBar_success("Employee Updated Successfully", "okay");
    }
    else{
      if(this.addemployeeform.valid){
        
        this.addemployeeform.controls.id.setValue(this.length);
        this.empser.addemployee(this.addemployeeform.value);
        
        console.log('employee added');
        this.snackbar.openSnackBar_success("Employee Added Successfully", "okay");
        
      }
      else{
        console.log("form not valid");
        return;
      }
    }
  }
}
