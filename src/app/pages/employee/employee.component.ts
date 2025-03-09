import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Employee, IApiResponse, IDepartment } from '../../model/Employee';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})

export class EmployeeComponent implements OnInit {
  master = inject(MasterService);
  departments: IDepartment[] = [];
  employees: Employee[] = [];
  page = 1;
  totalPages = 0;
  pageSize = 10;
  isFormOpen:boolean = false


  getDepartmentsList() {
    this.master.getDepartments().subscribe((res: IApiResponse) => {
      console.log(res);
      this.departments = res.data;
    });
  }

  getEmployeesList() {
    this.master.getEmployees().subscribe((res: Employee[]) => {
      console.log(res);
      this.employees = res;
      this.totalPages = Math.ceil(this.employees.length / this.pageSize);
    })
  }

  changePage(direction: string) {
    if (direction === 'next' && this.page < this.totalPages) this.page++;
    if (direction === 'prev' && this.page > 1) this.page--;
    if (direction === 'first') this.page = 1;
    if (direction === 'last') this.page = this.totalPages;

    console.log(`Page changed to ${direction}. Current page: ${this.page}`);
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

  openCloseForm() {
    this.isFormOpen=!this.isFormOpen;
    console.log(`${this.isFormOpen===true?'Opening':'Closing'} the employee registration page - status: ${this.isFormOpen}`);
  }

  add() {
    console.log('Adding a new employee');
  }

  export() {
    console.log('Exporting employee data to CSV');
  }

  ngOnInit(): void {
    console.log('Employee Component is ready');
    this.getEmployeesList();
    this.getDepartmentsList();
  }
}
