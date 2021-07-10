import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { DeletedialogueComponent } from './deletedialogue/deletedialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AddemployeeComponent } from 'src/app/addemployee/addemployee.component';
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
  @Input() currentemployee:any;
  constructor(private empser:EmployeeService, private dialog:MatDialog, private snackbar:SnackbarService) {
    this.choice ='';
    
   }

  ngOnInit() {
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
    this.statusofactivationboolean = !this.statusofactivationboolean;
    if(this.statusofactivationboolean){
      this.statusofactivation="Activate";
      this.isdisabled=true;
    }
    else{
      this.statusofactivation="Deactivate";
      this.isdisabled=false;
    }
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
  }

  deletemp(){
    console.log(this.currentemployee.id);
    this.empser.deleteemployee(this.currentemployee.id);
  }
}
