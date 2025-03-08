import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IApiResponse } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor( private http: HttpClient ) {
    console.log('Master Service is ready');
  }

  getDepartments(){
    return this.http.get<IApiResponse>('http://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment');
  }
  getEmployees(){
    return this.http.get<Employee[]>('http://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees');
  }
}

