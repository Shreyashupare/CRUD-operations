import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import {MatPaginator} from '@angular/material/paginator';
import { employee } from './employeeinterface/employeeinterface';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeelist:employee[]=[];
  employeempty:boolean=true;
  editvalue:boolean=false;
  isdisable:boolean=false;
  id_disable:number;

  displayedCols: string[] = ['firstname', 'lastname', 'id', 'gender', 'grade', 'odc', 'bu', 'project', 'actions']
  dataSource: any;


  @ViewChild(MatPaginator) paginator: any;
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog, private employeservice:EmployeeService, private router:Router) {
    this.paginator = '';
    this.employeelist = [];

  }

  
  ngAfterViewInit() {
    
  }

  getallemployeedetails(){
    this.employeservice.getemployeedetails().subscribe(data =>{
      this.employeelist = data;
      console.log(this.employeelist);
      if(this.employeelist.length){
        this.employeempty = false;
      }
      this.dataSource = new MatTableDataSource<employee>(this.employeelist);
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialog() {
    this.editvalue=false;
    this.dialog.open(AddemployeeComponent, {
      data: {edit: this.editvalue},
      width:'40%',
    });
  }
  
  ngOnInit(): void {
    console.log("after logout session storgae return ? "+typeof(JSON.parse(sessionStorage.getItem("islog") || "{}")));
    // if(!JSON.parse(sessionStorage.getItem("islog") || "{}")){
    //   console.log("no sessions exist");
    //   this.router.navigateByUrl("login");
    // }

    this.getallemployeedetails();
    
    //to reload component if employee list is empty
    this.employeservice.get_check().subscribe(() =>{
      this.employeempty = true;
      this.router.navigate([this.router.url]);
      console.log("reloaded component");
    })
  }
}


