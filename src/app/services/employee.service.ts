import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { employee } from '../employee/employeeinterface/employeeinterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "assets/json_files/employeelist.json"
  private _url2:string = "http://localhost:3001/employees"
  //http://localhost:3001/employees
  private subject = new Subject<any>();

  private subject2 = new Subject<any>();
  constructor(private http:HttpClient) { }

  //to refresh the employee component when there is no employee on list
  private subject3 = new Subject<any>();
  set_check(){
    this.subject3.next();
  }

  get_check():Observable<any>{
    return this.subject3.asObservable();
  }
  

  setemployeedetails() {
    this.http.get("http://localhost:3001/employees")
    .subscribe((data: any) => {
      this.subject.next(data);

    }, 
    error => {
      console.log("Error while fetching all employees");
    });

  }

  getemployeedetails():Observable<employee[]>{
    this.setemployeedetails();
    return this.subject.asObservable();
  }
  

  addemployee(employee:object){
    this.http.post("http://localhost:3001/employees", employee).subscribe((employee:any)=>{
      console.log(employee);
      this.getemployeedetails();
    })
  }

  editemployee(data:employee, id:number){
    this.http.put(`http://localhost:3001/employees/${id}`, data).subscribe((data)=>{
      console.log("employee updated" +data);
      this.getemployeedetails();
    })
  }

  deleteemployee(id:number){
    this.http.delete(`http://localhost:3001/employees/${id}`).subscribe((data)=>{
      console.log("employee deleted" +data);
      this.getemployeedetails();
    })
    
  }
}
