import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IDepartment } from '../../model/Employee';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})

export class EmployeeComponent implements OnInit {
  master = inject(MasterService);
  departments: IDepartment[] = [];

  getDepartmentsList() {
    this.master.getDepartments().subscribe((res: IApiResponse) => {
      console.log(res);
      this.departments = res.data;
    });
  }

  changePage(direction:string) {
    console.log('Changing page to ' + direction);
  }

  view() {
    console.log('Viewing employee details');
  }

  edit() {
    console.log('Editing employee details');
  }

  delete() {
    console.log('Deleting employee details');
  }

  close() {
    console.log('Closing the employee registration page');
  }

  add() {
    console.log('Adding a new employee');
  }

  export() {
    console.log('Exporting employee data to CSV');
  }

  ngOnInit(): void {
    console.log('Employee Component is ready');
    this.getDepartmentsList();
  }
}
