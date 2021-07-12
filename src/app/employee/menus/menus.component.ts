import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { DeletedialogueComponent } from './deletedialogue/deletedialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AddemployeeComponent } from 'src/app/addemployee/addemployee.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  choice:string;
  editvalue:boolean;
  isdisabled:boolean=false;
  statusofactivationboolean:boolean=false;
  statusofactivation:string="Deactivate";
  totalemployees:number;
  @Input() currentemployee:any;
  constructor(private router: Router, private empser:EmployeeService, private dialog:MatDialog, private snackbar:SnackbarService) {
    this.choice ='';
    
   }

  ngOnInit() {
    if(this.currentemployee.is_active){
      this.statusofactivation="Deactivate";
      this.isdisabled=false;
    }
    else{
      this.statusofactivation="Active";
      this.isdisabled=true;
    }
  }
  view(){

  }

  edit(){
    this.editvalue=true;
    const dialogRef = this.dialog.open(AddemployeeComponent, {
      width: '30%',
      data: {
        edit: this.editvalue,
        cur_emp_data: this.currentemployee
      }
    });
  }

  changestatus(){
    // this.statusofactivationboolean = !this.statusofactivationboolean;
    // if(this.statusofactivationboolean){
    //   this.statusofactivation="Activate";
    //   this.isdisabled=true;
    //   this.currentemployee.is_active=false;
    // }
    // else{
    //   this.statusofactivation="Deactivate";
    //   this.isdisabled=false;
    //   this.currentemployee.is_active=true;
    // }

    if(this.currentemployee.is_active){
      this.statusofactivation="Deactivate";
      this.isdisabled=false;
      this.currentemployee.is_active=false;
    }
    else{
      this.statusofactivation="Activate";
      this.isdisabled=true;
      this.currentemployee.is_active=true;
    }
    this.empser.editemployee(this.currentemployee, this.currentemployee.id);
  }

  deletedialogue(){
    const dialogRef = this.dialog.open(DeletedialogueComponent, {
      width: '30%',
      data: {
        choice: this.choice
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.choice = result;
      if(this.choice == 'yes') {
        this.deletemp(); 
        this.snackbar.openSnackBar_success("Employee Deleted Successfuly", "Okay");
      }
      else{
        this.snackbar.openSnackBar_error("Delete action Canceled","okay");
      }
    })

    this.empser.getemployeedetails().subscribe(data =>{
      
      this.totalemployees = data.length;

      if(this.totalemployees == 0){
        //call the service to refresh the employee component 
        //employee list is empty
        console.log("list is empty");
        this.router.navigateByUrl('employ');
        this.empser.set_check();
      }
    })
  }

  deletemp(){
    console.log(this.currentemployee.id);
    this.empser.deleteemployee(this.currentemployee.id);
  }
}
