import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../model/Employee';

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
}

